import { Button } from "../../atoms/button";
import React from "react";
import Typography from "../../atoms/typography";

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
    <div className="bg-bg-2 rounded-lg p-6 text-white max-w-md">
      <div
        className="bg-gray-500 h-60 rounded-lg"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Typography className="mt-4 font-semi-bold" variant="h3">
        {title}
      </Typography>
      <Typography className="mt-4 text-[#9CC2C9]" variant="body">
        {description}
      </Typography>
      <Button onClick={onLinkClick} variant="primary">
        {linkText}
      </Button>
    </div>
  );
};

export default ImageCard;
