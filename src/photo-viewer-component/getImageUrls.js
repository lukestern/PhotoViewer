export const brokenImages = [
    1, 24, 32, 36, 44, 47
];

export function getImageUrls() {
    const photoIdList = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            photoIdList.push(imageNumberString);
        }
    }

    return photoIdList;
}