import React, { createContext, ReactNode, useReducer } from "react";
import AppReducer from "./AppReducer";

export type Transaction = {
    id: Number;
    text: String;
    amount: Number;
}

export type State = {
    transactions: Transaction[];
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
    return (
        <GlobalContext.Provider value={{transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    );
}