import React from "react";

export default function VideoFromSrc({
  src,
  title = "Video player",
  className,
}: {
  src: string;
  title?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        
        autoPlay
        muted
        loop
        title={title}
      >
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
