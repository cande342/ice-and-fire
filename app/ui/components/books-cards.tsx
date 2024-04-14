import books, { Book }  from "@/app/lib/bookData";


const BookCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {books.map((book: Book) => (
        <div key={book.id} className="bg-transparent p-4 rounded-lg border border-gray-300 max-w-sm">
          <h2 className="text-lg text-gray-700 font-semibold mb-2">{book.title}</h2>
          <div className="bg-transparent">
            <p className="text-gray-400">{book.synopsis}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCards;