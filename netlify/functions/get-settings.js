export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { song, artist } = JSON.parse(event.body || '{}');
  if (!song) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Song is required' }) };
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AlzaSyBnWlpZ4g7d6gUSwGID8VabVPYX9ZpW540';

  const prompt = `You are an expert guitarist and amp technician specializing in the Fender Mustang LT 25 amplifier.

Given the song "${song}"${artist ? ` by ${artist}` : ''}, provide the EXACT amp settings to replicate that tone on a Fender Mustang LT 25.

The Mustang LT 25 has these controls (all 0-10 scale):
- Gain, Volume, Treble, Middle, Bass, Reverb, Master

Amp presets available: Clean Twin, Tweed, Blues, Boutique, Champ, Princeton, Bassman, Brit Clean, Brit Blues, Plexi Drive, JCM, Metal 2000, Super-Sonic, American Steel, Texas Crunch

Effects:
- Stompbox: None, Compressor, Fuzz, Overdrive, Distortion, Boost
- Modulation: None, Chorus, Flanger, Phaser, Tremolo, Vibrato
- Delay: None, Tape Delay, Analog Delay, Digital Delay
- Reverb type: Spring, Hall, Plate, Room, Arena, Shimmer

Return ONLY valid JSON, no markdown, no explanation:
{
  "song": "${song}",
  "artist": "${artist || 'Unknown'}",
  "preset": "<amp model name>",
  "confidence": "<high|medium|low>",
  "gain": <0-10>,
  "treble": <0-10>,
  "middle": <0-10>,
  "bass": <0-10>,
  "reverb": <0-10>,
  "volume": <0-10>,
  "master": <0-10>,
  "stompbox": "<effect name or None>",
  "modulation": "<effect name or None>",
  "delay": "<delay type or None>",
  "delay_time_ms": <ms or null>,
  "reverb_type": "<reverb type>",
  "notes": "<1-2 sentence tip on dialing in this tone>"
}`;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            responseMimeType: 'application/json'
          }
        })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error('Gemini API error:', data);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Gemini API error', detail: data })
      };
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('No response text from Gemini');

    const settings = JSON.parse(text);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(settings)
    };

  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
