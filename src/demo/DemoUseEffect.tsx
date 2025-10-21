import { useEffect, useState } from "react";
export default function DemoUseEffect() {
  const [books, setbook] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        setbook(data);
        setloading(false);
      });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <h3>Libraby</h3>
        {loading ? (
          <div>...loading</div>
        ) : (
          <ul className="list-group">
            {books.map((book) => (
              <li key={book.id} className="list-group-item">
                {book.userId}-{book.id}-{book.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
