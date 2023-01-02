// import { Component } from "react"; // for class
import Card from "../card/card.component";

import './card-list.style.css';

// FONCTIONAL
const CardList = ({ monsters }) => (  // Because only one thing to return i use () --> inplicite return
    <div className="card-list">
        {monsters.map(el => <Card element={el} key={el.id}/> )}
    </div>
)


// CLASS
// class CardList extends Component{

//     render() {
//         const {monsters} = this.props
        
//         return (
//             <div className="card-list">
//                 {monsters.map(el => <Card element={el} key={el.id}/> )}
//             </div>
//         ) 
//     }
// }

export default CardList;

