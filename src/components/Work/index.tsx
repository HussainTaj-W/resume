import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import IImage from "@/types/image";
import { renderFactoryComponents } from "@/utils/factory";

export interface WorkProps {
  title: string;
  image: IImage;
  description: string;
  content: Record<string, any>;
}

export default function Work({
  title,
  description,
  image,
  content,
}: WorkProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box h="100%">
      <Card
        w="300px"
        h="calc(200px + 9em)"
        variant="outline"
        overflow="clip"
        onClick={onOpen}
        cursor="pointer"
      >
        <CardHeader m={0} p={0}>
          <Image
            src={image.src}
            alt={image.alt}
            height="200px"
            width="100%"
            objectFit="cover"
          />
        </CardHeader>
        <CardBody>
          <Heading noOfLines={1} as="h2" size="md">
            {title}
          </Heading>
          <Text noOfLines={3}>{description}</Text>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
        <ModalOverlay />
        <ModalContent overflow="clip">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{renderFactoryComponents(content)}</ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </Box>
  );
}
