import { Formik, Form, Field, ErrorMessage } from 'formik';

export function Step1(){
    
    return <>
        <label htmlFor="name" className="text-left font-bold" >Name</label>
        <Field
            id="name"
            name="name"
            type="text"
            className="w-80 rounded text-black p-1"
            
        />
        <ErrorMessage name="name" component="div" className='text-white'/>
        <label htmlFor="email" className="text-left font-bold">Email</label>
        <Field
            id="email"
            name="email"
            type="email"
            className="w-80 rounded text-black p-1"
            
        />
        <ErrorMessage name="name" component="div" className='text-white'/>
    </>
}