// import { Component } from "react";  // For class

import './card.style.css'

// FONCTIONAL
const Card = (props) => {  //The first element is always the props
    const {id, name, email} = props.element;
    return (
    <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    )
}

// CLASS
// class Card extends Component{

//     render(){
//         const {id, name, email} = this.props.element;
//         return (
//         <div className="card-container">
//             <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//     )}
// }

export default Card;