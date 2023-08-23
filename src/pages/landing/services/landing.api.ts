import { addDoc, collection, doc, getDocs, getDoc, query, where } from "firebase/firestore";
import { db } from '../../../firebase/firebase.config';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

export const GetCafe = async () => {
    try {
        const creatorQuery = query(
            collection(db, 'restaurants'),
            where('creator', '==', 'jl@selise.ch')
        );

        const sharedQuery = query(
            collection(db, 'restaurants'),
            where('shared', '==', 'jl@selise.ch')
        );
        const cafeList: any[] = [];

       return  Promise.all([getDocs(creatorQuery), getDocs(sharedQuery)])
            .then(([creatorDocs, sharedDocs]) => {
                // Combine the results of both queries
                const combinedDocs = [...creatorDocs.docs, ...sharedDocs.docs];
                combinedDocs.forEach(doc => {
                    cafeList.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
               return cafeList;
            })
            .catch(error => {
                console.error('Error fetching documents:', error);
            });

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
               visited: false,
              creator: data.creator
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

export const CafeDetailsAPI = async (id: any) => {

    try {
       const cafe = await doc(db, "restaurants", id);
       const data = await getDoc(cafe);
       return data.data()
    } catch ( error ) {
        return []
    }
}
