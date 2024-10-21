/** Textual markov chain generator */

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
      // Make sure each key is only stored once, and every word that appears after it is collected.
      // Finally, all words ending a text must have a null item associated with its key.
      this.chains = new Map(); // Initial storage

      for (let i = 0; i < this.words.length; i++) {
        let word = this.words[i];
        let next = this.words[i + 1] || null; // grabs next word or makes it null to show end of text.

        if(this.chains.has(word)) {
          this.chains.get(word).push(next);
        } else {
          this.chains.set(word, [next]);
        }
      }

    }
  
  
    /** return random text from chains */
  
    makeText(numWords = 100) {
      // TODO
      let output = [];

      let keys = Array.from(this.chains.keys());
      let key = this._choice(keys); // random starting

      while(output.length < numWords && word !== null) {
        output.push(key);
        key = this._choice(this.chains.get(key)); // Choose a new key from available linked words at random.
      }

      return output.join(" ");

    }

    _choice(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }

  module.exports = {
    MarkovMachine,
  };