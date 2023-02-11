import type { State } from "./GlobalState";

const AppReducer = (state : State, action : any) => {
    switch (action.type) {
        case "DELETE_TRANSACTION": 
            return {
                ...state,
                transactions: state.transactions.filter(trx => trx.id !== action.payload)
            }
        default:
            return state;
    }
}

export default AppReducer;