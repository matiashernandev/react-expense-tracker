import { useGlobalState } from "../context/GlobalContext"

export default function Balance() {
  const data = useGlobalState()

  return <div>Balance</div>
}
