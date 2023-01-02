// import { Component } from "react"; // For class
import './search-box.style.css'


// FONCTIONAL
const SearchBox = ({className, placeholder, OnChangeHandler}) => ( // Implicite return()
    <input 
    className={`search-box ${className}`} 
    type='search' 
    placeholder={placeholder} 
    onChange={OnChangeHandler}/>
)





// CLASS
// class SearchBox extends Component {
    
//     render(){
//         return (
//             <input 
//             className={`search-box ${this.props.className}`} 
//             type='search' 
//             placeholder={this.props.placeholder} 
//             onChange={this.props.OnChangeHandler}/>
//         )
//     }
// }

export default SearchBox;