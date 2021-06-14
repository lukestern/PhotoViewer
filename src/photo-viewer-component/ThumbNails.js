import React from "react";
import './ThumbNails.css';
import { getImageUrls } from './getImageUrls'

export function ThumbNails(props) {
    const urlList = getImageUrls();
    const imgList = urlList.map(
        (url) =>
            <img
                key={url}
                alt={url}
                className={url === props.photoSelectedUrl ? "small-photo-selected" : "small-photo"}
                onClick={() => url === props.photoSelectedUrl ? props.setPhotoSelected(null) : props.setPhotoSelected(url)}
                src={url} />
    );

    return (
        <div className="small-photo-container" data-testid="small-photo-container">
            {imgList}
        </div>
    );
}