const glossary = require('./db');

const dictionary = [
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

]
let seed = () => {
    glossary.insertMany(dictionary)
        .then(response => {
        console.log('all words saved')
        })
        .catch(err => {
            console.log('err saving words\n', err)
        })
}
seed();