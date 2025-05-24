import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/이건씨.jpg";
// import GalleryPhoto2 from "../assets/Gallery_Photo_2.webp";
// import GalleryPhoto3 from "../assets/Gallery_Photo_3.webp";
// import GalleryPhoto4 from "../assets/Gallery_Photo_4.webp";
// import GalleryPhoto5 from "../assets/Gallery_Photo_5.webp";
// import GalleryPhoto6 from "../assets/Gallery_Photo_6.webp";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;

  /* 🔽 모바일 터치 스크롤 가능하게 */
  touch-action: pan-y;
  overscroll-behavior: contain;

  /* 🔽 react-image-gallery 내부 슬라이더가 스크롤 방해하지 않게 */
  .image-gallery-slide-wrapper {
    touch-action: pan-y;
  }

  .image-gallery-slide-wrapper {
    pointer-events: none;
    user-select: none;
    touch-action: pan-y;
  }
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto1,

  }
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>이제놀자, 찐사랑</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
