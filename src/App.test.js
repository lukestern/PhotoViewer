import { getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { getImageUrls, brokenImages } from './photo-viewer-component/getImageUrls';
import { GetBigPhoto } from './photo-viewer-component/GetBigPhoto';
import App from './App';
import { ThumbNails } from './photo-viewer-component/ThumbNails';
import renderer from 'react-test-renderer';


// Unit tests
test('renders react photo viewer heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Photo Viewer/i);
  expect(linkElement).toBeInTheDocument();
});


test('image urls are correctly generated', () => {
  const imageUrls = getImageUrls();
  const brokenUrls = brokenImages.map((imageNumber) => `https://picsum.photos/id/6${imageNumber}/1600/900.jpg`);
  imageUrls.forEach(
    (url) => expect(!brokenUrls.includes(url))
  );
});

test('image is selected when it is clicked', () => {
  render(<App />);

  const testedUrl = getImageUrls()[0];
  const testedImage = screen.getByAltText(testedUrl);
  userEvent.click(testedImage);
  expect(testedImage.className==='small-photo-selected');  

  const testedUrl1 = getImageUrls()[10];
  const testedImage1 = screen.getByAltText(testedUrl1);
  userEvent.click(testedImage1);
  expect(testedImage1.className==='small-photo-selected'); 
});

test('large image is displayed if a thumbnail is selected', () => {
  render(<App />);

  const testedUrl = getImageUrls()[0];
  const testedImage = screen.getByAltText(testedUrl);

  userEvent.click(testedImage);

  expect(testedImage.className==='large-photo');
});

test('regression test for big photo', () => {
  const photoUrl = "Hello"
  render(<GetBigPhoto photoSelectedUrl={photoUrl} setPhotoSelected={() => {}} />);

  const bigPhoto = screen.getByTestId('large-photo');

  expect(bigPhoto).toBeInTheDocument();
  expect(bigPhoto.src===photoUrl);
  expect(bigPhoto.className==='large-photo');
});

test('regression test for thumbnails', () => {
  const photoUrl = "Hello"
  render(<ThumbNails photoSelectedUrl={photoUrl} setPhotoSelected={() => {}} />)

  const smallPhotoContainer = screen.getByTestId('small-photo-container');

  expect(smallPhotoContainer).toBeInTheDocument();
  expect(smallPhotoContainer.children).toHaveLength(44);
});


// Snapshot tests
describe("PhotoViewer", () => {
  let tree = renderer.create(<App />)

  it("should match snapshots without selected photo", async () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("GetBigPhoto should match snapshots without selected photo", async () => {
    renderer.act(() => {
      tree.update(<GetBigPhoto photoSelectedUrl={null} setPhotoSelected={null} />)
    });
  
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("GetBigPhoto should match snapshots with selected photo", async () => {
    renderer.act(() => {
      tree.update(<GetBigPhoto photoSelectedUrl={"Test"} setPhotoSelected={() => {}} />)
    });
  
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("ThumbNails should match snapshots without selected photo", async () => {
    renderer.act(() => {
      tree.update(<ThumbNails photoSelectedUrl={null} setPhotoSelected={null} />)
    });
  
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("ThumbNails should match snapshots with selected photo", async () => {
    renderer.act(() => {
      tree.update(<ThumbNails photoSelectedUrl={"Test"} setPhotoSelected={() => {}} />)
    });
  
    expect(tree.toJSON()).toMatchSnapshot();
  });
});