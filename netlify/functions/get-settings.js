// Fender Mustang LT 25 — Song Tone Database
// Rhythm + Solo modes, full effect parameter details

const SONGS = [
  {
    song: "smells like teen spirit", artist: "nirvana",
    rhythm: {
      preset: "JCM", gain: 8, treble: 6, bass: 7, volume: 7, master: 6, fx: 4,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 3, tone: 5, level: 3 }
    },
    solo: {
      preset: "JCM", gain: 9, treble: 7, bass: 6, volume: 8, master: 7, fx: 5,
      stompbox: { name: "Overdrive", level: 7, gain: 4, tone: 6 },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 4, tone: 5, level: 4 }
    },
    confidence: "high", notes: "Crank the gain for that grunge wall of sound. Solo boosts with light overdrive."
  },
  {
    song: "come as you are", artist: "nirvana",
    rhythm: {
      preset: "JCM", gain: 6, treble: 5, bass: 6, volume: 6, master: 6, fx: 5,
      stompbox: { name: "None" },
      modulation: { name: "Chorus", rate: 3, depth: 5, level: 5 },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 3, tone: 5, level: 3 }
    },
    solo: {
      preset: "JCM", gain: 7, treble: 6, bass: 6, volume: 7, master: 6, fx: 5,
      stompbox: { name: "None" },
      modulation: { name: "Chorus", rate: 3, depth: 4, level: 4 },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 4, tone: 5, level: 4 }
    },
    confidence: "high", notes: "Watery chorus is the signature. Keep gain moderate throughout."
  },
  {
    song: "back in black", artist: "ac/dc",
    rhythm: {
      preset: "Plexi Drive", gain: 6, treble: 7, bass: 6, volume: 8, master: 7, fx: 3,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 2, tone: 5, level: 2 }
    },
    solo: {
      preset: "Plexi Drive", gain: 8, treble: 7, bass: 5, volume: 8, master: 8, fx: 4,
      stompbox: { name: "Boost", level: 7, gain: 3, tone: 7 },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 2, tone: 5, level: 2 }
    },
    confidence: "high", notes: "Punchy British crunch. Boost for Angus solos, keep it bright."
  },
  {
    song: "highway to hell", artist: "ac/dc",
    rhythm: {
      preset: "Plexi Drive", gain: 6, treble: 7, bass: 6, volume: 8, master: 7, fx: 3,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 2, tone: 5, level: 2 }
    },
    solo: {
      preset: "Plexi Drive", gain: 8, treble: 8, bass: 5, volume: 8, master: 8, fx: 4,
      stompbox: { name: "Boost", level: 8, gain: 3, tone: 7 },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 2, tone: 6, level: 2 }
    },
    confidence: "high", notes: "Classic Angus tone. Bright and raw — no frills needed."
  },
  {
    song: "whole lotta love", artist: "led zeppelin",
    rhythm: {
      preset: "Plexi Drive", gain: 7, treble: 6, bass: 7, volume: 7, master: 7, fx: 4,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 3, tone: 5, level: 3 }
    },
    solo: {
      preset: "Plexi Drive", gain: 8, treble: 7, bass: 6, volume: 8, master: 7, fx: 5,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "Tape Delay", time_ms: 280, feedback: 3, level: 4 },
      reverb: { type: "Room", decay: 4, tone: 5, level: 4 }
    },
    confidence: "high", notes: "Fat and aggressive. Page adds tape delay on solos for depth."
  },
  {
    song: "stairway to heaven", artist: "led zeppelin",
    rhythm: {
      preset: "Boutique", gain: 4, treble: 6, bass: 5, volume: 6, master: 5, fx: 5,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "Analog Delay", time_ms: 350, feedback: 3, level: 4 },
      reverb: { type: "Hall", decay: 5, tone: 5, level: 5 }
    },
    solo: {
      preset: "Plexi Drive", gain: 7, treble: 7, bass: 6, volume: 8, master: 7, fx: 5,
      stompbox: { name: "Overdrive", level: 6, gain: 5, tone: 6 },
      modulation: { name: "None" },
      delay: { name: "Analog Delay", time_ms: 380, feedback: 4, level: 5 },
      reverb: { type: "Hall", decay: 5, tone: 5, level: 5 }
    },
    confidence: "high", notes: "Clean fingerpicking to start, then blast into the solo. Completely different sounds."
  },
  {
    song: "sweet child o mine", artist: "guns n roses",
    rhythm: {
      preset: "JCM", gain: 7, treble: 6, bass: 6, volume: 7, master: 7, fx: 5,
      stompbox: { name: "None" },
      modulation: { name: "Chorus", rate: 2, depth: 4, level: 4 },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 3, tone: 5, level: 3 }
    },
    solo: {
      preset: "JCM", gain: 8, treble: 7, bass: 6, volume: 8, master: 8, fx: 5,
      stompbox: { name: "Overdrive", level: 7, gain: 5, tone: 6 },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 4, tone: 5, level: 4 }
    },
    confidence: "high", notes: "Slash's JCM800 tone. Chorus on rhythm for width, raw for the solo."
  },
  {
    song: "purple haze", artist: "jimi hendrix",
    rhythm: {
      preset: "Plexi Drive", gain: 7, treble: 7, bass: 5, volume: 7, master: 7, fx: 5,
      stompbox: { name: "Fuzz", level: 8, sustain: 7, tone: 6 },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 4, tone: 5, level: 4 }
    },
    solo: {
      preset: "Plexi Drive", gain: 8, treble: 7, bass: 5, volume: 8, master: 8, fx: 6,
      stompbox: { name: "Fuzz", level: 9, sustain: 8, tone: 6 },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 4, tone: 5, level: 4 }
    },
    confidence: "high", notes: "Fuzz Face into Marshall. Crank the fuzz for the solo — let it rip."
  },
  {
    song: "comfortably numb", artist: "pink floyd",
    rhythm: {
      preset: "Clean Twin", gain: 3, treble: 6, bass: 6, volume: 6, master: 5, fx: 6,
      stompbox: { name: "None" },
      modulation: { name: "Chorus", rate: 2, depth: 4, level: 5 },
      delay: { name: "Digital Delay", time_ms: 500, feedback: 5, level: 5 },
      reverb: { type: "Hall", decay: 7, tone: 5, level: 6 }
    },
    solo: {
      preset: "Boutique", gain: 5, treble: 6, bass: 6, volume: 7, master: 6, fx: 7,
      stompbox: { name: "Overdrive", level: 6, gain: 4, tone: 5 },
      modulation: { name: "Chorus", rate: 2, depth: 5, level: 5 },
      delay: { name: "Digital Delay", time_ms: 500, feedback: 6, level: 6 },
      reverb: { type: "Hall", decay: 8, tone: 5, level: 7 }
    },
    confidence: "high", notes: "Gilmour's singing sustain. Space and delay are everything. Solo needs more drive and reverb."
  },
  {
    song: "enter sandman", artist: "metallica",
    rhythm: {
      preset: "Metal 2000", gain: 9, treble: 7, bass: 8, volume: 7, master: 7, fx: 3,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 2, tone: 5, level: 2 }
    },
    solo: {
      preset: "Metal 2000", gain: 9, treble: 7, bass: 7, volume: 8, master: 8, fx: 4,
      stompbox: { name: "Overdrive", level: 6, gain: 3, tone: 6 },
      modulation: { name: "None" },
      delay: { name: "Digital Delay", time_ms: 300, feedback: 3, level: 4 },
      reverb: { type: "Room", decay: 3, tone: 5, level: 3 }
    },
    confidence: "high", notes: "Scooped mids, maximum palm muting. Tight and crushing."
  },
  {
    song: "master of puppets", artist: "metallica",
    rhythm: {
      preset: "Metal 2000", gain: 9, treble: 7, bass: 8, volume: 7, master: 8, fx: 3,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 1, tone: 5, level: 2 }
    },
    solo: {
      preset: "Metal 2000", gain: 9, treble: 8, bass: 6, volume: 8, master: 8, fx: 5,
      stompbox: { name: "Overdrive", level: 7, gain: 4, tone: 7 },
      modulation: { name: "None" },
      delay: { name: "Digital Delay", time_ms: 250, feedback: 3, level: 4 },
      reverb: { type: "Room", decay: 3, tone: 6, level: 3 }
    },
    confidence: "high", notes: "Downpick hard for rhythm. Kirk's solos need more treble and a touch of delay."
  },
  {
    song: "pride and joy", artist: "stevie ray vaughan",
    rhythm: {
      preset: "Texas Crunch", gain: 5, treble: 7, bass: 6, volume: 8, master: 7, fx: 4,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 4, tone: 6, level: 4 }
    },
    solo: {
      preset: "Texas Crunch", gain: 6, treble: 7, bass: 6, volume: 9, master: 8, fx: 5,
      stompbox: { name: "Overdrive", level: 7, gain: 3, tone: 7 },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 5, tone: 6, level: 5 }
    },
    confidence: "high", notes: "SRV played LOUD. Volume is your friend. Slight overdrive for solo sustain."
  },
  {
    song: "the thrill is gone", artist: "bb king",
    rhythm: {
      preset: "Blues", gain: 4, treble: 5, bass: 6, volume: 6, master: 5, fx: 4,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 5, tone: 4, level: 5 }
    },
    solo: {
      preset: "Blues", gain: 5, treble: 5, bass: 6, volume: 7, master: 6, fx: 4,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 6, tone: 4, level: 5 }
    },
    confidence: "high", notes: "Lucille's tone — smooth, vocal, no effects. Just amp and fingers."
  },
  {
    song: "with or without you", artist: "u2",
    rhythm: {
      preset: "Clean Twin", gain: 2, treble: 6, bass: 5, volume: 6, master: 5, fx: 7,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "Digital Delay", time_ms: 420, feedback: 5, level: 6 },
      reverb: { type: "Hall", decay: 7, tone: 5, level: 7 }
    },
    solo: {
      preset: "Clean Twin", gain: 2, treble: 6, bass: 5, volume: 7, master: 5, fx: 8,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "Digital Delay", time_ms: 420, feedback: 6, level: 7 },
      reverb: { type: "Hall", decay: 8, tone: 5, level: 8 }
    },
    confidence: "high", notes: "The Edge's dotted 8th delay is the whole song. Push feedback and level for the swell."
  },
  {
    song: "hotel california", artist: "eagles",
    rhythm: {
      preset: "Clean Twin", gain: 3, treble: 6, bass: 5, volume: 6, master: 5, fx: 6,
      stompbox: { name: "None" },
      modulation: { name: "Chorus", rate: 2, depth: 4, level: 5 },
      delay: { name: "Analog Delay", time_ms: 350, feedback: 3, level: 4 },
      reverb: { type: "Hall", decay: 6, tone: 5, level: 5 }
    },
    solo: {
      preset: "Clean Twin", gain: 4, treble: 7, bass: 5, volume: 7, master: 6, fx: 6,
      stompbox: { name: "Overdrive", level: 5, gain: 4, tone: 6 },
      modulation: { name: "Chorus", rate: 2, depth: 3, level: 4 },
      delay: { name: "Analog Delay", time_ms: 380, feedback: 4, level: 5 },
      reverb: { type: "Hall", decay: 6, tone: 5, level: 5 }
    },
    confidence: "high", notes: "Ambient 12-string shimmer. Two-guitar harmony solo — dial up the overdrive slightly."
  },
  {
    song: "seven nation army", artist: "the white stripes",
    rhythm: {
      preset: "Tweed", gain: 5, treble: 5, bass: 8, volume: 7, master: 6, fx: 5,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "Digital Delay", time_ms: 800, feedback: 4, level: 6 },
      reverb: { type: "Room", decay: 3, tone: 4, level: 3 }
    },
    solo: {
      preset: "Tweed", gain: 6, treble: 6, bass: 7, volume: 8, master: 7, fx: 5,
      stompbox: { name: "Overdrive", level: 7, gain: 5, tone: 5 },
      modulation: { name: "None" },
      delay: { name: "Digital Delay", time_ms: 800, feedback: 4, level: 5 },
      reverb: { type: "Room", decay: 3, tone: 4, level: 3 }
    },
    confidence: "high", notes: "The long delay creates the octave-drop illusion. Bass-heavy for maximum stomp."
  },
  {
    song: "basket case", artist: "green day",
    rhythm: {
      preset: "JCM", gain: 7, treble: 7, bass: 6, volume: 7, master: 7, fx: 3,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 2, tone: 5, level: 2 }
    },
    solo: {
      preset: "JCM", gain: 8, treble: 7, bass: 6, volume: 8, master: 7, fx: 4,
      stompbox: { name: "Overdrive", level: 6, gain: 4, tone: 6 },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Room", decay: 2, tone: 5, level: 2 }
    },
    confidence: "high", notes: "Billie Joe's fat punk tone. Tight, punchy, minimal reverb."
  },
  {
    song: "good riddance", artist: "green day",
    rhythm: {
      preset: "Clean Twin", gain: 2, treble: 6, bass: 5, volume: 5, master: 5, fx: 3,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 3, tone: 5, level: 3 }
    },
    solo: {
      preset: "Clean Twin", gain: 2, treble: 6, bass: 5, volume: 5, master: 5, fx: 3,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 3, tone: 5, level: 3 }
    },
    confidence: "high", notes: "Acoustic fingerpicking feel throughout. No difference rhythm vs solo — keep it clean."
  },
  {
    song: "black hole sun", artist: "soundgarden",
    rhythm: {
      preset: "JCM", gain: 6, treble: 5, bass: 6, volume: 6, master: 6, fx: 6,
      stompbox: { name: "None" },
      modulation: { name: "Chorus", rate: 2, depth: 6, level: 6 },
      delay: { name: "None" },
      reverb: { type: "Hall", decay: 6, tone: 4, level: 6 }
    },
    solo: {
      preset: "JCM", gain: 7, treble: 6, bass: 6, volume: 7, master: 7, fx: 6,
      stompbox: { name: "Overdrive", level: 6, gain: 4, tone: 5 },
      modulation: { name: "Chorus", rate: 2, depth: 5, level: 5 },
      delay: { name: "None" },
      reverb: { type: "Hall", decay: 6, tone: 4, level: 6 }
    },
    confidence: "high", notes: "Kim Thayil's lush chorus-drenched tone. Dark and dreamy."
  },
  {
    song: "creep", artist: "radiohead",
    rhythm: {
      preset: "Clean Twin", gain: 3, treble: 6, bass: 5, volume: 6, master: 5, fx: 5,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Hall", decay: 5, tone: 5, level: 5 }
    },
    solo: {
      preset: "Clean Twin", gain: 3, treble: 6, bass: 5, volume: 6, master: 5, fx: 5,
      stompbox: { name: "Distortion", level: 8, gain: 7, tone: 5 },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Hall", decay: 5, tone: 5, level: 5 }
    },
    confidence: "high", notes: "Clean verses then SLAM the distortion for the heavy chorus drop. That's the whole trick."
  },
  {
    song: "folsom prison blues", artist: "johnny cash",
    rhythm: {
      preset: "Tweed", gain: 3, treble: 5, bass: 6, volume: 6, master: 5, fx: 3,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 3, tone: 4, level: 3 }
    },
    solo: {
      preset: "Tweed", gain: 4, treble: 6, bass: 6, volume: 7, master: 5, fx: 3,
      stompbox: { name: "None" },
      modulation: { name: "None" },
      delay: { name: "None" },
      reverb: { type: "Spring", decay: 3, tone: 4, level: 3 }
    },
    confidence: "high", notes: "Vintage tweed warmth. Dark and rhythmic — the train is the whole feel."
  },
];

