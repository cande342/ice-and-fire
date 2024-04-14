import BookCards from "./ui/components/books-cards";
import ImageGallery from "./ui/components/image-galery";
import PlaceGallery from "./ui/components/place-galery";
import { Playfair_Display, Lora } from 'next/font/google'

const playfair = Playfair_Display({ 
    weight:['500'],
    subsets: ['latin']})

const lora = Lora({
  weight:['400'],
  subsets: ['latin']
}

)


export default function Home() {
  return (
      <main className="pb-16"> {/* Agregamos un padding bottom para que haya espacio al final de la página */}
        

        <div className="text-3xl font-semibold text-center"> <p className={lora.className}>A song of Ice and Fire  </p></div>
        <div className="container mx-auto py-8 p-0">
          <ImageGallery />
        </div>
        <div className="text-center w-1/3 mx-auto mt-4 mb-10 word-spacing text-gray-300 text-l tracking-wide leading-loos"> {/* Ajustamos el margin top a mt-16 */}
          <p className={playfair.className} >
            Aōhe nābēbagon īlvykātās jemagon se dracarys.
          </p>
        </div>
        <div className="max-w-3xl mx-auto px-5 mt-16 text-center"> {/* Ajustamos el margin top a mt-16 */}
          <p>
            Canción de Hielo y Fuego es una saga épica que sigue las luchas por el poder en el continente de Westeros
            , mientras una antigua amenaza, los Caminantes Blancos, resurge en el norte. Con giros sorprendentes y personajes complejos, la serie explora temas de política, honor y traición en un mundo lleno de magia y peligros. La adaptación televisiva, 
            Juego de Tronos, llevó la saga a nuevas alturas de popularidad con su intrincada trama y producción de alta calidad.
          </p>
        </div>
        <div className="mt-16 text-center"> {/* Ajustamos el margin top a mt-16 */}
          <PlaceGallery/>
        </div>
        <div className="mt-16 text-center">
          <p className="mb-10"> Número de novelas y cómo leerlas: </p>
          <BookCards/>
          <div className="mt-8 text-center">
              <a
                href="https://www.max.com/ar/es/shows/game-of-thrones/4f6b4985-2dc9-4ab6-ac79-d60f0860b0ac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-900 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Ver la serie en HBO
              </a>
            </div>
        </div>
      </main>

  );
}
