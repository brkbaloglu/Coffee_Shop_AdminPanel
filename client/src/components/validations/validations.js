import {object, string} from 'yup'

const minCharacterInMessage = 3
const requiredMessage = "This field is required"
const emailMessage = "This field is must be a email"
const minMessage = "Enter at least ${minCharacterInMessage} character in this field"

const contactSchema = object({
    name: string().required(requiredMessage),
    email: string().email(emailMessage).required(requiredMessage),
    message: string().required(requiredMessage).min(minCharacterInMessage, minMessage)
})

export default contactSchema