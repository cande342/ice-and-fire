'use client'
import Image from 'next/image';
import { useState } from 'react';

interface ImageState {
  isVisible: boolean;
}

const PlaceGallery = () => {
  const initialImageStates: ImageState[] = [
    { isVisible: false },
    { isVisible: false },
    { isVisible: false },
    { isVisible: false },
  ];
  const [imageStates, setImageStates] = useState<ImageState[]>(initialImageStates);

  const handleMouseEnter = (index: number) => {
    setImageStates(prevStates => {
      const updatedStates = [...prevStates];
      updatedStates[index].isVisible = true;
      return updatedStates;
    });
  };

  const handleMouseLeave = (index: number) => {
    setImageStates(prevStates => {
      const updatedStates = [...prevStates];
      updatedStates[index].isVisible = false;
      return updatedStates;
    });
  };

  const handleClick = (index: number) => {
    // No necesitamos actualizar el estado cuando se hace clic
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
      {imageStates.map((state, index) => (
        <div key={index} className="w-full md:w-auto">
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleClick(index)}
            className="relative rounded-full overflow-hidden"
          >
            <Image
              src={`/place-galery/image${index + 1}.jpg`}
              alt={`Imagen ${index + 1}`}
              width={500}
              height={500}
              className="rounded-full"
              layout='responsive'
              style={{
                opacity: state.isVisible ? 0.5 : 1,
                transition: 'opacity 0.5s ease',
              }}
            />
            {state.isVisible && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400 p-2">
                  {index === 0 && "Kinglanding, The Capital"}
                  {index === 1 && "Daenerys and Drogon, a Queen and her Son"}
                  {index === 2 && "Ghost, the direwolf"}
                  {index === 3 && "The Iron Throne"}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceGallery;
