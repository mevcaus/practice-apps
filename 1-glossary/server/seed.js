const glossary = require('./db')

const dictionary = {
    {
        word: 'Mo',
        definition: 'handsome'
    },
    {
        word: 'heavy',
        definition: 'not light'
    },
    {
        word: 'cereal',
        definition: 'breakfast food'
    },
    {
        word: 'cruelty',
        definition: 'not nice'
    },
    {
        word: 'load',
        definition: 'object to be moved'
    },
    {
        word: 'passage',
        definition: 'usually underground'
    },
    {
        word: 'share',
        definition: 'to care'
    },
    {
        word: 'composer',
        definition: 'does nothing'
    },
    {
        word: 'squeeze',
        definition: 'hmmmmugh'
    },

}
let seed = () => {
    const promises = dictionary.map(word => {
        const newWord = new glossary({
            word: word.word,
            definition: word.definition,
        });
        return newWord.save();
    })

    return Promise.all(promises)
    .then(() => {
        console.log('logged all words into dictionary')
    })
    .catch(err => {
        console.log('err saving all words to dic', err)
    })
}