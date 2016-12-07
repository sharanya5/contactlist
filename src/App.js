import React, { Component } from 'react';
import './App.css';
import ContactListPage from './ContactListPage';

class App extends Component {
       render() {
         console.log("---------------------")
               const contacts= [ {item : { id : 1,
                                          name : "p1",
                                          age : 20} },
                                 {item : { id : 2,
                                          name : "p2",
                                          age : 20} },
                                 {item : { id : 3,
                                          name : "p3",
                                          age : 20} },
                                 {item : { id : 4,
                                          name : "p4",
                                          age : 20} } ];
       return ( <div>
                  <ContactListPage data={ contacts } /> 
                </div>);
      }
}

export default App;
