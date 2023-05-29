import { LinkIcon } from "@chakra-ui/icons";
import { Box, Link, Tag, TagLabel, Image } from "@chakra-ui/react";

import IImage from "@/types/image";

interface LinkItem {
  name: string;
  uri: string;
  image: IImage;
}

export interface LinksProps {
  content?: LinkItem[];
}

export default function Links({ content }: LinksProps) {
  return (
    <Box>
      <LinkIcon boxSize="0.8em" verticalAlign="center" />
      {content
        ? content.map((link, index) => (
            <Link
              key={`work-link-${index}`}
              href={link.uri}
              target="_blank"
              ml={1}
              aria-label={`Open ${link.name}`}
              display="inline"
            >
              <Tag size="md">
                <Image
                  src={link.image.src}
                  alt={link.image.alt}
                  height="1em"
                  width="1em"
                  objectFit="cover"
                  display="inline"
                  ml={-1}
                  mr={2}
                />
                <TagLabel>{link.name}</TagLabel>
              </Tag>
            </Link>
          ))
        : null}
    </Box>
  );
}
