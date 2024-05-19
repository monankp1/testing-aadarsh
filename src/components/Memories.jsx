import React from "react";
import styled from "styled-components";

const images = [
  // {
  //   src: "https://uc81deed2a3023407aa55608af2d.previews.dropboxusercontent.com/p/thumb/ACRLxJJIc3B4lpMxHUp1YZB6kG68GGy3cO9bsAA7PxsxjiWFbx-9zugxzXz22juZ4i5C34rRlXVlLYwBAMV_VOwN8USxdLWiwb6BzClA2VswPPhauefrJEcjjxeg23xe3lXm-bHgjutLylKXkrnjE_I3uayIBqsBTvIp7spivjlKXoHIY8lZKYqQlQyOmUB_AVkFR2EOxaIY9p22kbcM-lxrJbriU5PBdvYjFJOY0vvIrCCA0Tf_k4PbsEUiGKKRPGY98kt0sRra1PI1iHyt4pe6xAkTTkazQXe-XY5_dEPxsk3p4_oe4G05YVhmLvlgo5AmnE6-PJMIRE7Zu1mC0JP2rHSHN8CyTPzmH-UsoktM3_JzGNVtjmEHmsnd9QhOlrk/p.jpeg",
  //   aspectRatio: 1.41,
  // },
  {
    src: "https://www.imagicaaworld.com/wp-content/uploads/2023/08/about_imagicaa_1.jpg",
    aspectRatio: 1.52,
  },
  {
    src: "https://www.baps.org/Data/Sites/1/Media/GalleryImages/29506/webimages/BAPS_Bengali_Karyakar_Shibir_Kolkata_04.jpg",
    aspectRatio: 1,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/38527bb4d0dbe7fee8f5276d2e55e7aa143c73fd48ba2aa77c614f008c1072b9?apiKey=3250d16d0ad044539de68d3e33600ce8&",
    aspectRatio: 0.58,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=3250d16d0ad044539de68d3e33600ce8&",
    aspectRatio: 1.41,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2058f006274fe8afdffa2609554ede924c7b1e2aa64a48e21b0c6e19ca6a3532?apiKey=3250d16d0ad044539de68d3e33600ce8&",
    aspectRatio: 1.41,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=3250d16d0ad044539de68d3e33600ce8&",
    aspectRatio: 1.52,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=3250d16d0ad044539de68d3e33600ce8&",
    aspectRatio: 1,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2058f006274fe8afdffa2609554ede924c7b1e2aa64a48e21b0c6e19ca6a3532?apiKey=3250d16d0ad044539de68d3e33600ce8&",
    aspectRatio: 0.58,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=3250d16d0ad044539de68d3e33600ce8&",
    aspectRatio: 1.41,
  },
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
        <MemoriesLink>View All</MemoriesLink>
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
