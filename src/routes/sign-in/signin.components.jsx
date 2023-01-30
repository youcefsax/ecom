import { signInWithGooglePopup, createDocumentFromAuth } from "../../utils/firebase/firbase.utils";

const SignIn=()=>{
    const logGoole= async () =>{
        const {user}= await signInWithGooglePopup();
        const userDocRef =await createDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>be</h1>
            <button onClick={logGoole}>sign in</button>
        </div>
    )
}
export default SignIn;