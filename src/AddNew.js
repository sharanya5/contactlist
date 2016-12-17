// import React, { Component } from 'react';
// import './AddNew.css';
// import ContactList from './ContactList';

// class AddNew extends Component {

//     constructor(props) {
//         super(props);
//         console.log(props.route)
//             this.state = { newContacts : [{}] }
//             this.newCards=this.newContactCards.bind(this);
//     }

//     newContactCards(e, field) {

//         let newContactCards = this.state.newContacts.map(function(item){
//             item[field] = e.target.value;
//             return item;
//         });
//         this.setState({newContacts : newContactCards})
//         console.log(this.state.newContacts)
//     }
    
//     // addContactCard() {
//     //     console.log(this.props.route)
//     //     // <ContactList newCard={ this.state.newContacts } />
//     // }
    
//     render() {
//         return (<div className="firstdiv">
//                 <h2 className="header">New Contact </h2>
//                     <div className="secdiv">
//                         New id   : <input type="text" Name="id" onChange={(e)=>this.newContactCards(e,'id')}/> <br/>
//                         New Name : <input type="text" Name="name" onChange={(e)=>this.newContactCards(e,'name')}/><br/>
//                         New Age  : <input type="text" Name="Age" onChange={(e)=>this.newContactCards(e,'age')} /><br/>
//                         New num : <input type="text" Name="ph_no" onChange={(e)=>this.newContactCards(e,'ph_no')}/>
//                     </div>
//                     <div>
//                         <button type="button" className="add" onClick={()=>this.addContactCard()}>Add</button>
//                         <button type="button" className="addButton" ><a href="/">Add</a></button>
//                         <button type="button" className="resetButton"><a href="/AddNew">Reset</a></button>
//                     </div>
//                 </div>
//         )
//     }
// }

// export default AddNew;