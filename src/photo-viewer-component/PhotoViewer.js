import React from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';

export function PhotoViewer(props) {
    if (!props.src) {
        return (
            <div className="small-photo-container">
                <img className="small-photo" src="https://picsum.photos/seed/picsum/500/300" />
                <img className="small-photo" src="https://picsum.photos/seed/picsum/500/300" />
                <img className="small-photo" src="https://picsum.photos/seed/picsum/500/300" />
                <img className="small-photo" src="https://picsum.photos/seed/picsum/500/300" />
            </div>
        );
    }
    return (
        <div className="small-photo-container">
            <img className="small-photo" src={props.src} />
            <img className="small-photo" src={props.src} />
            <img className="small-photo" src={props.src} />
            <img className="small-photo" src={props.src} />
        </div>
    )
}
