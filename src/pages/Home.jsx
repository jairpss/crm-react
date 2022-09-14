import { useState, useEffect} from 'react'
import Customer from '../components/Customer'

const Home = () => {

  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const getCustomersAPI = async () => {
      try {
        const url = "https://my-json-server.typicode.com/jairpss/crm-react/customers"
        const response = await fetch(url)
        const result = await response.json()

        setCustomers(result)
      } catch (error) {
        console.log(error)
      }
    }

    getCustomersAPI()
  }, [])

  const handleDelete = async (id) => {
    const confirmDel = confirm('Do you want to delete this customer?')

    if(confirmDel) {
      try {
          const url = `https://my-json-server.typicode.com/jairpss/crm-react/customers/${id}`
          const response = await fetch(url, {
            method: 'DELETE'
          })
          await response.json()

          const arrayCustomers = customers.filter(customer => customer.id !== id)
          setCustomers(arrayCustomers)
        } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <h1 className="font-bold font-jakarta text-4xl text-blue-600">
         Customers
      </h1>
      <p className="mt-3 font-inter">Manage your customers.</p>

      <table className="w-full mt-5 table-auto drop-shadow-md bg-white rounded">
          <thead className="bg-slate-500 text-white font-jakarta">
              <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">Actions</th>
              </tr>
          </thead>

          <tbody>
              {customers.map(customer => (
                <Customer 
                  key={customer.id}
                  customer={customer}
                  handleDelete={handleDelete}
                />
              ))}
          </tbody>
      </table>
    </>
  )
}

export default Home