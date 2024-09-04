import * as runtime from "react/jsx-runtime";
import { basecomponents } from "./base-mdx";
import { Callout } from "./callout";
import { FadeText } from "./fade-text";

const sharedComponents = {
  // Add your base components here
  ...basecomponents,
  // Add your custom components here
  Callout,
  FadeText,
};

// parse the Velite generated MDX code into a React component function
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
}

// MDXContent component
export const MDXContent = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={sharedComponents} />;
};
