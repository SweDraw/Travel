// * Lib
import React, {FC} from 'react';
// * Type
import HeroImage, {HeroImageProps} from "./hero-image";

export type HeaderProps = {
  heroImg: HeroImageProps;

}

const Header: FC<HeaderProps> = ({heroImg}) => {

  return (
    <header className="header">
      <HeroImage {...heroImg}/>
    </header>
  )
};

export default Header;