export type ImageParameter<T> = {
  small?: T,
  main: T,
  big?: T
}

export type ImageSize = ImageParameter<number>;
export type ImageUrl = ImageParameter<string>;

export const createSrcSetItem = (src: string, breakPoint: number) => `${src} ${breakPoint}w`;
export const setDefaultImgSize = (imgSize?: ImageSize): ImageSize => {
  const defaultImgSize: ImageSize = {
    big: 1920,
    main: 1280,
    small: 640
  };

  return Object.assign({}, defaultImgSize, imgSize);
};


export const createSrcSet = (imgUrl: ImageUrl, imgSize?: ImageSize) => {
  const sizeArray: ImageSize = setDefaultImgSize(imgSize);
  const src: string[] = [];
  for (let key in imgUrl) if (imgUrl.hasOwnProperty(key) && sizeArray.hasOwnProperty(key)) {
    // @ts-ignore
    const url: string | undefined = imgUrl[key];
    // @ts-ignore
    const size: number = sizeArray[key];
    if (url) {
      const img = require('../images/' + url);
      src.push(createSrcSetItem(img, size));
    }
  }
  return src.join(',');
};