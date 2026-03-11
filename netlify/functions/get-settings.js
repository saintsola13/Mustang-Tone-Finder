import asyncio
import logging
import requests
from datetime import datetime
import pytz
from telegram import Bot, Update
from telegram.ext import Application, CommandHandler, ContextTypes

BOT_TOKEN  = "8581885643:AAEDQZQKtSGgbCdLOFYYOFvxM1uG6R0lkkY"
CHAT_ID    = "8488999370"
NEWS_KEY   = "36cea86b99654711aee748d4498b07ad"
OWM_KEY    = "01e7cf153d5105901bc4a0fd5fcbd1f7"
AVATAR_URL = "https://i.postimg.cc/Y0R5YWnf/8926CAE1-43EA-4DEB-85B1-89F34CD1F552.png"
CITY       = "Tampa,US"
COINS      = ["bitcoin", "ethereum", "solana"]
COIN_SYMS  = {"bitcoin": "BTC", "ethereum": "ETH", "solana": "SOL"}
TZ         = pytz.timezone("America/New_York")
SEND_HOURS = {6, 10, 14, 18, 22}

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger(__name__)

def get_weather():
    try:
        url = f"https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={OWM_KEY}&units=imperial"
        d = requests.get(url, timeout=10).json()
        desc  = d["weather"][0]["description"].title()
        temp  = round(d["main"]["temp"])
        feels = round(d["main"]["feels_like"])
        humid = d["main"]["humidity"]
        wind  = round(d["wind"]["speed"])
        return f"*Tampa Weather*\n{desc} | {temp}F (feels {feels}F)\nHumidity: {humid}% | Wind: {wind} mph"
    except Exception as e:
        log.error("Weather error: %s", e)
        return "*Tampa Weather*\nUnavailable right now."

def get_news():
    try:
        url = f"https://newsapi.org/v2/top-headlines?language=en&pageSize=5&apiKey={NEWS_KEY}&category=general"
        articles = requests.get(url, timeout=10).json().get("articles", [])[:5]
        lines = ["*Top 5 Headlines*"]
        for i, a in enumerate(articles, 1):
            title = a.get("title", "No title").split(" - ")[0].strip()
            lines.append(f"{i}. {title}")
        return "\n".join(lines)
    except Exception as e:
        log.error("News error: %s", e)
        return "*Top 5 Headlines*\nUnavailable right now."

def get_crypto():
    try:
        ids = ",".join(COINS)
        url = f"https://api.coingecko.com/api/v3/simple/price?ids={ids}&vs_currencies=usd&include_24hr_change=true"
        data = requests.get(url, timeout=10).json()
        lines = ["*Crypto Prices*"]
        for coin in COINS:
            sym   = COIN_SYMS[coin]
            price = data[coin]["usd"]
            chg   = data[coin].get("usd_24h_change", 0)
            arrow = "+" if chg >= 0 else ""
            lines.append(f"{sym}: ${price:,.2f}  ({arrow}{chg:.1f}%)")
        return "\n".join(lines)
    except Exception as e:
        log.error("Crypto error: %s", e)
        return "*Crypto Prices*\nUnavailable right now."

def get_horoscope():
    try:
        url = "https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=Sagittarius&day=TODAY"
        data = requests.get(url, timeout=10).json()
        horoscope = data.get("data", {}).get("horoscope_data", "") or data.get("data", {}).get("horoscope", "")
        if horoscope:
            return f"*Sagittarius Today* \u25b2\n{horoscope}"
        raise ValueError("empty")
    except Exception as e:
        log.error("Horoscope error: %s", e)
        return "*Sagittarius Today*\nThe stars are quiet... check back later."

def build_caption():
    now   = datetime.now(TZ)
    stamp = now.strftime("%A, %B %-d at %-I:%M %p ET")
    return "\n".join([
        f"_{stamp}_",
        "",
        get_weather(),
        "",
        get_news(),
        "",
        get_crypto(),
        "",
        get_horoscope(),
    ])

async def send_briefing(chat_id, bot):
    await bot.send_photo(chat_id=chat_id, photo=AVATAR_URL, caption="St. Daily here with your daily update!")
    await bot.send_message(chat_id=chat_id, text=build_caption(), parse_mode="Markdown")
    await bot.send_message(chat_id=chat_id, text="FCKOFF and have a great day!")

async def cmd_briefing(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await send_briefing(update.message.chat_id, context.bot)

async def cmd_weather(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(get_weather(), parse_mode="Markdown")

async def cmd_news(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(get_news(), parse_mode="Markdown")

async def cmd_crypto(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(get_crypto(), parse_mode="Markdown")

async def cmd_horoscope(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(get_horoscope(), parse_mode="Markdown")

async def cmd_help(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("*St. Daily Commands*\n\n/briefing - Full report with photo\n/weather - Tampa weather now\n/news - Top 5 headlines\n/crypto - BTC ETH SOL prices\n/horoscope - Sagittarius reading\n/help - This menu", parse_mode="Markdown")

async def scheduler(bot: Bot):
    sent_this_hour = None
    log.info("Scheduler running. Send hours: %s Eastern", sorted(SEND_HOURS))
    while True:
        now = datetime.now(TZ)
        key = (now.date(), now.hour)
        if now.hour in SEND_HOURS and key != sent_this_hour:
            try:
                await send_briefing(CHAT_ID, bot)
                log.info("Scheduled briefing sent.")
                sent_this_hour = key
            except Exception as e:
                log.error("Scheduled send failed: %s", e)
        await asyncio.sleep(60 - now.second)

async def main():
    app = Application.builder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("briefing",  cmd_briefing))
    app.add_handler(CommandHandler("weather",   cmd_weather))
    app.add_handler(CommandHandler("news",      cmd_news))
    app.add_handler(CommandHandler("crypto",    cmd_crypto))
    app.add_handler(CommandHandler("horoscope", cmd_horoscope))
    app.add_handler(CommandHandler("help",      cmd_help))
    await app.initialize()
    await app.start()
    await app.updater.start_polling()
    log.info("Bot started!")
    await scheduler(app.bot)

if __name__ == "__main__":
    asyncio.run(main())
