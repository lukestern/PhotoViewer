import { render, screen } from '@testing-library/react';
import { getImageUrls, brokenImages } from './photo-viewer-component/getImageUrls';
import App from './App';

test('renders react photo viewer heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Photo Viewer/i);
  expect(linkElement).toBeInTheDocument();
});


// test('image urls are correctly generated', () => {
//   render(<App />);
//   const linkElements = getAllByRole('img');
//   const brokenUrls = brokenImages.map((imageNumber) => `https://picsum.photos/id/6${imageNumber}/1600/900.jpg`)
//   brokenUrls.forEach((url) => {
//     linkElements.filter(element => element.src === url )
//   })
//   expect(linkElements).

// });


// test('renders ', () => {
//   render(<App />);
//   const linkElement = screen.getAllByRole('img');
//   console.log(linkElement)
//   expect(linkElement).toBeInTheDocument();
// });