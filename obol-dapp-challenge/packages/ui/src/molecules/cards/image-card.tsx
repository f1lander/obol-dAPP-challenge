import React from "react";
import Typography from "../../atoms/typography";

interface ImageCardProps {
  title: string;
  description?: string;
  // Assuming there will be a prop for the image URL or any other image-related data
  imageUrl: string;
  children?: React.ReactNode;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  imageUrl,
  children,
}) => {
  return (
    <div className="bg-bg-2  rounded-lg p-6 text-white max-w-lg">
      <div
        className="h-60 rounded-lg"
        style={{
          backgroundImage: `url(${imageUrl}), linear-gradient(90deg, #32DDD0 0%, #0676E4 100%)`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="flex flex-col items-center align-center">
        <Typography className="mt-4 font-semi-bold" variant="h4">
          {title}
        </Typography>
        {description ? (
          <Typography className="mt-4 text-[#9CC2C9]" variant="body">
            {description}
          </Typography>
        ) : null}
        {children}
      </div>
    </div>
  );
};

export default ImageCard;
