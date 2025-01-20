import React from "react";
import BookCard from "./BookCard";
import { Book } from "@/types";
interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}
const BooksList = ({ title, books, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className='font-bebas-neue text-4xl text-light-100'>{title}</h2>
      <ul className="book-list">
        {books.map((book,index) => (
         <BookCard key={index} {...book}/>
        ))}
      </ul>
    </section>
  );
};

export default BooksList;
