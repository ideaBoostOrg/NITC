/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [data, setData] = useState('aaa')
    const [customer, setCustomer] = useState('test')

    return (
        <DataContext.Provider value={{
            data,
            setData,
            customer,
            setCustomer
        }}>{children}</DataContext.Provider>
    )
}

export default DataContext