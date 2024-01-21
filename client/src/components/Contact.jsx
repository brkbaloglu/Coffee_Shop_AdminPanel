import Header from './Header'
import Footer from './Footer'
import { useFormik } from 'formik'
import validationSchema from "./validations/validations"


const Contact = () => {

    const {handleSubmit, handleBlur, handleChange, isSubmitting, values, errors, touched} = useFormik({
        initialValues:{
            name: "",
            email: "",
            message: ""
        },
        onSubmit: async (values, bag) => {
            await new Promise((r) => setTimeout(r, 1000))
            console.log(values)
            bag.resetForm()

            
        },
        validationSchema: validationSchema

    })

  return (
    <div>
        <Header/>
        <div className='flex items-center justify-center flex-col'>
            <h2 className='text-5xl my-10 font-bold text-[#3b2316]'>Contact Us</h2>
            <form onSubmit={handleSubmit} action="" className='flex items-center justify-center flex-col'>
                <input className='w-[500px] border-2 p-2 rounded-xl my-2 border-[#3b2316]' onBlur={handleBlur("name")} disabled={isSubmitting} value={values.name} onChange={handleChange("name")} type="text" name="name" placeholder='Enter your name' id="name" />
                {errors.name && touched.name && <div className='text-red-600 font-semibold'>{errors.name}</div>}
                <input className='w-[500px] border-2 p-2 rounded-xl my-2 border-[#3b2316]' onBlur={handleBlur("email")} disabled={isSubmitting} value={values.email} onChange={handleChange("email")} type="email" name="email" placeholder='Enter your email' id="email" />
                {errors.email && touched.email && <div className='text-red-600 font-semibold'>{errors.email}</div>}
                <textarea className='w-[500px] border-2 p-2 rounded-xl my-2 border-[#3b2316] resize-none' onBlur={handleBlur("message")} disabled={isSubmitting} value={values.message} onChange={handleChange("message")} name="message" placeholder='Enter your message' id="message" cols="30" rows="10"></textarea>
                {errors.message && touched.message && <div className='text-red-600 font-semibold'>{errors.message}</div>}
                <button className='border-2 border-[#3b2316] text-[#3b2316] px-4 py-2 rounded-xl mt-5 hover:bg-[#3b2316] hover:text-white' type='submit' disabled={isSubmitting}>Submit</button>
            </form>
        </div>

        <Footer/>
    </div>
  )
}

export default Contact