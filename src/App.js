import React, { Component } from 'react';
import './App.css';
import ContactListPage from './ContactListPage';

class App extends Component {
    
    render() {
        const contacts= [ {item : { id : 1,
                                      name : "p1",
                                      age : 20,
                                      ph_no : 112233 } },
                          {item : { id : 2,
                                      name : "p2",
                                      age : 21,
                                      ph_no : 111222} },
                          {item : { id : 3,
                                      name : "p3",
                                      age : 22,
                                      ph_no : 123123} },
                          {item : { id : 4,
                                      name : "p4",
                                      age : 23,
                                      ph_no : 121212 } } ];
    return ( <div>
               <ContactListPage data={ contacts }  />
             </div> );
        }
}

export default App;
