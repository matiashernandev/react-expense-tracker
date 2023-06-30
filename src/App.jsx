import Balance from "./components/Balance"
import Header from "./components/Header"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionList from "./components/transactions/TransactionList"
import { GlobalProvider } from "./context/GlobalContext"

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
      <TransactionList />
    </GlobalProvider>
  )
}
