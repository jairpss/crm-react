import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FormNewCostumer from '../components/FormNewCostumer'

const EditCustomer = () => {

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
    <div className="bg-gray-50">
        <h1 className="font-bold font-jakarta text-4xl text-blue-600">Edit Customer</h1>
        <p className="mt-3 font-inter">In this form you can update your customers information.</p>

        {customer?.name ? (
          <FormNewCostumer 
            customer={customer}
            loading={loading}
          />
        ) : <p className="text-center font-semibold font-jakarta text-4xl text-gray-400 mt-10">Customer ID is not valid 🙅‍♂️</p>  }
        
    </div>
  )
}

export default EditCustomer 