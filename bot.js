const Markov = require('markov-strings').default
var fs = require('fs')
var text = fs.readFileSync("text.txt").toString('UTF-8');
var textLines = text.split('\n');

const data = textLines;

const markov = new Markov(data, {stateSize: 2});
markov.buildCorpus();

const options = {
    maxTries: 1000,
    prng: Math.random,
    filter: (result) => {
        return result.string.split(' ').length >= 10;
    }
}

//console.log(data);
var results = markov.generate(options)
console.log(results.string);
console.log(results.tries);
