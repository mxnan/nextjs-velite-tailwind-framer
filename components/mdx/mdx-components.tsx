import * as runtime from "react/jsx-runtime";
import { basecomponents } from "./base-mdx"; // import for base components
//// some custom components
import { Callout } from "./callout";
import { FadeText } from "../../showcase/_components/fade-text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BounceLoader from "../ui/bounce-loader";
import GithubStar from "@/showcase/demo/buttons/hover-reveal";
////////////////////////////////
//// using dynamic imports here
import dynamic from "next/dynamic";

const MdxCard = dynamic(() => import("./mdx-card").then((mod) => mod.MdxCard), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full my-6 bg-secondary rounded-lg flex items-center justify-center ">
      <BounceLoader />
    </div>
  ),
});
const CollapsibleCodeBlock = dynamic(
  () =>
    import("./collapsible-codeblock").then((mod) => mod.CollapsibleCodeBlock),
  {
    ssr: false,
  }
);
const ComponentPreview = dynamic(
  () => import("./component-preview").then((mod) => mod.ComponentPreview),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-80 w-full my-6 bg-secondary rounded-lg flex items-center justify-center ">
        <BounceLoader />
      </div>
    ),
  }
);
////////////////////////////////
const sharedComponents = {
  // Add your base components here
  ...basecomponents,
  // Add your custom components here
  Callout,
  FadeText,
  GithubStar,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ComponentPreview,
  CollapsibleCodeBlock,
  MdxCard,
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
  return <section className="w-full h-full relative"><Component  components={sharedComponents} />
    </section>;
};
