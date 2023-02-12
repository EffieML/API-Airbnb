import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOneSpot } from '../../store/spots';
import { deleteSpotImageThunk } from '../../store/spotImg';
import trashcan from '../../img/trashcan.png';
import './SpotImgs.css';

function SpotImgs({ spotId }) {
    const dispatch = useDispatch();
    const spotImages = useSelector(state => state.spots?.allSpots[spotId].SpotImages);
    // console.log("all images spot: --------------", spotImages)
    const [isloaded, setIsloaded] = useState(false);

    useEffect(() => {
        dispatch(listOneSpot(spotId)).then(() => setIsloaded(true));
    }, [dispatch, spotId])

    const handleDelete = async (imgId) => {
        if (window.confirm('Do you want to delete this image?')) {
            await dispatch(deleteSpotImageThunk(imgId))
                .then(() => dispatch(listOneSpot(spotId)))
        }
    }

    return (
        <>
            <div className='user-listing-images-container'>
                {isloaded && spotImages && spotImages.length > 0 ?
                    spotImages.map((img) => (
                        <div className='user-listing-image-container' key={img.id}>
                            <img key={img.id} src={img.url} alt='spot-img-ind' onError={e => e.target.src = 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/imagesNotAvailable.png'} />
                            <div className='spot-img-delete'>
                                <button onClick={() => handleDelete(img.id)}>
                                    <img src={trashcan} />
                                </button>
                            </div>
                        </div>
                    ))
                    : ''}
            </div>
        </>
    )
}

export default SpotImgs;
