
export function Airdrop() {
    return (
        <div className="flex flex-col items-center pt-10">
            <p>Airdrop yourself some SOL to get started!</p>
            <div className="flex justify-center pt-5">
               <input className="bg-white border border-gray-300 rounded-l-lg p-2" type="text" placeholder="Amount" />
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-r-lg">Airdrop</button>
            </div>
            
        </div>
    )
}