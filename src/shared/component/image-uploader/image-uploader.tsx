import ImageUploading from 'react-images-uploading';
import { useState } from 'react';

function ImageUploader() {
    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const onChange = (imageList:any, addUpdateIndex:any) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return(
        <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
        >
            {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                    <button
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                    >
                        Click or Drop here
                    </button>
                    &nbsp;
                    <button onClick={onImageRemoveAll}>Remove all images</button>
                    {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                                <button onClick={() => onImageUpdate(index)}>Update</button>
                                <button onClick={() => onImageRemove(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </ImageUploading>
    )
}

export default ImageUploader;
