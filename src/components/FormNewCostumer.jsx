import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Alert from './Alert'

const FormNewCostumer = () => {

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

  const handleSubmit = (values) => {
    console.log(values)
  }  

  return (
    <div className="bg-white mt-10 px-10 py-10 shadow-lg md:w-3/4 mx-auto rounded-2xl">
        <h1 className="text-gray-600 font-bold font-inter text-xl text-center">Add costumer</h1>
    
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
            onSubmit={(values) =>{
                handleSubmit(values)
            }}
            validationSchema={newCustomerSchema}
        >
            {({errors, touched}) => { 
                
                return (

                <Form className="mt-10">

                    <div className="mb-4">
                        <label 
                            className="text-gray-800 font-inter font-semibold"
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
                            className="text-gray-800 font-inter font-semibold"
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
                            className="text-gray-800 font-inter font-semibold"
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
                            className="text-gray-800 font-inter font-semibold"
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
                            className="text-gray-800 font-inter font-semibold"
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
                        className="mt-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 p-3 text-white font-semibold font-inter text-lg rounded-xl cursor-pointer"
                    />

                </Form>
            )}}

        </Formik>
    </div>
  )
}

export default FormNewCostumer