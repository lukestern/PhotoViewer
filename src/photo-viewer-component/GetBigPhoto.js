import React from "react";
import './GetBigPhoto.css';
import { Link } from 'react-router-dom'

export function GetBigPhoto(props) {
    let imageUrl = props.photoSelectedId ? `https://picsum.photos/id/6${props.photoSelectedId}/1600/900.jpg` : null;
    return (
        <div className="large-photo-container" data-testid="large-photo">
            <Link to='/'>
                <img
                    alt={props.photoSelectedId}
                    className="large-photo"
                    src={imageUrl} onClick={() => props.setPhotoSelected(null)} />
            </Link>
        </div>
    );
}
