// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import "./index.css";
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import { createRoot } from "react-dom/client";

// const image1 = "images/book-1.jpg";
// const title1 = "The Let Them Theory";
// const author1 = "Mel Robbins";

// const image2 = "images/book-2.jpg";
// const title2 = "Sunrise on the Reaping";
// const author2 = "Suzanne Collins";

// const image3 = "images/book-3.jpg";
// const title3 = "Try Not to Laugh Challenge";
// const author3 = "Easter Bunny Press";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

const Image = ({ imagePath, altText }) => <img src={imagePath} alt={altText} />;

const Title = ({ bookTitle }) => <h2>{bookTitle}</h2>;

const Author = ({ bookAuthor }) => <h3>{bookAuthor}</h3>;

const Book = ({ imageSrc, titleOfBook, authorOfBook }) => {
  return (
    <article className="book">
      <Image imagePath={imageSrc} altText={titleOfBook} />
      <Title bookTitle={titleOfBook} />
      <Author bookAuthor={authorOfBook} />
    </article>
  );
};

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((book) => (
        <Book
          authorOfBook={book.author}
          imageSrc={book.img}
          titleOfBook={book.title}
          key={book.title}
        />
      ))}
      {/* <Book imageSrc={image1} titleOfBook={title1} authorOfBook={author1} /> */}
      {/* <Book imageSrc={image2} titleOfBook={title2} authorOfBook={author2} /> */}
      {/* <Book imageSrc={image3} titleOfBook={title3} authorOfBook={author3} /> */}
    </section>
  );
};

function App() {
  return <BookList />;
}

function Main() {
  return (
    <div>
      <App />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(<Main />);
// export default Main;
