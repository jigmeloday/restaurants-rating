import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../../firebase/firebase.config';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

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

export const UploadCoverImage = async (file: any) => {
    try {
        const storage = getStorage();
        const storageRef = ref(storage, 'cover/' + file.name);
        const image = await uploadBytes(storageRef, file)
        return await getDownloadURL( image.ref )
    } catch ( error ) {
        console.log(error)
    }
}

export const CreateListAPI = async (data: any) => {
    try {
       const url = await UploadCoverImage(data.cover);
       if ( url ) {
          await addDoc(collection(db, 'restaurants'), {
               name: data.name,
               rating: 0,
               cover: url,
               menu: data.menu,
               collection: [],
               feedback: data.feedback,
               visited: false
           });
           return await GetCafe();
       }
    } catch ( error ) {
        console.log(error)
    }
}

export const VisitedCafe = async () => {

    try {
        const cafeList: any[] = [];
        const user = query(collection(db, 'restaurants'), where('visited', '==', true));
        const data = await getDocs(user);
        data.docs.forEach((doc) => {
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

export const NewCafe = async () => {

    try {
        const cafeList: any[] = [];
        const user = query(collection(db, 'restaurants'), where('visited', '==', false));
        const data = await getDocs(user);
        data.docs.forEach((doc) => {
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
