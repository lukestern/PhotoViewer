import { ThumbNails } from './photo-viewer-component/ThumbNails';
import { GetBigPhoto } from './photo-viewer-component/GetBigPhoto';
import './App.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  // photo selected state needs to become just image id
  const [photoSelectedUrl, setPhotoSelected] = useState(null);

  return (
    <Router>
      <div>
        <h1>React Photo Viewer</h1>
        
        <Switch>
          <Route path="/:photoId">
            <GetRouteById photoSelectedUrl={photoSelectedUrl} setPhotoSelected={setPhotoSelected} />
          </Route>
          <Route path="/">
            <GetBigPhoto photoSelectedUrl={photoSelectedUrl} setPhotoSelected={setPhotoSelected} />
            <ThumbNails photoSelectedUrl={photoSelectedUrl} setPhotoSelected={setPhotoSelected} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function GetRouteById(props) {
  const { photoSelectedUrl, setPhotoSelected } = props;
  const { photoId } = useParams();
  useEffect(() => {setPhotoSelected(`https://picsum.photos/id/6${photoId}/1600/900.jpg`)}, []);
  return (
    <div>
      <GetBigPhoto photoSelectedUrl={photoSelectedUrl} setPhotoSelected={setPhotoSelected} />
      <ThumbNails photoSelectedUrl={photoSelectedUrl} setPhotoSelected={setPhotoSelected} />
    </div>
  )
}

export default App;