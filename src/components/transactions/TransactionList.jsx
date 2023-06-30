import { useGlobalState } from "../../context/GlobalState"

export default function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState()

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.id}</p>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button onClick={() => deleteTransaction(transaction.id)}>X</button>
        </div>
      ))}
    </div>
  )
}
