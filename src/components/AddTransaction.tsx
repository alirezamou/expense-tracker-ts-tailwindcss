import React, { useEffect, useState, useContext } from "react";

import type { Transaction } from "../context/GlobalState";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction () {

    const [inputs, setInputs] = useState({text: "", amount: ""});
    const [errorAmount, setErrorAmount] = useState(false);

    const { addTransaction } = useContext(GlobalContext);

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inputs.text === "" || inputs.amount === "") return;
        if(errorAmount) return;
        const trx : Transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: inputs.text,
            amount: parseFloat(inputs.amount)
        };
        addTransaction?.(trx);
        setInputs({text: "", amount: ""});
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempInputs = {...inputs, [e.target.id] : e.target.value};
        setInputs(tempInputs);
    }

    useEffect(() => {
        if(inputs.amount !== "") {
            if(isNaN(+inputs.amount)) {
                setErrorAmount(true);
                return;
            }
        }
        setErrorAmount(false);
    }, [inputs.amount])

    return (
        <div>
            <h2 className="border-b-2 border-[#dedede] text-xl font-bold">Add new transaction</h2>
            <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit}
            >
                <div>
                    <label className="inline-block my-[10px]" htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        id="text" 
                        placeholder="Enter text..."
                        className="block p-1.5 border w-full rounded-sm outline-none focus:border-blue-700"
                        onChange={onChange}
                        value={inputs.text}
                        />
                </div>
                <div>
                    <label className="inline-block my-[10px]" htmlFor="amount">
                        Amount
                        <br />
                        (negative - expense, positive - income)
                    </label>
                    <input 
                        type="text" 
                        id="amount" 
                        placeholder="Enter amount..."
                        className={`block p-1.5 border w-full rounded-sm outline-none
                                    ${errorAmount ? "border-red-700" : "focus:border-blue-700"}`}
                        onChange={onChange}
                        value={inputs.amount}
                        />
                </div>
                <button 
                    className="bg-[#9c88ff] text-white text-lg py-1 shadow block outline-none"
                    type="submit"
                >
                    Add Transaction 
                </button>
            </form>
        </div>
    );
}