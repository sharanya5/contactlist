import { fromJS } from 'immutable';

export const constants = {
    INITIAL_LIST: 'INITIAL_LIST',
    DELETE_CONTACT: 'DELETE_CONTACT',
    EDIT_CONTACT: 'EDIT_CONTACT',
    ADD_NEW_CONTACT: 'ADD_NEW_CONTACT'
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
    newContact: (payload) => ({
        type: constants.ADD_NEW_CONTACT,
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
           console.log(action.payload.item);
            console.log(action.payload.field);
            console.log(state.id)
            const newObj = fromJS({})
            newObj[action.payload.field]= action.payload.item;
            console.log(newObj.toJS())
            state.set(newObj);
            // const newState = state;
            console.log(state.toJS())
            // return newState.push(fromJS(action.payload.item))
        }

        default: return state;
    }
}