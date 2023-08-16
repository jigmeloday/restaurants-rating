import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase/firebase.config';

export const GetCafe = async () => {

    try {
        const cafeList: any[] = [];
        const restaurantsCollection = collection(db, 'restaurants');
        const querySnapshot = await getDocs(restaurantsCollection);
        querySnapshot.forEach((doc) => {
            cafeList.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return cafeList;
    } catch ( error ) {
        debugger
        return []
    }
}
