import { fromJS } from 'immutable';

export const constants = {
    INITIAL_LIST: 'INITIAL_LIST',
    DELETE_CONTACT: 'DELETE_CONTACT'
};

export const actions = {
    initialList: () => ({
        type: constants.INITIAL_LIST
    }),
    deleteContact: (payload) => ({
        type: constants.DELETE_CONTACT,
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
            console.log(action.payload);
            // LOGIC to delete contact
            console.log(state.toJS());
            return state;
        }

        default: return state;
    }
}