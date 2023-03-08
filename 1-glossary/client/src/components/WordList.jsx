import WordItem from './WordItem'

const WordList = ( { words } ) => {
    return (
        {words.map(word => {
            <tr>
                <WordItem key={word._id} word={word.word} definition={word.definition}/>
            </tr>
        })}
    )
}

export default WordList;