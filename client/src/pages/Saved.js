import React, { useEffect, useState } from "react";
import SavedJumbotron from "../components/SavedJumbotron";
import SavedContainer from "../components/SavedContainer";
import API from "../utils/API";

function Saved() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        returnBooks()
    }, []);

    function returnBooks() {
        API.return().then(res => {
            setBook(res.data);
        })
            .catch(err => console.log(err));
    };

    function handleDelete(event) {
        event.preventDefault();
        API.delete(this.id)
        .then(res => returnBooks())
        .catch(err => console.log(err));
    };
   

    return (
        <div>
            <SavedJumbotron />
            <SavedContainer book={ book } handleDelete={ handleDelete } />
        </div>
    )
};

export default Saved;