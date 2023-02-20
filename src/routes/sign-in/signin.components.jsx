import { signInAuthWithUserAndPassword,auth,signInWithGooglePopup,signInWithGooleRedirect, createDocumentFromAuth } from "../../utils/firebase/firbase.utils";
import { useEffect,useState } from "react";
import { getRedirectResult } from "firebase/auth";
import { async } from "@firebase/util";
import SignUp from "../../components/sign-up/signUp.components";
import Button from "../../components/button-type/button-components";
import FormInput from "../../components/form-input/form-input.components";
import './sign-in.style.scss';

const formField={
    email:'',
    password:'',
 
}
const SignIn=()=>{
    const [field,setfield]=useState(formField);
    const {email,password}=field;
    const [wrong,setWrong]=useState('');
    const handleChange=(event)=>{
        const {name, value}=event.target;
        setfield({...field,[name]: value});
        console.log(field)
    }
        const logGoole= async () =>{
        const {user}= await signInWithGooglePopup();
       await createDocumentFromAuth(user);
    }
    const resetForm=()=>{
        setfield(formField)
    }
    const handleSign=async (event)=>{
        event.preventDefault();
        try{
            const resppnse=await signInAuthWithUserAndPassword(email,password);
            console.log(resppnse)
        }
        catch(err){
            switch(err.code){
                case 'auth/wrong-password':setWrong('wrong password');break;
                case 'auth/user-not-found':setWrong('user not exiset');break;
                default:console.log(err);

            }
            
        }
        resetForm();
    }
    
    return(
        <div className="container">
            <div className="sign-in-container">
            <h2>I Already have an account</h2>
            <form onSubmit={handleSign}>
            
            <FormInput label='email' onChange={handleChange} type='email' required name="email" value={email}/>
            <FormInput label='password' onChange={handleChange} type='password' required name="password" value={password}/>
            <div className="button-con">
            <Button type="button" buttonT='google' onClick={logGoole}>sign in</Button>
            <Button >sign in</Button>
            </div>
            <h2 className="wrong">{wrong}</h2>

            </form>
            </div>
        <SignUp />
        </div>
    )
}
export default SignIn;