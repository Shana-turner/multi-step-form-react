import { useState } from 'react';
import './App.css'
import { Step1 } from './components/identification';
import { Step2 } from './components/review';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com'; 


function App() {
  const [step, setStep] = useState(0);

  const Step3 = ({values})=>{
    return<>
    <h2 class='title-info'>Your informations</h2>
        <div class='container-info'>
          <p><span class='detail-info'>Your name : </span> {values.name} </p>
          <p><span class='detail-info'>Your email : </span>{values.email}</p>
          <p><span class='detail-info'>Your review : </span> {values.review} </p>
          <p><span class='detail-info'>Your comment : </span> {values.comment} </p>
        </div>
    </>
  }

  const stepsArray = [<Step1/>, <Step2/>];

  const currentValidationSchema = [
    Yup.object({
        name : Yup.string().required('Required'),
        email : Yup.string().email('Invalid email').required('Required'),
    }),
    Yup.object({
        review : Yup.string().required('Required'),
        comment : Yup.string().min(3 | 'Write min 3 words').max(30 | 'Write max 30 words'),
    }),
    Yup.object(),
  ];

  const isLastStep = step === stepsArray.length;

  const handleSubmit =(values, actions)=>{
    if(isLastStep){
      emailjs.send('service_n7ji8qy', 'template_s52zfpd', values, 'a4NGJuoy2C7tpyCBm')
        .then((response) => {
          console.log('Email sent successfully:', response.status, response.text);
        }, (error) => {
          console.error('Failed to send email:', error);
        });
      
    }else{
      setStep(step+1);
      actions.setTouched({});
    }
    actions.setSubmitting(false);
  }

  return (
    <>
    <h1 className='text-3xl font-bold m-16'>Website evaluation</h1>
    <Formik 
      initialValues={{
        name:'',
        email:'',
        review:'',
        comment: '',
      }}
      validationSchema={currentValidationSchema[step]}
      onSubmit={handleSubmit}
    >

    {({ isSubmitting, values }) => (

    <div className='w-3/5  bg-gray-900 h-96 rounded-md m-auto'>
      <Form className='flex flex-col text-white px-52 gap-5 py-10' >

      {step < stepsArray.length ? (
            stepsArray[step]
          ) : (
            <Step3 values={values} />
          )}

        <div className='mt-9 flex flex-row gap-10 justify-center'>
            {step > 0 && (
              <button type="button" onClick={() => setStep(step - 1)} className='bg-blue-500 text-white rounded px-6 py-2 hover:text-blue-500 hover:bg-white font-bold'>
                Previous
              </button>
            )}
            <button type="submit" disabled={isSubmitting} className='bg-blue-500 text-white rounded px-6 py-2 hover:text-blue-500 hover:bg-white font-bold '>
              {isLastStep ? 'Submit' : 'Next'}
            </button>
        </div>
      </Form>
      </div>
    )}
    </Formik>
    </>
  )
}

export default App
