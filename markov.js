/** Textual markov chain generator */
const fs = require('fs');
const process = require('process');

// Function to read text from file.
function getWordsFromText(filePath) {
  try{
    return fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    return console.log(`Failed to read file path: ${err}`);
  }
  
}

class MarkovMachine {

    /** build markov machine; read in text.*/
  
    constructor(text) {
      let words = text.split(/[ \r\n]+/);
      this.words = words.filter(c => c !== "");
      this.makeChains();
    }
  
    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  
    makeChains() {
      // TODO
      // logic: Start with first word, iterate through as key and mark every word that comes directly after it.
      // When you reach the end, loop through to the next word as the new key, but if already recorded as a key, skip
      // Finally, all words ending a sentence must have a null item associated with its key.

      this.words
    }
  
  
    /** return random text from chains */
  
    makeText(numWords = 100) {
      // TODO
    }
  }