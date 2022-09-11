import { useState, useEffect} from 'react'
import Customer from '../components/Customer'

const Home = () => {

  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const getCustomersAPI = async () => {
      try {
        const url = "http://localhost:4000/customers"
        const response = await fetch(url)
        const result = await response.json()

        setCustomers(result)
      } catch (error) {
        console.log(error)
      }
    }

    getCustomersAPI()
  }, [])

  return (
    <>
      <h1 className="font-bold font-jakarta text-4xl text-blue-600">
         Customers
      </h1>
      <p className="mt-3 font-inter">Manage your customers.</p>

      <table className="w-full mt-5 table-auto drop-shadow-md bg-white">
          <thead className="bg-slate-500 text-white font-jakarta">
              <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Contact</th>
                  <th className="p-2">Company</th>
                  <th className="p-2">Actions</th>
              </tr>
          </thead>

          <tbody>
              {customers.map(customer => (
                <Customer 
                  key={customer.id}
                  customer={customer}
                />
              ))}
          </tbody>
      </table>

      
    </>
  )
}

export default Home