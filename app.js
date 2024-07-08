// Import the radash package as _
const _ = require("radash");

/* Unique Array Exercise */
const emails = [
  `some-nerd@example.com`,
  `some-nerd@example.com`,
  `another-nerd@example.com`,
  `yet-another-nerd@example.com`,
];

const uniqueEmails = emails; // edit this line of code

// Log each array to see the differences

/* Sort */

const users = [
  { name: "Alexander", posts: 10 },
  { name: "Chloe", posts: 2 },
  { name: "Enoch", posts: 50 },
];

// TODO: Log the users sorted by number of posts

/* Capitalize */

const text = "best strategy guide EVER.";

// TODO: capitalize the text so it reads like a proper sentence

console.log(_.capitalize(text));

/* Extra Challenge */

// use radash's capitalize function along with your own code to capitalize all the sentences in this paragraph (from the documentation).

const paragraph =
  "radash is the next library you can’t live without. first and foremost, it’s powerful. with those powerful functions, you get strong types andzero dependencies. if you can step out in a bit of faith and try the functions out, i have no doubt you’ll find yourself falling in love.";
