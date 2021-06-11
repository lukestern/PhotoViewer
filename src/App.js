import { PhotoViewer } from './photo-viewer-component/PhotoViewer';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer src="https://picsum.photos/id/237/200/300"/>
      </div>
  );
}

export default App;
