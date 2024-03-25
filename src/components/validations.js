import { object, string, number, date, InferType, ref } from 'yup';


const messages = {
    required:"Bu alan zorunludur",
    email:"Geçerli Bir Email Adresi Giriniz.",
    min: "En az 5 karater giriniz."
};


let validations = object({
    username: string().required(messages.required),
  //age: number().required().positive().integer(),
  email: string().email(messages.email).required(messages.required),
  password: string().min(5,messages.min).required(messages.required),
  passwordC: string().oneOf([ref('password')], " Parolalar Eşleşmiyor").required(messages.required),
 // website: string().url().nullable(),
 // createdOn: date().default(() => new Date()),
});


export default validations;

