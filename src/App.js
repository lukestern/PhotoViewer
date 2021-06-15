import { ThumbNails } from './photo-viewer-component/ThumbNails';
import { GetBigPhoto } from './photo-viewer-component/GetBigPhoto';
import './App.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  // photo selected state needs to become just image id
  const [photoSelectedId, setPhotoSelected] = useState(null);

  return (
    <Router>
      <div>
        <h1>React Photo Viewer</h1>
        
        <Switch>
          <Route path="/:photoId">
            <GetRouteById photoSelectedId={photoSelectedId} setPhotoSelected={setPhotoSelected} />
          </Route>
          <Route path="/">
            <GetBigPhoto photoSelectedId={photoSelectedId} setPhotoSelected={setPhotoSelected} />
            <ThumbNails photoSelectedId={photoSelectedId} setPhotoSelected={setPhotoSelected} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function GetRouteById(props) {
  const { photoSelectedId, setPhotoSelected } = props;
  const { photoId } = useParams();
  useEffect(() => {setPhotoSelected(photoId)});
  return (
    <div>
      <GetBigPhoto photoSelectedId={photoSelectedId} setPhotoSelected={setPhotoSelected} />
      <ThumbNails photoSelectedId={photoSelectedId} setPhotoSelected={setPhotoSelected} />
    </div>
  )
}

export default App;