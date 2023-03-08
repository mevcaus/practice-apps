import { useState, useEffect } from 'react';
const axios = require('axios');
import AddWord from './AddWord.jsx'
import SearchWord from './SearchWord.jsx'
import WordList from './WordList.jsx'
const App = () => {
    const url = 'http://localhost:3000/glossary';
    const [wordList, setWordList] = useState([]);
    const [trueWordList, setTrueWordList] = useState([])
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setWordList(response.data);
            setTrueWordList(response.data);
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
        console.log(wordFromSearch)
        if(wordFromSearch === '') {
            setWordList(trueWordList);
        } else {
            setWordList(wordList.filter(wordFromList => {
                return wordFromList.word.toLowerCase().includes(wordFromSearch.toLowerCase());
            }))
        }
    }
    const handleEditClick = (wordID, word, definition) => {
        axios.patch(url, {id: wordID, word: word, definition: definition})
            .then(response => {
                axios.get(url)
                    .then(response => {
                        console.log('successfully edited');
                    })
                    .catch(err => {
                        console.log('err getting after patch in react\n', err)
                    })
            })
            .catch(err => {
                console.log('err editing in react\n', err)
            })
    }
    const handleDeleteClick = (wordID) => {
        axios.delete({id: wordID})
            .then(response => {
                axios.get(url)
                    .then(response => {
                        console.log('successfully deleted')
                    })
                    .catch(err => {
                        console.log('err getting after delete in react\n', err)
                    })
            })
            .catch(err => {
                console.log('err deleting in react\n', err)
            })
    }
    return (
        <div>
            <AddWord handleAddWordClick={handleAddWordClick}/> // some function to be passed in
            <SearchWord handleSearchClick={handleSearchClick}/> // some function to be passed in
            <WordList words={wordList} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
        </div>
    )
}

export default App;