const GENRE_PRESETS = {
  metal: {
    rhythm: { preset: "Metal 2000", gain: 9, treble: 7, bass: 8, volume: 7, master: 7, fx: 3, stompbox: { name: "None" }, modulation: { name: "None" }, delay: { name: "None" }, reverb: { type: "Room", decay: 2, tone: 5, level: 2 } },
    solo:   { preset: "Metal 2000", gain: 9, treble: 8, bass: 7, volume: 8, master: 8, fx: 5, stompbox: { name: "Overdrive", level: 7, gain: 4, tone: 7 }, modulation: { name: "None" }, delay: { name: "Digital Delay", time_ms: 280, feedback: 3, level: 4 }, reverb: { type: "Room", decay: 3, tone: 5, level: 3 } }
  },
  rock: {
    rhythm: { preset: "JCM", gain: 6, treble: 6, bass: 6, volume: 7, master: 6, fx: 4, stompbox: { name: "None" }, modulation: { name: "None" }, delay: { name: "None" }, reverb: { type: "Room", decay: 3, tone: 5, level: 3 } },
    solo:   { preset: "JCM", gain: 7, treble: 7, bass: 6, volume: 8, master: 7, fx: 5, stompbox: { name: "Overdrive", level: 7, gain: 4, tone: 6 }, modulation: { name: "None" }, delay: { name: "Analog Delay", time_ms: 300, feedback: 3, level: 4 }, reverb: { type: "Room", decay: 4, tone: 5, level: 4 } }
  },
  blues: {
    rhythm: { preset: "Texas Crunch", gain: 5, treble: 6, bass: 6, volume: 7, master: 6, fx: 4, stompbox: { name: "None" }, modulation: { name: "None" }, delay: { name: "None" }, reverb: { type: "Spring", decay: 4, tone: 5, level: 4 } },
    solo:   { preset: "Texas Crunch", gain: 6, treble: 7, bass: 5, volume: 8, master: 7, fx: 5, stompbox: { name: "Overdrive", level: 6, gain: 3, tone: 7 }, modulation: { name: "None" }, delay: { name: "None" }, reverb: { type: "Spring", decay: 5, tone: 5, level: 5 } }
  },
  country: {
    rhythm: { preset: "Clean Twin", gain: 2, treble: 7, bass: 5, volume: 6, master: 5, fx: 3, stompbox: { name: "None" }, modulation: { name: "None" }, delay: { name: "None" }, reverb: { type: "Spring", decay: 3, tone: 6, level: 4 } },
    solo:   { preset: "Clean Twin", gain: 3, treble: 7, bass: 5, volume: 7, master: 5, fx: 4, stompbox: { name: "Boost", level: 7, gain: 3, tone: 7 }, modulation: { name: "None" }, delay: { name: "Analog Delay", time_ms: 280, feedback: 3, level: 4 }, reverb: { type: "Spring", decay: 4, tone: 6, level: 4 } }
  },
  jazz: {
    rhythm: { preset: "Champ", gain: 1, treble: 3, bass: 7, volume: 5, master: 4, fx: 3, stompbox: { name: "None" }, modulation: { name: "None" }, delay: { name: "None" }, reverb: { type: "Hall", decay: 4, tone: 3, level: 4 } },
    solo:   { preset: "Champ", gain: 2, treble: 4, bass: 7, volume: 6, master: 5, fx: 4, stompbox: { name: "None" }, modulation: { name: "None" }, delay: { name: "None" }, reverb: { type: "Hall", decay: 5, tone: 3, level: 5 } }
  },
  punk: {
    rhythm: { preset: "American Steel", gain: 8, treble: 7, bass: 6, volume: 8, master: 7, fx: 2, stompbox: { name: "None" }, modulation: { name: "None" }, delay: { name: "None" }, reverb: { type: "Room", decay: 2, tone: 5, level: 2 } },
    solo:   { preset: "American Steel", gain: 8, treble: 7, bass: 6, volume: 8, master: 8, fx: 3, stompbox: { name: "Overdrive", level: 7, gain: 4, tone: 6 }, modulation: { name: "None" }, delay: { name: "None" }, reverb: { type: "Room", decay: 2, tone: 5, level: 2 } }
  },
  pop: {
    rhythm: { preset: "Clean Twin", gain: 3, treble: 6, bass: 5, volume: 6, master: 5, fx: 5, stompbox: { name: "None" }, modulation: { name: "Chorus", rate: 3, depth: 4, level: 5 }, delay: { name: "None" }, reverb: { type: "Hall", decay: 4, tone: 5, level: 5 } },
    solo:   { preset: "Clean Twin", gain: 4, treble: 7, bass: 5, volume: 7, master: 5, fx: 5, stompbox: { name: "Overdrive", level: 6, gain: 4, tone: 6 }, modulation: { name: "Chorus", rate: 3, depth: 3, level: 4 }, delay: { name: "None" }, reverb: { type: "Hall", decay: 4, tone: 5, level: 5 } }
  },
  default: {
    rhythm: { preset: "Clean Twin", gain: 5, treble: 6, bass: 6, volume: 6, master: 5, fx: 4, stompbox: { name: "None" }, modulation: { name: "None" }, delay: { name: "None" }, reverb: { type: "Spring", decay: 3, tone: 5, level: 3 } },
    solo:   { preset: "Clean Twin", gain: 6, treble: 6, bass: 6, volume: 7, master: 6, fx: 5, stompbox: { name: "Overdrive", level: 6, gain: 4, tone: 6 }, modulation: { name: "None" }, delay: { name: "Analog Delay", time_ms: 300, feedback: 3, level: 4 }, reverb: { type: "Spring", decay: 4, tone: 5, level: 4 } }
  }
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

  return bestScore >= 0.4 ? { match: bestMatch, score: bestScore } : null;
}

