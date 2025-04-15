// import {franc} from"franc";
// import langs from"langs";

// const input = process.argv[2];
// // console.log(franc('Alle menslike wesens word vry')); //=> 'afr'

// const langcode = franc(input);
// const language = langs.where("3", langcode);
// console.log(language.name)
 
import {franc} from "franc";
import langs from "langs";

const input = process.argv[2]; // Text passed from command line

const langcode = franc(input); // 'afr', 'eng', etc.

if (langcode === 'und') {
  console.log("Sorry, couldn't guess the language.");
} else {
  const language = langs.where("3", langcode);
  console.log(`Detected language: ${language.name}`);
}
