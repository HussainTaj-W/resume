import ModalImage from "react-modal-image";

import { Box } from "@chakra-ui/react";

import IImage from "@/models/image";

import styles from "./styles.module.scss";

interface Props {
  images: IImage[];
  height?: number;
}

function LineGallery({ images, height = 100 }: Props) {
  return (
    <Box className={styles.gallery} my={1} userSelect="none">
      {images.map((image, index) => (
        <ModalImage
          key={`image-${index}`}
          className={styles["gallery-image"]}
          large={image.src}
          medium={image.src}
          small={image.src}
          alt={image.alt}
          height={height}
          hideDownload={true}
        />
      ))}
    </Box>
  );
}

export default LineGallery;
