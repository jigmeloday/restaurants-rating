import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

export const UploadCollections = async (file: any) => {
    try {
        const storage = getStorage();
        const storageRef = ref(storage, 'cover/' + file.name);
        const image = await uploadBytes(storageRef, file)
        const url = await getDownloadURL( image.ref )
        
    } catch ( error ) {
        console.log(error)
    }
}
