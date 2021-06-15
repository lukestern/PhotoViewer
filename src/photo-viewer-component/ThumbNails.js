import React from "react";
import './ThumbNails.css';
import { getImageUrls } from './getImageUrls'
import { Link } from 'react-router-dom'

export function ThumbNails(props) {
    const photoIdList = getImageUrls();
    const imgList = photoIdList.map(
        (photoId) =>
            <Link to={`/${photoId}`} key={photoId}>
                <img
                    
                    alt={photoId}
                    className={photoId === props.photoSelectedId ? "small-photo-selected" : "small-photo"}
                    onClick={() => photoId === props.photoSelectedId ? props.setPhotoSelected(null) : props.setPhotoSelected(photoId)}
                    src={`https://picsum.photos/id/6${photoId}/1600/900.jpg`}
                />
            </Link>
    );

    return (
        <div className="small-photo-container" data-testid="small-photo-container">
            {imgList}
        </div>
    );
}