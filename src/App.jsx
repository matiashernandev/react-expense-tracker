import Balance from "./components/Balance"
import Header from "./components/Header"
import TransactionForm from "./components/TransactionForm"
import { GlobalProvider } from "./context/GlobalContext"

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
    </GlobalProvider>
  )
}
