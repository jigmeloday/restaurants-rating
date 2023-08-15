import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../../firebase/firebase.config';

export const Login = async ( data: { email: string, password: string } ) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
        return userCredential.user;
    } catch (error) {
       console.log(error)
    }
}

export const LogOut = async () => {
    try {
        return await signOut( auth );
    } catch (error) {
        console.log(error)
    }
}

