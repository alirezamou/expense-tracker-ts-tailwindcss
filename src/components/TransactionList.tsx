export default function TransactionList () {
    return (
        <div>
            <h2 className="font-bold text-xl border-b-2 border-solid border-[#dedede]">History</h2>
            <ul className="mt-2">
                <li className="bg-white my-2 flex justify-between p-2 shadow rounded-2 border-r-4 border-red-500">
                    <span>Banana</span>
                    {" "}
                    <span>-300$</span>
                </li>
                <li className="bg-white my-2 flex justify-between p-2 shadow rounded-2 border-r-4 border-green-500">
                    <span>Cash</span>
                    {" "}
                    <span>+500$</span>
                </li>
            </ul>
        </div>
    );
}