const WordItem = ( {id, word, definition } ) => {
    return (
        <div>
            <p>{word}</p>
            <p>{definition}</p>
        </div>
    )
}


export default WordItem;