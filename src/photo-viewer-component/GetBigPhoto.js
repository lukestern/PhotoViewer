import React from "react";
import './GetBigPhoto.css';

export function GetBigPhoto(props) {
    return (
        <div className="large-photo-container" data-testid="large-photo">
            <img alt={props.photoSelectedUrl} className="large-photo" src={props.photoSelectedUrl}  onClick={() => props.setPhotoSelected(null)} />
        </div>
    );
}