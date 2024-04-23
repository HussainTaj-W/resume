import { renderFactoryComponents } from "@/utils/factory";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Wrap,
} from "@chakra-ui/react";

import styles from "./styles.module.scss";

export interface CollectionProps {
  content: Record<string, any>[];
  featured?: { content: Record<string, any>[] } | null | undefined;
}

export default function Collection({ content }: CollectionProps) {
  return (
    <Accordion m={2} className={styles.collection} allowMultiple>
      {content.map(({ title, featured, ...rest }, index) => (
        <AccordionItem key={`item-${title}-${index}`}>
          <AccordionButton>
            <Box flex={1} textAlign="left">
              <Heading
                as="h2"
                fontSize="md"
                my={4}
                textAlign="left"
                display="inline-block"
              >
                {title}
              </Heading>
              <Wrap>
                {featured && (
                  <Box my="auto">
                    {...featured ? renderFactoryComponents(featured) : []}
                  </Box>
                )}
                <Box my="auto" ml={featured ? -1 : 0}>
                  ...
                </Box>
              </Wrap>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>{...renderFactoryComponents(rest)}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
