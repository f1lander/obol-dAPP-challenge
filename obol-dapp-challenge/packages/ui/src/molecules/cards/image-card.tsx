import React from "react";

interface ImageCardProps {
  title: string;
  description: string;
  linkText: string;
  onLinkClick?: () => void;
  // Assuming there will be a prop for the image URL or any other image-related data
  imageUrl: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  linkText,
  onLinkClick,
  imageUrl,
}) => {
  return (
    <div className="bg-bg-2 rounded-lg p-6 text-white">
      <div
        className="bg-gray-500 h-40 rounded-lg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <h3 className="mt-4 text-h3 font-bold">{title}</h3>
      <p className="mt-4">{description}</p>
      <button
        className="mt-4 px-6 py-2 bg-aquamarine text-white rounded-lg hover:bg-viridian focus:outline-none"
        onClick={onLinkClick}
      >
        {linkText}
      </button>
    </div>
  );
};

export default ImageCard;