function guessGenre(artist) {
  const a = normalize(artist);
  if (/metallica|slayer|megadeth|sabbath|maiden|pantera|tool|korn|slipknot/.test(a)) return "metal";
  if (/nirvana|soundgarden|pearl jam|alice in chains|bush|stone temple/.test(a)) return "rock";
  if (/green day|ramones|clash|sex pistols|blink|sum 41|offspring/.test(a)) return "punk";
  if (/bb king|muddy waters|vaughan|clapton|buddy guy|albert king/.test(a)) return "blues";
  if (/cash|brooks|strait|urban|chesney|williams|hank/.test(a)) return "country";
  if (/coltrane|miles davis|parker|monk|wes montgomery/.test(a)) return "jazz";
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
  let rhythm, solo, confidence, notes;

  if (result) {
    const m = result.match;
    rhythm = m.rhythm;
    solo = m.solo;
    notes = m.notes;
    confidence = result.score >= 0.7 ? "high" : "medium";
  } else {
    const genre = guessGenre(artist);
    const preset = GENRE_PRESETS[genre];
    rhythm = preset.rhythm;
    solo = preset.solo;
    notes = "Genre-based estimate — dial in from here.";
    confidence = "low";
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({ song, artist: artist || "Unknown", confidence, notes, rhythm, solo })
  };
}
