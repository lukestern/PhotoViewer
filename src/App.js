import { ThumbNails } from './photo-viewer-component/ThumbNails';
import { GetBigPhoto } from './photo-viewer-component/GetBigPhoto';
import './App.css';
import { useState } from "react";

function App() {
  const [photoSelectedUrl, setPhotoSelected] = useState(null);

  return (
    <div>
      <h1>React Photo Viewer</h1>
      <GetBigPhoto photoSelectedUrl={photoSelectedUrl} setPhotoSelected={setPhotoSelected} />
      <ThumbNails photoSelectedUrl={photoSelectedUrl} setPhotoSelected={setPhotoSelected} />
    </div>
  );
}

export default App;