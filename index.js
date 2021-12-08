const { memeIndo } = require('./JSON/meme.json');
const { quoteIndo } = require('./JSON/quotes.json');

function Pack(query) {
    option = [
        "meme",
        "quote"
    ]

    if (!query) throw new Error(`Query not found!`);
    if (query.toLowerCase() == 'meme') {
        const memeKato = memeIndo[Math.floor(Math.random() * (memeIndo.length))];
        return memeKato;
    } else if (query.toLowerCase() == 'quote') {
        const quoteKato = quoteIndo[Math.floor(Math.random() * (quoteIndo.length))]; 
        return quoteKato;
    } else {
        return console.log(`${query} Option is not found!`)
    }
}

module.exports.Pack = Pack;