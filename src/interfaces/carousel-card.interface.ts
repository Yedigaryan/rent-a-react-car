export interface CarouselCardInterface {
    header: string,
    headerImage: string,
    description: JSX.Element,
    image: string,
    isFocused?: boolean,
    isLeftCard?: boolean,
    isRightCard?: boolean,
}