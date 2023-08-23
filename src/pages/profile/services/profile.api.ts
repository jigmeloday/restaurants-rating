import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../../firebase/firebase.config';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const GetProfile = async (email: string) => {
    try {
        const user = query(collection(db, 'user'), where('email', '==', email));
        const data = await getDocs(user);
       return  data?.docs[0]?.data()
    } catch ( error ) {
        return null
    }
}

export const UploadProfile = async (file: any, email: string) => {
    try {
        const storage = getStorage();
        const storageRef = ref(storage, 'profile/' + file.name);
        const image = await uploadBytes(storageRef, file)
        const url = await getDownloadURL(image.ref)
        const user = await query(collection(db, 'user'), where('email', '==', email))
        const querySnapshot = await getDocs(user);
        if ( !querySnapshot.empty ) {
            const userDocRef = doc(db, 'user', querySnapshot.docs[0].id);
            await updateDoc( userDocRef, { profileUrl: url } )
            return await GetProfile( email )
        }
        return
    } catch ( error ) {
        console.log(error)
    }
}

export const UpdateProfile = async (email: string, data: any) => {
    try {
        const user = await query(collection(db, 'user'), where('email', '==', email))
        const querySnapshot = await getDocs(user);
        if ( !querySnapshot.empty ) {
            const userDocRef = doc(db, 'user', querySnapshot.docs[0].id);
            await updateDoc( userDocRef, data )
            return true
        }
        return
    } catch ( error ) {
        console.log(error)
    }
}
