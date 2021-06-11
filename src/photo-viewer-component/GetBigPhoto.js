import React from "react"; 
import './GetBigPhoto.css';


export function GetBigPhoto(props) {
    return (
        <div className="large-photo-container">
            <img alt='' className="large-photo" src={props.photoSelectedUrl} />
        </div>
    );
}