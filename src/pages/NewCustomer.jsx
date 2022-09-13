import FormNewCostumer from '../components/FormNewCostumer'

const NewCustomer = () => {
  return (
    <>
        <h1 className="font-bold font-jakarta text-4xl text-blue-600">New Customer</h1>
        <p className="mt-3 font-inter">Fill the following fields to add a new customer.</p>
    
        <FormNewCostumer />
    </>
  ) 
}

export default NewCustomer