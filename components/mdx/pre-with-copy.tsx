"use client";
import React, { useState, useEffect } from "react";
import { Icons } from "../icons";
import { toast } from "sonner";

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  className?: string;
}

const Pre: React.FC<PreProps> = ({ children, className, ...props }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const extractTextContent = (child: React.ReactNode): string => {
    if (typeof child === "string") {
      return child;
    }
    if (React.isValidElement(child)) {
      if (typeof child.props.children === "string") {
        return child.props.children;
      }
      if (Array.isArray(child.props.children)) {
        return child.props.children.map(extractTextContent).join("");
      }
    }
    return "";
  };

  const copyToClipboard = () => {
    const textContent = Array.isArray(children)
      ? children.map(extractTextContent).join("")
      : extractTextContent(children);

    navigator.clipboard.writeText(textContent).then(() => setIsCopied(true));

    toast.success("Copied to clipboard");
  };

  return (
    <div className="relative group">
      <pre
        className={`mb-4 mt-6 overflow-x-auto text-sm rounded-lg border py-4 ${
          className || ""
        }`}
        {...props}
      >
        {children}
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute right-5 top-4 p-2 rounded-full z-10
         text-white  group-hover:text-white/80
         group-hover:bg-black
          transition-colors duration-500 ease-in-out"
        aria-label="Copy code"
      >
        {isCopied ? (
          <Icons.checkCheck className="w-5 h-5" />
        ) : (
          <Icons.clipboardCpoy className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default Pre;
