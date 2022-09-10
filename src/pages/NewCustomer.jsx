import React from 'react'
import Form from '../components/Form'

const NewCustomer = () => {
  return (
    <>
        <h1 className="font-bold font-inter text-4xl text-blue-600">New Customer</h1>
        <p className="mt-3 font-inter">Fill the following fields to add a new customer.</p>
    
        <Form />
    </>
  )
}

export default NewCustomer