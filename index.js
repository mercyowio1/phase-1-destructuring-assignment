// Given data
const farmAnimals = "cow horse sheep pig chicken";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// 🐄🐎🐑🐖🐔 Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

// 2. Bolt the horse wandered off, so just give us four animals: bessie, dolly, babe, and little.
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

// 3. Fix: Assign `blackAndWhite`, `black`, and `pink` instead of `cow`, `sheep`, and `pig`.
const [blackAndWhite, , black, pink] = farmAnimals.split(" ");

// 🌈 Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Extract full color names instead of initials.
const [r, o, y, g, b, , v] = colors;

// 6. Assign indigo using `indg`.
const [, , , , , indg] = colors;

// 🧸 Objects

// 7. Use destructuring to assign all variables using the keys as the variable names.
const { muppetName, color, song, job, partner } = muppet;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner.
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;

// ✅ Console logs for verification
console.log(moo, neigh, baa, oink, cluck);
console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, pink); // Fixed: Now uses correct variable names
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, v);
console.log(indg);
console.log(muppetName, color, song, job, partner);
console.log(song2, song4, nestedJob, nestedPartner);
