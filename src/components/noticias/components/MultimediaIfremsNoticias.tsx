import React from "react";

interface MultimediaIframesProps {
  iframes: {
    id: number;
    iframeUrl: string;
    iframeAlt: string;
    iframedescription: string;
  }[];
}

export const MultimediaIfremsNoticias: React.FC<MultimediaIframesProps> = ({
  iframes,
}) => {
  return (
    <div data-aos="fade-up" className="mt-14 w-full flex flex-col items-center">
      {iframes.map((iframe) => {
        // Detect the type of iframe
        const isGoogleMaps = iframe.iframeUrl.includes("google.com/maps");
        const isYouTube = iframe.iframeUrl.includes("youtube.com/watch");

        // Convert YouTube URL to embed URL
        const embedUrl = isYouTube
          ? iframe.iframeUrl.replace("watch?v=", "embed/")
          : iframe.iframeUrl;

        return (
          <div key={iframe.id} className="relative pb-[56.25%] w-full h-0 mb-6">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={isGoogleMaps ? iframe.iframeUrl : embedUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={iframe.iframeAlt}
            ></iframe>
            <p>{iframe.iframedescription}</p>
          </div>
        );
      })}
    </div>
  );
};
