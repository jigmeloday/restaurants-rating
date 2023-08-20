import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { db } from '../../../firebase/firebase.config';
import { updateDoc, doc } from 'firebase/firestore';

export const UploadCollections = async (file: any, id:any, collections:[]) => {
    try {
        const newArray:string[] = [];
        const storage = getStorage();
        const storageRef = ref(storage, 'cover/' + file.name);
        const image = await uploadBytes(storageRef, file)
        const url = await getDownloadURL( image.ref )
        collections?.map((item) => {
            newArray.push(
                item,
                url
            )
        })
        const washingtonRef = doc(db, 'restaurants', id);
        await updateDoc(washingtonRef, {
            collection: newArray
        });
        return url;
    } catch ( error ) {
        console.log(error)
    }
}
