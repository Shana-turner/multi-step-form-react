import { Formik, Form, Field, ErrorMessage } from 'formik';

export function Step2(){
    
    return <>
        <label htmlFor="review" className="text-left font-bold" >Your review</label>
        <Field as="select" name="review" id="review" className="w-80 rounded text-black p-1">
            <option value="unhappy">Unhappy</option>
            <option value="couldBeBetter">Could be better</option>
            <option value="satisfied">Satisfied</option>
            <option value="verySatisfied">Very satisfied</option>
        </Field>
        <ErrorMessage name="review" component="div" className='text-white'/>
        <label htmlFor="comment" className="text-left font-bold">Make your comment</label>
        <Field
            id="comment"
            name="comment"
            as="textarea"
            rows="4"
            className="w-80 rounded text-black p-1"
            
        />
        <ErrorMessage name="comment"  component="div" className='text-white'/>
    </>
}