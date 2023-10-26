import { useContext } from "react"
import DataContext from "../../context/DataContext"

function Test() {

    const { customer } = useContext(DataContext)
    console.log(customer);
    return (
        <div>{customer}</div>
    )
}

export default Test