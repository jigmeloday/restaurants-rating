import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase/firebase.config';

export const GetProfile = async (email: string) => {
    try {
        const user = query(collection(db, 'user'), where('email', '==', email));
        const data = await getDocs(user);
       return  data?.docs[0]?.data()
    } catch ( error ) {
        return {}
    }
}
