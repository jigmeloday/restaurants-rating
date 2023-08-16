import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase/firebase.config';
import { collection, addDoc } from 'firebase/firestore';

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

export const signUp = async ( payload: { email:string, password:string }) => {
    try {
       const user = await createUserWithEmailAndPassword (auth, payload.email, payload.password);
       if ( user ) {
          return  await addDoc(collection(db, 'user'), {
               email: payload.email,
               userName: '',
               firstName: '',
               lastName: '',
               share_with: '',
               profileUrl: ''
           });
       }
       return user
    } catch ( error ) {
        return error
    }
}

