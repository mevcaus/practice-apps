const WordItem = ( { id, word, definition } ) => {

    return (
        <td key={id}>{word}</td>
        <td>{definition}</td>
    )
}



export default WordItem;