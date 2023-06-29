import { useGlobalState } from "../context/GlobalContext"

export default function Balance() {
  const data = useGlobalState()

  console.log(data)
  return <div>Balance</div>
}
