import { useState } from "react"
import { useGlobalState } from "../context/GlobalContext"

export default function TransactionForm() {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)
  const { addTransaction, transactions } = useGlobalState()

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: 1,
      description,
      amount,
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter description"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          step={0.01}
          placeholder="00.00"
        />
        <button>Add Transaction</button>
      </form>

      <h2>{JSON.stringify(transactions)}</h2>
    </div>
  )
}
