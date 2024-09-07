import React from "react";

const SpinDemo = () => {
  return (
    <section className="w-full h-72 flex items-center justify-center relative">
      <div className="absolute inset-x-1/2 inset-y-1/2 h-6 w-12 animate-spin rounded-full border-4 border-y-2 border-solid border-ring border-r-muted-foreground" />
      <div className="absolute inset-y-1/2 inset-x-1/2 h-8 w-12 animate-spin rounded-full border-4 border-y-2 border-solid border-ring border-r-muted-foreground" />
      <div className="absolute inset-y-1/2 inset-x-1/2 h-10 w-12 animate-spin rounded-full border-4 border-y-2 border-solid border-ring border-r-muted-foreground" />
      <div className="absolute inset-y-1/2 inset-x-1/2 h-12 w-12 animate-spin rounded-full border-4 border-y-2 border-solid border-ring border-r-muted-foreground" />
      <div className="absolute inset-y-1/2 inset-x-1/2 h-6 w-12 animate-spin rounded-full border-4 border-y-2 border-solid border-ring border-r-muted-foreground" />
    </section>
  );
};

export default SpinDemo;
