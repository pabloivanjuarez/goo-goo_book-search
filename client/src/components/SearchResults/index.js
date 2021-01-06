import React from "react";
import ResultCard from "../ResultCard";
import "./style.css";

function SearchResults(props) {
    return (
        <div className="results-container">
            {props.book.map(book => {
                return (
                    <ResultCard
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://i.imgur.com/QPjhZBF.jpg"}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.previewLink}
                    handleSave={props.handleSave}
                    />
                )
            })}
        </div>
    )
};

export default SearchResults;