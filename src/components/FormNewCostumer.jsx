import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alert from './Alert'

const FormNewCostumer = () => {

  const navigate = useNavigate()  

  const newCustomerSchema = Yup.object().shape({
        name: Yup.string()
                   .min(3, 'The name is too short')
                   .max(40, 'The name is too long')
                   .required('Customer name is required'),
        company: Yup.string()
                   .required('Company name is required'),
        email: Yup.string()
                   .email('Email addres is not valid')
                   .required('Email address is required'),
        phone: Yup.number()
                   .positive('Phone number is not valid')
                   .integer('Phone number is not valid')
                   .typeError('Phone number is not valid'),
  })

  const handleSubmit = async (values) => {
      try {
          const url = "http://localhost:4000/customers"

          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }  
          })
          console.log(response)
          const result = await response.json()
          console.log(result)
          navigate('/customers')
      } catch (error) {
            console.log(error)
      }
  }  

  return (
    <div className="bg-white mt-10 px-10 py-10 shadow-lg md:w-3/4 mx-auto rounded-2xl">
        <h1 className="text-gray-600 font-bold font-jakarta text-xl text-center">Add costumer</h1>
    
        <Formik
            initialValues={
                {
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    notes: '',
                }
            }
            onSubmit={ async (values, {resetForm}) =>{
                await handleSubmit(values)

                resetForm()
            }}
            validationSchema={newCustomerSchema}
        >
            {({errors, touched}) => { 
                
                return (

                <Form className="mt-10">

                    <div className="mb-4">
                        <label 
                            className="text-gray-700 font-jakarta font-bold"
                            htmlFor="name"
                        >Name:</label>
                        <Field 
                            id="name"
                            type="text"
                            className="mt-2 block w-full p-3 bg-slate-50 font-inter rounded-xl"
                            placeholder="Customer name"
                            name="name"
                        />

                        {/* Error message */}
                        { errors.name && touched.name ? (
                            <Alert>{errors.name}</Alert>
                        ) : null }
                    </div>

                    <div className="mb-4">
                        <label 
                            className="text-gray-700 font-jakarta font-bold"
                            htmlFor="company"
                        >Company:</label>
                        <Field 
                            id="company"
                            type="text"
                            className="mt-2 block w-full p-3 bg-slate-50 font-inter rounded-xl"
                            placeholder="Customer company"
                            name="company"
                        />

                        {/* Error message */}
                        { errors.company && touched.company ? (
                            <Alert>{errors.company}</Alert>
                        ) : null }
                    </div>

                    <div className="mb-4">
                        <label 
                            className="text-gray-700 font-jakarta font-bold"
                            htmlFor="email"
                        >Email:</label>
                        <Field 
                            id="email"
                            type="email"
                            className="mt-2 block w-full p-3 bg-slate-50 font-inter rounded-xl"
                            placeholder="example@example.com"
                            name="email"
                        />

                        {/* Error message */}
                        { errors.email && touched.email ? (
                            <Alert>{errors.email}</Alert>
                        ) : null }
                    </div>

                    <div className="mb-4">
                        <label 
                            className="text-gray-700 font-jakarta font-bold"
                            htmlFor="phone"
                        >Phone:</label>
                        <Field 
                            id="phone"
                            type="tel"
                            className="mt-2 block w-full p-3 bg-slate-50 font-inter rounded-xl"
                            placeholder="Ex. 123 456 7891"
                            name="phone"
                        />
                        {/* Error message */}
                        { errors.phone && touched.phone ? (
                            <Alert>{errors.phone}</Alert>
                        ) : null }
                    </div>

                    <div className="mb-4">
                        <label 
                            className="text-gray-700 font-jakarta font-bold"
                            htmlFor="notes"
                        >Notes:</label>
                        <Field 
                            as="textarea"
                            id="notes"
                            type="text"
                            className="mt-2 block w-full p-3 bg-slate-50 font-inter rounded-xl h-40"
                            placeholder="Observations..."
                            name="notes"
                        />
                    </div>

                    <input 
                        type="submit"
                        value="Add Customer"
                        className="mt-5 w-full transition ease-in-out bg-blue-600  hover:bg-blue-700 p-3 text-white font-semibold font-jakarta text-lg rounded-xl cursor-pointer"
                    />

                </Form>
            )}}

        </Formik>
    </div>
  )
}

export default FormNewCostumer