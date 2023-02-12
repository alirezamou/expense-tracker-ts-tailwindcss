import React, { createContext, ReactNode, useReducer } from "react";
import AppReducer from "./AppReducer";

export type Transaction = {
    id: number;
    text: String;
    amount: number;
}

export type State = {
    transactions: Transaction[];
    deleteTransaction?: ( id : number) => void;
    addTransaction?: (trx : Transaction) => void;
}

const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

export const GlobalContext = createContext<State>(initialState);

export type GlobalProviderProps = {
    children: ReactNode
}

export default function GlobalProvider ({ children }: GlobalProviderProps) {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction (id : number) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction (trx: Transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: trx
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}