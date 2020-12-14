import React from 'react'
import

  function BookCard(props) {
    return (
      <div>
        {props.title}
        {props.author}
        {props.description}
        {props.thumbnail}
        {props.link}
      </div>
    )
  }

export default BookCard
