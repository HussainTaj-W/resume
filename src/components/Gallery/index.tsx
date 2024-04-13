import IImage from "@/types/image";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import ModalImage from "react-modal-image";

import ScrollControls from "../ScrollControls";
import styles from "./styles.module.scss";

export interface GalleryProps {
  content: IImage[];
  height?: number;
}

function Gallery({ content, height = 100 }: GalleryProps) {
  const ref = useRef(null);

  return (
    <ScrollControls containerRef={ref}>
      <Box className={styles.gallery} my={1} userSelect="none" ref={ref}>
        {content.map((image, index) => (
          <ModalImage
            key={`image-${index}`}
            className={styles["gallery-image"]}
            large={image.src}
            medium={image.src}
            small={image.src}
            alt={image.alt}
            height={height}
            width="auto"
            hideDownload={true}
          />
        ))}
      </Box>
    </ScrollControls>
  );
}

export default Gallery;
