import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const InfoCustomer = () => {

  const [customer, setCustomer] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    
    const getCustomerAPI = async () => {
        try {
            const url = `http://localhost:4000/customers/${id}`
            const response = await fetch(url)
            const result = await response.json()
            setCustomer(result)

        } catch (error) {
            console.log(error)
        }
        setLoading(!loading)
    } 
    getCustomerAPI()
  }, [])

  return (
    loading ? <Spinner /> : 
        Object.keys(customer).length === 0 ? 
        <p className="text-center font-bold font-jakarta text-4xl text-gray-400">Sorry, there is no results 😓</p> 
        : (
    
                <div>
                    <h1 className="font-bold font-jakarta text-4xl text-blue-600">Customer Information</h1>
                    {customer.name && (
                        <p className="text-xl text-gray-600 font-inter mt-10">
                            <span className="text-gray-800 font-bold font-jakarta">Customer: </span>
                            {customer.name}
                        </p>
                    )}
                    {customer.company && (
                        <p className="text-xl text-gray-600 font-inter mt-2">
                            <span className="text-gray-800 font-bold font-jakarta">Company: </span>
                            {customer.company}
                        </p>
                    )}

                    {customer.email && (
                        <p className="text-xl text-gray-600 font-inter mt-2">
                            <span className="text-gray-800 font-bold font-jakarta">Email: </span>
                            {customer.email}
                        </p>
                    )}

                    {customer.phone && (
                        <p className="text-xl text-gray-600 font-inter mt-2">
                            <span className="text-gray-800 font-bold font-jakarta">Phone: </span>
                            {customer.phone}
                        </p>
                    )}

                    {customer.notes && (
                        <p className="text-xl text-gray-600 font-inter mt-2">
                            <span className="text-gray-800 font-bold font-jakarta">Notes: </span>
                            {customer.notes}
                        </p>
                    )}
                </div>
        )    
  )
}

export default InfoCustomer