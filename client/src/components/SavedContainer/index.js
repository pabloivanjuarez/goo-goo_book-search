import React from "react";
import SavedCard from "../SavedCard";

function SavedContainer(props) {
    console.log(props.book);
    return (
        <div className="container">
            {props.book.map(book => {
                return (
                    <SavedCard 
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    author={book.author}
                    thumbnail={book.thumbnail ? book.thumbnail : "https://i.imgur.com/QPjhZBF.jpg"}
                    description={book.description}
                    link={book.link}
                    handleDelete={props.handleDelete}
                    />
                )
            })}
        </div>
    )
};

export default SavedContainer;