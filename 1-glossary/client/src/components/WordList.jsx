import WordItem from './WordItem.jsx'
import { useState } from 'react'
const WordList = ( { words, handleEditClick, handleDeleteClick} ) => {

    const [showForm, setShowForm] = useState(false);
    const editClick = (wordID) => {
        // add pop up form to grab new values

        // handleEditClick(wordID, newWord, newDefiniction);
    }
    const deleteClick = (wordID) => {
        handleDeleteClick(wordID);
    }
    return (
        <div>
            {words.map(word => {
                return (
                    <div>
                        <WordItem id={word._id} word={word.word} definition={word.definition} />
                        <button onClick={() => editClick(word._id)}>edit</button>
                        <button onClick={() => deleteClick(word._id)}>delete</button>
                    </div>
                )
            })}
        </div>
    )

}

export default WordList;