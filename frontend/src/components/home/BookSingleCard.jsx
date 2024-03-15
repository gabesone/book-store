import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BookModel from "./BookModel";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-lg"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>

      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          {/* <button className="bg-color-1 text-n-1 px-4 py-2 rounded-full"> */}
          <BsInfoCircle className="text-green-800 text-2xl hover:text-black" />
          {/* </button> */}
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          {/* <button className="bg-color-1 text-n-1 px-4 py-2 rounded-full"> */}
          <AiOutlineEdit className="text-yellow-600 text-2xl hover:text-black" />
          {/* </button> */}
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          {/* <button className="bg-color-1 text-n-1 px-4 py-2 rounded-full"> */}
          <MdOutlineDelete className="text-red-600 text-2xl hover:text-black" />
          {/* </button> */}
        </Link>
      </div>

      {showModal && (
        <BookModel book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
