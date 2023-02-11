import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpense () {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(trx => trx.amount);
    const income = amounts.filter(amnt => amnt > 0).reduce((acc, cur) => acc += cur);
    const expense = amounts.filter(amnt => amnt < 0).reduce((acc, cur) => acc += cur);
    return (
        <div className="flex gap-4 bg-white shadow p-[20px] justify-between my-[20px] mx-0">
            <div className="flex-1 text-center border-r border-solid border-[#dedede]">
                <h2 className="font-bold uppercase text-xl">Income</h2>
                <p className="text-green-600 text-xl">+{income}</p>
            </div>
            <div className="flex-1 text-center">
                <h2 className="font-bold uppercase text-xl">Expense</h2>
                <p className="text-red-600 text-xl">{expense}</p>
            </div>
        </div>
    );
}