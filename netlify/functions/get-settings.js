// Fender Mustang LT 25 - Song Tone Database
// No API key needed. Pure local matching + genre fallback.

const SONGS = [
  // CLASSIC ROCK
  { song: "smells like teen spirit", artist: "nirvana", preset: "JCM", gain: 8, treble: 6, middle: 4, bass: 7, reverb: 2, volume: 7, master: 6, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Crank the gain, scoop the mids slightly. Classic grunge wall of sound." },
  { song: "come as you are", artist: "nirvana", preset: "JCM", gain: 6, treble: 5, middle: 5, bass: 6, reverb: 3, volume: 6, master: 6, stompbox: "Chorus", modulation: "Chorus", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Add chorus for that watery intro tone. Keep gain moderate." },
  { song: "back in black", artist: "ac/dc", preset: "Plexi Drive", gain: 6, treble: 7, middle: 6, bass: 6, reverb: 1, volume: 8, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Bright and punchy. Let the amp breathe — no effects needed." },
  { song: "highway to hell", artist: "ac/dc", preset: "Plexi Drive", gain: 6, treble: 7, middle: 6, bass: 6, reverb: 1, volume: 8, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Same AC/DC formula — bright Plexi tone, let it rip." },
  { song: "whole lotta love", artist: "led zeppelin", preset: "Plexi Drive", gain: 7, treble: 6, middle: 7, bass: 7, reverb: 2, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Fat and aggressive. Boost mids for that Page crunch." },
  { song: "stairway to heaven", artist: "led zeppelin", preset: "Boutique", gain: 4, treble: 6, middle: 6, bass: 5, reverb: 4, volume: 6, master: 5, stompbox: "None", modulation: "None", delay: "Analog Delay", delay_time_ms: 350, reverb_type: "Hall", confidence: "high", notes: "Clean fingerpicking tone to start, then swell gain toward the solo." },
  { song: "sweet child o mine", artist: "guns n roses", preset: "JCM", gain: 7, treble: 6, middle: 5, bass: 6, reverb: 2, volume: 7, master: 7, stompbox: "None", modulation: "Chorus", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "JCM800 vibe. Chorus adds width to Slash's tone." },
  { song: "purple haze", artist: "jimi hendrix", preset: "Plexi Drive", gain: 7, treble: 7, middle: 6, bass: 5, reverb: 3, volume: 7, master: 7, stompbox: "Fuzz", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Fuzz face into a Marshall stack. Spring reverb for era-correct tone." },
  { song: "voodoo child", artist: "jimi hendrix", preset: "Plexi Drive", gain: 8, treble: 7, middle: 6, bass: 6, reverb: 2, volume: 8, master: 7, stompbox: "Fuzz", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Heavy fuzz, wide open tone. Wah optional for the solo." },
  { song: "comfortably numb", artist: "pink floyd", preset: "Clean Twin", gain: 3, treble: 6, middle: 5, bass: 6, reverb: 6, volume: 6, master: 5, stompbox: "Overdrive", modulation: "Chorus", delay: "Digital Delay", delay_time_ms: 500, reverb_type: "Hall", confidence: "high", notes: "Clean base with overdrive for solo. Heavy delay and reverb for space." },
  { song: "another brick in the wall", artist: "pink floyd", preset: "Clean Twin", gain: 3, treble: 5, middle: 4, bass: 6, reverb: 5, volume: 6, master: 5, stompbox: "None", modulation: "Chorus", delay: "Digital Delay", delay_time_ms: 440, reverb_type: "Hall", confidence: "high", notes: "Dark, spacious clean. Gilmour's famous delay-heavy tone." },
  { song: "enter sandman", artist: "metallica", preset: "Metal 2000", gain: 9, treble: 7, middle: 3, bass: 8, reverb: 1, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Scooped mids are key to Metallica's tone. Tight low end." },
  { song: "master of puppets", artist: "metallica", preset: "Metal 2000", gain: 9, treble: 7, middle: 3, bass: 8, reverb: 1, volume: 7, master: 8, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Maximum gain, scooped mids. Downpick hard for that Hetfield chug." },
  { song: "one", artist: "metallica", preset: "Metal 2000", gain: 8, treble: 6, middle: 4, bass: 7, reverb: 2, volume: 6, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Starts clean then gets heavy. Dial back gain for the intro." },
  { song: "paranoid", artist: "black sabbath", preset: "Plexi Drive", gain: 7, treble: 5, middle: 6, bass: 8, reverb: 2, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Dark and heavy. More bass than you think. Iommi's detuned doom." },
  { song: "iron man", artist: "black sabbath", preset: "Plexi Drive", gain: 7, treble: 5, middle: 6, bass: 8, reverb: 1, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Slow and heavy. Let each note ring — clarity matters more than gain." },
  { song: "sunshine of your love", artist: "cream", preset: "Plexi Drive", gain: 7, treble: 6, middle: 7, bass: 6, reverb: 2, volume: 7, master: 6, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Creamy British crunch. Clapton's woman tone — roll off treble on guitar." },
  { song: "layla", artist: "derek and the dominos", preset: "Plexi Drive", gain: 6, treble: 7, middle: 6, bass: 5, reverb: 3, volume: 7, master: 6, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Bright and biting. Duane Allman's slide meets Clapton's Strat tone." },
  // BLUES
  { song: "pride and joy", artist: "stevie ray vaughan", preset: "Texas Crunch", gain: 5, treble: 7, middle: 7, bass: 6, reverb: 3, volume: 8, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Volume is key — SRV played loud. Spring reverb, cut the front pickup." },
  { song: "texas flood", artist: "stevie ray vaughan", preset: "Texas Crunch", gain: 5, treble: 6, middle: 7, bass: 7, reverb: 4, volume: 8, master: 7, stompbox: "Overdrive", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Warm and singing. Overdrive pedal light for sustain, not distortion." },
  { song: "the thrill is gone", artist: "bb king", preset: "Blues", gain: 4, treble: 5, middle: 7, bass: 6, reverb: 4, volume: 6, master: 5, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Lucille's tone — smooth and vocal. No effects, just amp and fingers." },
  { song: "crossroads", artist: "cream", preset: "Texas Crunch", gain: 6, treble: 7, middle: 6, bass: 5, reverb: 2, volume: 8, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Bright and aggressive. Clapton's live tone — pushing the amp hard." },
  { song: "sweet home chicago", artist: "robert johnson", preset: "Blues", gain: 3, treble: 6, middle: 6, bass: 5, reverb: 3, volume: 5, master: 5, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "medium", notes: "Vintage acoustic-electric vibe. Keep it clean and dynamic." },
  // COUNTRY
  { song: "friends in low places", artist: "garth brooks", preset: "Clean Twin", gain: 2, treble: 6, middle: 6, bass: 5, reverb: 5, volume: 6, master: 5, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Hall", confidence: "medium", notes: "Crystal clean country tone. Let the natural dynamics shine." },
  { song: "folsom prison blues", artist: "johnny cash", preset: "Tweed", gain: 3, treble: 5, middle: 6, bass: 6, reverb: 2, volume: 6, master: 5, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Vintage tweed warmth. Muffled, dark, and rhythmic." },
  { song: "ring of fire", artist: "johnny cash", preset: "Tweed", gain: 3, treble: 5, middle: 6, bass: 6, reverb: 3, volume: 6, master: 5, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Warm and punchy. Mariachi-inspired picking attack." },
  // POP / INDIE
  { song: "with or without you", artist: "u2", preset: "Clean Twin", gain: 2, treble: 6, middle: 5, bass: 5, reverb: 7, volume: 6, master: 5, stompbox: "None", modulation: "None", delay: "Digital Delay", delay_time_ms: 420, reverb_type: "Hall", confidence: "high", notes: "The Edge's signature ambient delay. Dotted eighth note delay is key." },
  { song: "where the streets have no name", artist: "u2", preset: "Clean Twin", gain: 2, treble: 7, middle: 5, bass: 4, reverb: 7, volume: 6, master: 5, stompbox: "None", modulation: "None", delay: "Digital Delay", delay_time_ms: 400, reverb_type: "Hall", confidence: "high", notes: "Bright and shimmering with heavy delay. The Edge's arena tone." },
  { song: "losing my religion", artist: "rem", preset: "Champ", gain: 2, treble: 5, middle: 6, bass: 5, reverb: 4, volume: 5, master: 5, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Mandolin-inspired clean picking. Very light and articulate." },
  { song: "mr jones", artist: "counting crows", preset: "Clean Twin", gain: 3, treble: 6, middle: 6, bass: 5, reverb: 4, volume: 6, master: 5, stompbox: "None", modulation: "Chorus", delay: "None", delay_time_ms: null, reverb_type: "Hall", confidence: "medium", notes: "Jangly clean tone with slight chorus width." },
  // ALTERNATIVE / GRUNGE
  { song: "black hole sun", artist: "soundgarden", preset: "JCM", gain: 6, treble: 5, middle: 5, bass: 6, reverb: 5, volume: 6, master: 6, stompbox: "None", modulation: "Chorus", delay: "None", delay_time_ms: null, reverb_type: "Hall", confidence: "high", notes: "Kim Thayil's lush chorus-heavy tone. Clean-ish with amp grit." },
  { song: "black", artist: "pearl jam", preset: "JCM", gain: 5, treble: 6, middle: 6, bass: 6, reverb: 4, volume: 6, master: 6, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Hall", confidence: "high", notes: "Warm and emotional. McCready's singing Strat tone." },
  { song: "even flow", artist: "pearl jam", preset: "JCM", gain: 6, treble: 6, middle: 5, bass: 7, reverb: 2, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Heavy grunge crunch. Tight and aggressive rhythm tone." },
  { song: "would", artist: "alice in chains", preset: "JCM", gain: 7, treble: 6, middle: 5, bass: 7, reverb: 2, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Dark and down-tuned. Jerry Cantrell's creamy crunch." },
  { song: "rooster", artist: "alice in chains", preset: "JCM", gain: 7, treble: 5, middle: 5, bass: 8, reverb: 2, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Drop D heaviness. Bass up, mids scooped slightly." },
  { song: "creep", artist: "radiohead", preset: "Clean Twin", gain: 3, treble: 6, middle: 5, bass: 5, reverb: 5, volume: 6, master: 5, stompbox: "Distortion", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Hall", confidence: "high", notes: "Clean verses, hit the distortion for the heavy chorus drop." },
  { song: "semi-charmed life", artist: "third eye blind", preset: "American Steel", gain: 5, treble: 7, middle: 6, bass: 5, reverb: 3, volume: 7, master: 6, stompbox: "None", modulation: "Chorus", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "medium", notes: "Bright and driving. High energy alternative rock tone." },
  // PUNK
  { song: "basket case", artist: "green day", preset: "JCM", gain: 7, treble: 7, middle: 5, bass: 6, reverb: 1, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Billie Joe's fat punk tone. Tight and punchy, almost no reverb." },
  { song: "good riddance", artist: "green day", preset: "Clean Twin", gain: 2, treble: 6, middle: 6, bass: 5, reverb: 3, volume: 5, master: 5, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "high", notes: "Acoustic-style clean fingerpicking. Warm and simple." },
  { song: "american idiot", artist: "green day", preset: "American Steel", gain: 8, treble: 7, middle: 5, bass: 6, reverb: 1, volume: 8, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "High-energy punk crunch. Tight and loud." },
  { song: "blitzkrieg bop", artist: "ramones", preset: "Plexi Drive", gain: 6, treble: 7, middle: 6, bass: 5, reverb: 1, volume: 8, master: 8, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Raw Marshall bark. No frills, just power chords and attitude." },
  // CLASSIC COUNTRY / AMERICANA
  { song: "take me home country roads", artist: "john denver", preset: "Champ", gain: 2, treble: 6, middle: 6, bass: 5, reverb: 4, volume: 5, master: 5, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "medium", notes: "Clean and warm. Acoustic guitar feel on electric." },
  // FUNK / R&B
  { song: "superstition", artist: "stevie wonder", preset: "Clean Twin", gain: 2, treble: 6, middle: 7, bass: 6, reverb: 2, volume: 7, master: 6, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "medium", notes: "Funky and percussive. Clean with presence. Clavinet vibe on guitar." },
  { song: "sir duke", artist: "stevie wonder", preset: "Clean Twin", gain: 2, treble: 7, middle: 6, bass: 5, reverb: 3, volume: 7, master: 6, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "medium", notes: "Bright and joyful. Maximum clarity." },
  // JAZZ
  { song: "autumn leaves", artist: "jazz standard", preset: "Champ", gain: 1, treble: 4, middle: 6, bass: 7, reverb: 5, volume: 5, master: 4, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Hall", confidence: "medium", notes: "Dark and warm jazz tone. Roll back the treble, let the bass sing." },
  { song: "so what", artist: "miles davis", preset: "Champ", gain: 1, treble: 3, middle: 6, bass: 7, reverb: 5, volume: 5, master: 4, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Hall", confidence: "medium", notes: "Modal jazz warmth. Very clean, very dark, very mellow." },
  // MODERN ROCK
  { song: "seven nation army", artist: "the white stripes", preset: "Tweed", gain: 5, treble: 5, middle: 6, bass: 8, reverb: 2, volume: 7, master: 6, stompbox: "None", modulation: "None", delay: "Digital Delay", delay_time_ms: 800, reverb_type: "Room", confidence: "high", notes: "Massive bass-heavy riff through a Digitech Whammy into a tweed. Long delay for that octave effect." },
  { song: "black betty", artist: "ram jam", preset: "Plexi Drive", gain: 7, treble: 7, middle: 6, bass: 6, reverb: 2, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "medium", notes: "Raw and driving. Straight rock and roll attitude." },
  { song: "hotel california", artist: "eagles", preset: "Clean Twin", gain: 3, treble: 6, middle: 6, bass: 5, reverb: 5, volume: 6, master: 5, stompbox: "None", modulation: "Chorus", delay: "Analog Delay", delay_time_ms: 350, reverb_type: "Hall", confidence: "high", notes: "12-string shimmer tone. Chorus and delay for the iconic intro arpeggios." },
  { song: "life in the fast lane", artist: "eagles", preset: "American Steel", gain: 6, treble: 7, middle: 6, bass: 6, reverb: 2, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "high", notes: "Joe Walsh's gritty tone. American crunch, punchy and bright." },
];

// Genre-based presets for unknown songs
const GENRE_PRESETS = {
  metal:     { preset: "Metal 2000", gain: 9, treble: 7, middle: 3, bass: 8, reverb: 1, volume: 7, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "low", notes: "Generic metal tone — high gain, scooped mids, tight low end." },
  rock:      { preset: "JCM", gain: 6, treble: 6, middle: 5, bass: 6, reverb: 2, volume: 7, master: 6, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "low", notes: "Classic rock crunch — adjust gain to taste." },
  blues:     { preset: "Texas Crunch", gain: 5, treble: 6, middle: 7, bass: 6, reverb: 3, volume: 7, master: 6, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "low", notes: "Blues foundation — warm mids, spring reverb, let the dynamics breathe." },
  country:   { preset: "Clean Twin", gain: 2, treble: 7, middle: 5, bass: 5, reverb: 4, volume: 6, master: 5, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "low", notes: "Twangy clean country tone — bright and snappy." },
  jazz:      { preset: "Champ", gain: 1, treble: 3, middle: 6, bass: 7, reverb: 4, volume: 5, master: 4, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Hall", confidence: "low", notes: "Dark and warm jazz tone — roll the treble back, stay clean." },
  punk:      { preset: "American Steel", gain: 8, treble: 7, middle: 5, bass: 6, reverb: 1, volume: 8, master: 7, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Room", confidence: "low", notes: "Fast and loud punk tone — no frills, just crunch." },
  pop:       { preset: "Clean Twin", gain: 3, treble: 6, middle: 6, bass: 5, reverb: 4, volume: 6, master: 5, stompbox: "None", modulation: "Chorus", delay: "None", delay_time_ms: null, reverb_type: "Hall", confidence: "low", notes: "Clean pop tone with chorus shimmer." },
  default:   { preset: "Clean Twin", gain: 5, treble: 6, middle: 6, bass: 6, reverb: 3, volume: 6, master: 5, stompbox: "None", modulation: "None", delay: "None", delay_time_ms: null, reverb_type: "Spring", confidence: "low", notes: "Starting point — dial it in from here based on the song's genre." }
};

function normalize(str) {
  return (str || "").toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
}

function similarity(a, b) {
  const wordsA = a.split(" ");
  const wordsB = b.split(" ");
  const matches = wordsA.filter(w => w.length > 2 && wordsB.includes(w));
  return matches.length / Math.max(wordsA.length, wordsB.length);
}

function findBestMatch(song, artist) {
  const normSong = normalize(song);
  const normArtist = normalize(artist);
  let bestScore = 0;
  let bestMatch = null;

  for (const entry of SONGS) {
    const songScore = similarity(normSong, entry.song);
    const artistScore = normArtist ? similarity(normArtist, entry.artist) * 0.5 : 0;
    const total = songScore + artistScore;
    if (total > bestScore) {
      bestScore = total;
      bestMatch = entry;
    }
  }

  // Require at least some song title match
  return bestScore >= 0.4 ? { match: bestMatch, score: bestScore } : null;
}

function guessGenre(artist) {
  const a = normalize(artist);
  if (/metallica|slayer|megadeth|sabbath|maiden|pantera|tool|korn|slipknot/.test(a)) return "metal";
  if (/nirvana|soundgarden|pearl jam|alice in chains|bush|stone temple/.test(a)) return "rock";
  if (/green day|ramones|clash|sex pistols|blink|sum 41|offspring/.test(a)) return "punk";
  if (/bb king|muddy waters|vaughan|clapton|buddy guy|albert king/.test(a)) return "blues";
  if (/cash|brooks|strait|urban|chesney|williams|hank/.test(a)) return "country";
  if (/coltrane|miles davis|parker|monk|wes montgomery|pat metheny/.test(a)) return "jazz";
  if (/taylor swift|beyonce|rihanna|katy perry|ariana|justin/.test(a)) return "pop";
  return "default";
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { song, artist } = JSON.parse(event.body || "{}");
  if (!song) {
    return { statusCode: 400, body: JSON.stringify({ error: "Song required" }) };
  }

  const result = findBestMatch(song, artist);
  let settings;

  if (result) {
    settings = { ...result.match, song, artist: artist || result.match.artist };
    if (result.score >= 0.7) settings.confidence = "high";
    else if (result.score >= 0.4) settings.confidence = "medium";
  } else {
    const genre = guessGenre(artist);
    settings = { ...GENRE_PRESETS[genre], song, artist: artist || "Unknown" };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(settings)
  };
}
