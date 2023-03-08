import WordItem from './WordItem.jsx'

const WordList = ( { words } ) => {
    const editClick = (wordID) => {

    }
    const deleteClick = (wordID) => {

    }
    return (
        <div>
            {words.map(word => {
                return (
                    <WordItem id={word._id} word={word.word} definition={word.definition} />
                    // <button onClick={editClick}>edit</button>
                    // <button onClick={deleteClick}>delete</button>
                )
            })}
        </div>
    )

}

export default WordList;