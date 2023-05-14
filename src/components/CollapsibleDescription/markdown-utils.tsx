import { ReactMarkdownProps } from "react-markdown/lib/complex-types";

import { ListItem, UnorderedList, Text, Link } from "@chakra-ui/react";

const COMPONENT_MAP = new Map<string, React.ComponentType>([
  ["p", Text],
  ["i", Text],
  ["b", Text],
  ["ul", UnorderedList],
  ["li", ListItem],
  ["a", Link],
]);

function DynamicallyEquivalentComponent({
  node,
  children,
}: ReactMarkdownProps) {
  const Component = COMPONENT_MAP.get(node.tagName) ?? Text;
  return <Component>{children}</Component>;
}

function withPropsDynamicallyEquivalentComponent({
  ...props
}): React.ElementType {
  const PropsWrappedComponent = ({ node, children }: ReactMarkdownProps) => {
    const Component = COMPONENT_MAP.get(node.tagName) ?? Text;
    return <Component {...props}>{children}</Component>;
  };
  return PropsWrappedComponent;
}

export const HTML_TO_CHAKRA_COMPONENTS_MAP = {
  p: DynamicallyEquivalentComponent,
  ul: DynamicallyEquivalentComponent,
  li: DynamicallyEquivalentComponent,
  strong: withPropsDynamicallyEquivalentComponent({
    as: "b",
  }),
  em: withPropsDynamicallyEquivalentComponent({ as: "i" }),
};
