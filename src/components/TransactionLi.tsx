import type { Transaction } from "../context/GlobalState";

export type TransactionLiProps = Transaction;

export default function TransactionLi ( {text, amount}  : TransactionLiProps) {
    return (
        <li className={`bg-white my-2 flex justify-between p-2 shadow rounded-2 border-r-4 
            ${amount > 0 ? "border-green-500" : "border-red-500"}`
        }>
            <span>{text}</span>
            {" "}
            <span>{amount.toString()} $</span>           
        </li>
    );
}