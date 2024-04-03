import { Button } from "../../atoms/button";
import React from "react";
import Typography from "../../atoms/typography";

interface InfoCardProps {
  title: string;
  description: string;
  linkText: string;
  onLinkClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  linkText,
  onLinkClick,
}) => {
  return (
    <div className="bg-bg-2 rounded-lg p-6 text-white">
      <div className="flex items-center space-x-2">
        <Typography className="text-2xl font-bold" variant="h3">
          {title}
        </Typography>
      </div>
      <p className="mt-4">{description}</p>
      <Button variant="primary" onClick={onLinkClick}>
        {linkText}
      </Button>
    </div>
  );
};

export default InfoCard;
