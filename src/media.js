import React, { useEffect } from "react";

const InstagramVideoEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const videos = [
    "https://www.instagram.com/reel/DFfyJ_HPug4/",
    "https://www.instagram.com/reel/DFkPUPJIC7h/",
    "https://www.instagram.com/reel/DFiHngyTKjX/",
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-white text-5xl font-bold mb-12 text-center">KAPRICIOUS ON MEDIA</h1>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {videos.map((video, index) => (
          <blockquote
            key={index}
            className="instagram-media w-80"
            data-instgrm-permalink={video}
            data-instgrm-version="14"
          ></blockquote>
        ))}
      </div>
    </div>
  );
};

export default InstagramVideoEmbed;