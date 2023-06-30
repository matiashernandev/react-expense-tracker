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
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          step={0.01}
          placeholder="00.00"
        />
        <button>Add Transaction</button>
      </form>
    </div>
  )
}
