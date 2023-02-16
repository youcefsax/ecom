import { auth,signInWithGooglePopup,signInWithGooleRedirect, createDocumentFromAuth } from "../../utils/firebase/firbase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { async } from "@firebase/util";
import SignUp from "../../components/sign-up/signUp.components";
import Button from "../../components/button-type/button-components";
const SignIn=()=>{
    
        const logGoole= async () =>{
        const {user}= await signInWithGooglePopup();
        const userDocRef =await createDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>be</h1>
            <Button buttonT='google' onClick={logGoole}>sign in</Button>
        <SignUp />
        </div>
    )
}
export default SignIn;