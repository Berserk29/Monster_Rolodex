import { ChangeEventHandler } from 'react';

import './search-box.style.css'

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>; 
}

// FONCTIONAL
// FOR TYPESCRIPT NEVER EVER USE ANY TYPE!!!
const SearchBox = ({className, placeholder, onChangeHandler} : SearchBoxProps) => ( // Implicite return()
    <input 
    className={`search-box ${className}`} 
    type='search' 
    placeholder={placeholder} 
    onChange={onChangeHandler}/>
)

export default SearchBox;