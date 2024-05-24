import React from "react";
import styled from "styled-components";

const images = [
  {
    src: "https://www.baps.org/Data/Sites/1/Media/GalleryImages/5684/WebImages/054-19-8f.jpg",
    aspectRatio: 1,
  },
  {
    src: "https://www.baps.org/Data/Sites/1/Media/GalleryImages/13082/WebImages/2016_11_21_005_Bharuch.jpg",
    aspectRatio: 1.41,
  },
  {
    src: "https://www.baps.org/Data/Sites/1/Media/GalleryImages/19837/WebImages/2019_07_06_007_Bharuch.jpg",
    aspectRatio: 1.41,
  },
  {
    src: "https://www.baps.org/Data/Sites/1/Media/GalleryImages/19838/WebImages/2019_07_07_035_Bharuch.jpg",
    aspectRatio: 1,
  },
  {
    src: "https://www.baps.org/Data/Sites/1/Media/GalleryImages/19838/WebImages/2019_07_07_031_Bharuch.jpg ",
    aspectRatio: 1.52,
  },
  {
    src: "https://www.baps.org/Data/Sites/1/Media/GalleryImages/19857/WebImages/2019_07_10_049_Bharuch.jpg",
    aspectRatio: 0.58,
  },
  {
    src: "https://www.baps.org/Data/Sites/1/Media/GalleryImages/13083/WebImages/2016_11_22_002_Bharuch.jpg",
    aspectRatio: 1.41,
  },
  {
    src: "https://www.baps.org/Data/Sites/1/Media/GalleryImages/19838/WebImages/2019_07_07_007_Bharuch.jpg ",
    aspectRatio: 1.52,
  },
  {
    src: "https://www.baps.org/Data/Sites/1/Media/GalleryImages/4503/WebImages/20110708-014f.jpg",
    aspectRatio: 0.58,
  }
];

function MemoriesSection() {
  return (
    <MemoriesContainer>
      <MemoriesHeader>
        <MemoriesIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2b9d9559c9de94c411bb3c8d10fa32c60dc4c0d8a86a04165c45b39c474e9aa?apiKey=3250d16d0ad044539de68d3e33600ce8&"
          alt="Memories Icon"
        />
        <MemoriesTitle>Memories</MemoriesTitle>
        {/* <MemoriesLink>View All</MemoriesLink> */}
      </MemoriesHeader>
      <MemoriesGallery>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image
              src={image.src}
              alt={`Memory ${index + 1}`}
              aspectRatio={image.aspectRatio}
            />
          </ImageWrapper>
        ))}
      </MemoriesGallery>
    </MemoriesContainer>
  );
}

const MemoriesContainer = styled.section`
  display: flex;
  max-width: 100%;
  flex-direction: column;
`;

const MemoriesHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 10px 0 10px;
  color: #1d0f2a;
  padding: 0 8px;
`;

const MemoriesIcon = styled.img`
  width: 28px;
  object-fit: contain;
  height: 28px;
`;

const MemoriesTitle = styled.h2`
  flex: 1;
  margin: auto 0;
  font: 700 20px Arial, sans-serif;
`;

const MemoriesLink = styled.a`
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  color: #0000ee; // Default link color
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const MemoriesGallery = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  padding: 0 20px;
  overflow-x: auto;
  border-radius: 15px;
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto; // This ensures that the wrapper does not grow or shrink.
  width: calc(175px * ${(props) => props.aspectRatio});
  height: 175px;
`;
// const ImageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const Image = styled.img`
//   width: 175px;
//   object-fit: cover;
//   aspect-ratio: ${(props) => props.aspectRatio};

//   &:not(:first-child) {
//     margin-top: 8px;
//   }
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default MemoriesSection;
