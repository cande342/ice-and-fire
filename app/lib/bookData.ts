
export interface Book {
    id: number;
    title: string;
    synopsis: string;
  }
  
  const books: Book[] = [
    {
      id: 1,
      title: "Primer libro: Juego de Tronos",
      synopsis: "La novela arranca pocos años después de una gran revuelta que puso fin al reinado de la dinastía Targaryen, con Robert Baratheon reinando ahora en el trono de hierro de los siete reinos. En Invernalia, el lord Eddard Stark y su familia se encuentran en el centro de un nuevo conflicto que desatará todas las pasiones entre las casas. Y lo peor está por llegar, más allá del gran Muro del norte fuerzas oscuras y sobrenaturales parecen estar despertando de su letargo.",
    },
    {
      id: 2,
      title: "Segundo libro: Choque de Reyes",
      synopsis: "Una guerra civil, conocida como la Guerra de los Cinco Reyes, comienza a extenderse por todo Westeros, mientras en la otra orilla del océano la princesa Daenerys conduce a su pueblo de salvajes a través del desierto y en los páramos helados más allá del Muro un ejército implacable avanza hacia un territorio asolado por el caos.",
    },
    {
        id: 3,
        title: "Tercer libro: Tormenta de espadas",
        synopsis: "La trama prosigue tras los actos del segundo libro, en esta ocasión con las reducidas fuerzas de la Guardia de la Noche en el norte haciendo frente a la oscuridad que se cierne en el Muro, con Daenerys movilizando a sus fuerzas de las Ciudades Libres para volver a reclamar el Trono de Hierro y con varios reyes luchando en Poniente por afianzar sus coronas sin saber que las traiciones aguardan en cada nueva esquina.",
      },
      {
        id: 4,
        title: "Cuarto libro: Festín de cuervos",
        synopsis:"En esta entrega casi todo Poniente yace extenuado; seguimos los pasos de Stannis Baratheon en el Muro ayudando a la Guardia de la Noche y a su lord comandante, Jon Nieve, mientras en Desembarco del Rey la reina regente, Cersei Lannister, debe hacer frente a la huida de Tyrion y a las duras pérdidas de su familia.",
      },
      {
        id: 5,
        title: "Quinto libro: Danza de Dragones",
        synopsis: "Daenerys se empeña en erradicar la esclavitud en Meereen mientras un enano parricida, un príncipe de incógnito, un capitán implacable y un enigmático caballero acuden a la llamada de los dragones desde el otro lado del mar Angosto. En el Norte, las menguadas huestes de uno de los reyes en discordia deben hacer frente al peligro que está cada vez más cerca de traspasar el Muro.",
      },

  ];
  
export default books;
  