import React from "react";

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
        <h3 className="text-h3 font-bold">{title}</h3>
      </div>
      <p className="mt-4">{description}</p>
      <button
        className="mt-4 px-6 py-2 bg-aquamarine text-white rounded-lg hover:bg-viridian focus:outline-none"
        onClick={onLinkClick}
        type="button"
      >
        {linkText}
      </button>
    </div>
  );
};

export default InfoCard;
