'use client'
import Image from 'next/image';

const ImageGallery: React.FC = () => {
  const handleMouseOver = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.style.transform = 'scale(1.3)';
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.style.transform = 'scale(1)';
  };

  return (
    <div className="flex justify-between w-full">
        {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index}>
      <Image
            src={`/main-photos/${index}.jpg`} // Ruta actualizada
            alt={`Image ${index}`}
            width={150} 
            height={200} 
            priority={true} //Esto es para que la imagen se cargue rapido.
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
            </div>
        ))}
    </div>
  );
};

export default ImageGallery;
