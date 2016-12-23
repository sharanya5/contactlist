import { fromJS } from 'immutable';

export const constants = {
    INITIAL_LIST: 'INITIAL_LIST',
    DELETE_CONTACT: 'DELETE_CONTACT',
    EDIT_CONTACT: 'EDIT_CONTACT',
    ADD_NEW_CONTACT: 'ADD_NEW_CONTACT',
    ADD_CONTACT_TO_LIST: 'ADD_CONTACT_TO_LIST'
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
    addNewContact: (payload) => ({
        type: constants.ADD_NEW_CONTACT,
        payload
    }),
    addContactToList: (payload) => ({
        type: constants.ADD_CONTACT_TO_LIST,
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
                if(item.get('id')===action.payload.id){
                    return RequiredIndex = index;                   
                }else return {};
        });
            state = state.delete(RequiredIndex);
        }

        case constants.EDIT_CONTACT:
        {
            console.log(action.payload.field)
            let newArray = state.map(function(item) {
                if(item.get('id') === action.payload.id) {
                    let editItem = item.set(action.payload.field , action.payload.newValue);
                    return editItem;
                }
                else return item;
            });
            state = newArray
        }

        case constants.ADD_NEW_CONTACT:
        {   
            let newItemObj = {};
            newItemObj = state.push( action.payload.item );
            console.log(newItemObj.toJS())
            console.log(state.toJS())
            let newState =  (newItemObj);
            console.log(newState.toJS())
            // console.log(newState.toJS())
            // return newState.push(fromJS(action.payload.item))
        }

        case constants.ADD_CONTACT_TO_LIST:
        {
            console.log("=========");
            // state = state;
        }

        default: return state;
    }
}