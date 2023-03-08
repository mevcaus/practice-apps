import { useState } from 'react';

const SearchWord = ( {handleSearchClick } ) => {
    const [word, setWord] = useState('');

    const handleSubmit = (e) => {
        event.preventDefault();
        handleSearchClick(word);
        setWord('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={word} onChange={e => setWord(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SearchWord;