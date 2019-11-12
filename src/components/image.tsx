import React, {FC} from 'react';
import {createSrcSet, ImageSize, ImageUrl} from "../util/image";
// * Style
import '../styles/image.scss';
// * Type
export type ImageProps = {
  className?: string;
  altText: string;
  imgUrl: ImageUrl;
  imgBreakPoint?: ImageSize;
}

const Image: FC<ImageProps> = ({altText, className = '', imgUrl, imgBreakPoint}) => {
  return (
    <img
      alt={altText}
      srcSet={createSrcSet(imgUrl, imgBreakPoint)}
      className={`img ${className}`}
    />
  )
};

export default Image;