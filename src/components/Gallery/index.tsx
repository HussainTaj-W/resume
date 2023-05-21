import ModalImage from "react-modal-image";

import { Box } from "@chakra-ui/react";

import IImage from "@/types/image";

import styles from "./styles.module.scss";

export interface GalleryProps {
  content: IImage[];
  height?: number;
}

function Gallery({ content, height = 100 }: GalleryProps) {
  return (
    <Box className={styles.gallery} my={1} userSelect="none">
      {content.map((image, index) => (
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

export default Gallery;
