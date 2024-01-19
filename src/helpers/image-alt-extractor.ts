export const imageAltExtractor = (image: string) => {
    const startIndex: number = image.lastIndexOf('/') + 1;
    const endIndex: number = image.lastIndexOf('.');
    return image.substring(startIndex, endIndex);
}
