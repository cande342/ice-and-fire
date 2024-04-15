'use client'
import Image from 'next/image';
import { useState } from 'react';

interface ImageState {
  isVisible: boolean; // Interfaz para definir la forma del estado de la imagen
}

const PlaceGallery = () => {
  // Estado inicial de la visibilidad de las imágenes
  const initialImageStates: ImageState[] = [
    { isVisible: false },
    { isVisible: false },
    { isVisible: false },
    { isVisible: false },
  ];
  // Estado actual de la visibilidad de las imágenes
  const [imageStates, setImageStates] = useState<ImageState[]>(initialImageStates);

  // Función para manejar el evento de entrada del ratón en una imagen
  const handleMouseEnter = (index: number) => {
    setImageStates(prevStates => {
      const updatedStates = [...prevStates];
      updatedStates[index].isVisible = true; // Marca la imagen como visible
      return updatedStates;
    });
  };

  // Función para manejar el evento de salida del ratón de una imagen
  const handleMouseLeave = (index: number) => {
    setImageStates(prevStates => {
      const updatedStates = [...prevStates];
      updatedStates[index].isVisible = false; // Marca la imagen como no visible
      return updatedStates;
    });
  };

  // Función para manejar el evento de clic en una imagen (no hace nada en este caso)
  const handleClick = (index: number) => {
    // No necesitamos actualizar el estado cuando se hace clic
  };

  // Renderizado de la galería de imágenes
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
            {/* La imagen con su respectiva visibilidad */}
            <Image
              src={`/place-galery/image${index + 1}.jpg`}
              alt={`Imagen ${index + 1}`}
              width={500}
              height={500}
              className="rounded-full"
              layout='responsive'
              style={{
                opacity: state.isVisible ? 0.5 : 1, // Cambia la opacidad dependiendo de la visibilidad
                transition: 'opacity 0.5s ease', // Efecto de transición para la opacidad
              }}
            />
            {/* Overlay con el título de la imagen si es visible */}
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

