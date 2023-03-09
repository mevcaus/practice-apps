import WordItem from './WordItem.jsx'
import { useState } from 'react'
const WordList = ( { words, handleEditClick, handleDeleteClick} ) => {


    const editClick = (wordID) => {
        handleEditClick(wordID);
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