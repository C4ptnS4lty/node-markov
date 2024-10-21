const markov = require("./markov");
const fs = require('fs');
const process = require('process');
const axios = require('axios');

//will be adjusted to output using Markov and whether or not the user wants it saved.
function handleOutput(text, out) {
    let random = new markov.MarkovMachine(text);

    if(out) {
        fs.writeFile(out, random.makeText(), 'utf8', function (err) {
            if(err) {
                console.error(`Couldn't write ${out}: ${err}`);
                process.exit(1);
            }
        });
    } else {
        console.log(random.makeText());
    }
}

//file reader
function cat(path, out) {
    fs.readFile(path, 'utf8', function(err,data) {
        if(err) {
            console.log(`Error reading ${path}: ${err}`);
        } else {
            handleOutput(data, out);
        }
    });
}

//url reader
async function webCat(url, out) {
    try {
        let res = await axios.get(url);
        handleOutput(res.data, out);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path= process.argv[3] || null;
let out = process.argv[4] || null;

if(process.argv[2] === 'file') {
    cat(path, out);
} else if (process.argv[2] === 'url'){
    webCat(path, out);
} else {
    console.error("please specify either 'file' or 'url', then include path");
    process.exit(1);
}

