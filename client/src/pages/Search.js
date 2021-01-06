import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";

function Search() {
    const [book, setBook] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchTerm({ searchTerm, value });
    };

    function handleSearch(event) {
        event.preventDefault();
        API.search(searchTerm.value)
            .then(res => {
                setBook(res.data.items)
            })
    };

    function handleSave(event) {
        event.preventDefault();
        API.save({
            title: this.title,
            author: this.author[0],
            description: this.description,
            thumbnail: this.thumbnail,
            link: this.link
        })
        .then(console.log("Book saved to collection."))
        .catch(err => console.log(err));
    };

    return (
        <div>
            <Jumbotron />
            <SearchBox handleInputChange={ handleInputChange } handleSearch={ handleSearch }/>
            <SearchResults book={ book } handleSave={ handleSave }/>
        </div>
    )
};

export default Search;