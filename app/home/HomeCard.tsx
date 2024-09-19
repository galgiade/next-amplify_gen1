import React from "react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HomeCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
  
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg  p-4 h-72 w-56 mx-auto border-2 border-gray-300 flex flex-col items-center">
      <div className="relative h-40 w-40">
        <Image
          src={imageUrl}
          alt={title}
          priority
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
