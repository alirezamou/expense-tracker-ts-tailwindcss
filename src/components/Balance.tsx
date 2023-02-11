import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export default function Balance () {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((trx => trx.amount));
    const total = amounts.reduce((prev, cur) => prev += cur).toFixed(2);
    return (
        <div>
            <h4 className="uppercase">Your Balance</h4>
            <h1 className="font-bold text-3xl tracking-wider">${total}</h1>
        </div>
    );
}