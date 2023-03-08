import { useState } from 'react';

const AddWord = ( {handleAddWordClick } ) => {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');

    const handleSubmit = (e) => {
        event.preventDefault();
        handleAddWordClick(word, definition);
        setWord('');
        setDefinition('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={word} onChange={e => setWord(e.target.value)}/>
            <input type='text' value={definition} onChange={e => setDefinition(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddWord;