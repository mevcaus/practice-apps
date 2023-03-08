import { useState, useEffect } from 'react';
const axios = require('axios');
import AddWord from './AddWord.jsx'
import SearchWord from './SearchWord.jsx'
// const WordList = require('./WordList')
const App = () => {
    const url = 'http://localhost:3000/glossary';
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setWordList(response.data);
        })
        .catch(err => {
            console.log('err fetching words from server in react\n', err);
        })
    }, []);
    const handleAddWordClick = (Word, Definition) => {
        axios.post(url, {word: Word, definition: Definition})
            .then(response => {
                axios.get(url)
                    .then(response => {
                        setWordList(response.data);
                    })
                    .catch(err => {
                        console.log('err fecthing wordlist in react\n', err)
                    })
            })
            .catch(err => {
                console.log('err posting from react\n', err);
            })
    }

    const handleSearchClick = (wordFromSearch) => {
        setWordList(wordList.filter(wordFromList => {
            return wordFromList.word.toLowerCase().includes(wordFromSearch.toLowerCase());
        }))
    }
    return (
        <div>
            <AddWord handleAddWordClick={handleAddWordClick}/> // some function to be passed in
            <SearchWord handleSearchClick={handleSearchClick}/> // some function to be passed in
            {/* <table>
                <WordList words={wordList}/>
            </table> */}
        </div>
    )
}

export default App;