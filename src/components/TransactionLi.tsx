import type { Transaction } from "../context/GlobalState";

export type TransactionLiProps = Transaction;

export default function TransactionLi ( {text, amount}  : TransactionLiProps) {
    return (
        <li className={`relative bg-white my-2 flex justify-between p-2 shadow rounded-2 border-r-4 group
            ${amount > 0 ? "border-green-500" : "border-red-500"}`
        }>
            <span>{text}</span>
            {" "}
            <span>{amount.toString()} $</span>           
            <button
                className={`bg-[#e74c3c] text-white py-0.5 px-2 
                    absolute top-1/2 left-0 -translate-x-full rounded-sm
                    -translate-y-1/2 opacity-0
                    transition-opacity delay-50 ease-in-out
                    group-hover:opacity-100`}
            >
                x
            </button>
        </li>
    );
}