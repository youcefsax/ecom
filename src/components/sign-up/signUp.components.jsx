import { useState } from "react";
import{createAuthWithUserAndPassword,createDocumentFromAuth} from'../../utils/firebase/firbase.utils';
import FormInput from "../form-input/form-input.components";
import './sign-up.style.scss';
import Button from "../button-type/button-components";
const formField={
    name:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUp=()=>{
    const [field,setfield]=useState(formField);
    const {name,email,password,confirmPassword}=field;

    const handleSubmit=async (event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert('not match')
            return;
        }
        try{
            const {user}=await createAuthWithUserAndPassword(email, password);
            console.log(user);

            await createDocumentFromAuth(user,name);
            resetForm();
        }
        catch(err){
            if(err.code==='auth/email-already-in-use'){
                alert('email alaredy used');
            }else{
                console.log(err)
            }
        }
    }

    const resetForm=()=>{
        setfield(formField)
    }
    const handleChange=(event)=>{
        const {name, value}=event.target;
        setfield({...field,[name]: value});
    }
    console.log(field)
    return(
        <div className="sign-up-container">
        <h2>signup with your email</h2>
            <form onSubmit={handleSubmit}>
                
                <FormInput label='Name' onChange={handleChange} type='text' required name="name" value={name}/>

                
                <FormInput label='email' onChange={handleChange} type='email' required name="email" value={email}/>

                
                <FormInput label='password' onChange={handleChange} type='password' required name="password" value={password}/>

                
                <FormInput label="confirm password" onChange={handleChange} type='password' required name="confirmPassword" value={confirmPassword}/>
                <Button  type="submit">sign up</Button>

            </form>
        </div>
    )
}
export default SignUp;