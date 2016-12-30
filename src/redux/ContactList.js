import { fromJS } from 'immutable';

export const constants = {
    INITIAL_LIST: 'INITIAL_LIST',
    DELETE_CONTACT: 'DELETE_CONTACT',
    EDIT_CONTACT: 'EDIT_CONTACT',
    ADD_CONTACT_TO_LIST: 'ADD_CONTACT_TO_LIST',
    SEARCH_FOR_INPUT: 'SEARCH_FOR_INPUT'
};

export const actions = {
    initialList: () => ({
        type: constants.INITIAL_LIST
    }),
    deleteContact: (payload) => ({
        type: constants.DELETE_CONTACT,
        payload
    }),
    editContact: (payload) => ({
        type: constants.EDIT_CONTACT,
        payload
    }),
    addContactToList: (payload) => ({
        type: constants.ADD_CONTACT_TO_LIST,
        payload
    }),
    searchForInput: (payload) => ({
        type: constants.SEARCH_FOR_INPUT,
        payload
    })
};

export const initialState = fromJS({});

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case constants.INITIAL_LIST:
        {
            state = fromJS([
                {
                    id : 1,
                    name : "p1",
                    age : 20,
                    ph_no : 112233
                },
                {
                    id : 2,
                    name : "p2",
                    age : 20,
                    ph_no : 13512233
                }
            ]);
            return state;
        }

        case constants.DELETE_CONTACT:
        {
            let RequiredIndex;
            state.map(function(item,index){
                if(item.get('id') === action.payload.id){
                    return RequiredIndex = index;                   
                }else return {};
        });
            var confirmDel = confirm("are you sure want to delete")
            if(confirmDel===true){
                state = state.delete(RequiredIndex);
                return state;
            }
            else 
            return state;            
        }

        case constants.EDIT_CONTACT:
        {
            let newArray = state.map(function(item) {
                if(item.get('id') === action.payload.id) {
                    let editItem = item.set(action.payload.field , action.payload.newValue);
                    return editItem;
                }
                else return item;
            });
            state = newArray
            return state;
        }

        case constants.ADD_CONTACT_TO_LIST:
        {
            state = state.push(fromJS(action.payload))
            history.pushState(state,'','/')
            return state;
        }

        case constants.SEARCH_FOR_INPUT:
        {
        let arr = state.map(function(item){
          if(item.get('name')===action.payload.inputText){
              console.log("found")
              return item;
          } else 
          return {};
        })
        }

        default: return state;
    }
}