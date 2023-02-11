import { useContext } from "react";
import TransactionLi from "./TransactionLi";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionList () {
    const { transactions } = useContext(GlobalContext);
    return (
        <div>
            <h2 className="font-bold text-xl border-b-2 border-solid border-[#dedede]">History</h2>
            <ul className="mt-2">
                {transactions.map((trx) => <TransactionLi key={trx.id.toString()} id={trx.id} text={trx.text} amount={trx.amount} />)}
            </ul>
        </div>
    );
}