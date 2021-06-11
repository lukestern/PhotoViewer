import React from "react";  // import React (to provide access to JSX)

function PhotoViewer() {    // declare a new function called 'PhotoViewer'
    return (                
        <div className="small-photo-container">              
            <img className="small-photo" src="https://picsum.photos/seed/picsum/500/300" />
            <img className="small-photo" src="https://picsum.photos/seed/picsum/500/300" />
            <img className="small-photo" src="https://picsum.photos/seed/picsum/500/300" />
            <img className="small-photo" src="https://picsum.photos/seed/picsum/500/300" />
        </div>
    );
}

export {PhotoViewer};       // Export the function so that it can be imported in other files