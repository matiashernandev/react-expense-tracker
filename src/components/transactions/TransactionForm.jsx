import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"

export default function TransactionForm() {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)
  const { addTransaction } = useGlobalState()

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: crypto.randomUUID(),
      description,
      amount: +amount,
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter description"
          className="bg-zinc-600  px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          step={0.01}
          placeholder="00.00"
          className="bg-zinc-600  px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <button className="bg-indigo-700 py-2 px-3 w-full rounded-lg">
          Add Transaction
        </button>
      </form>
    </div>
  )
}
