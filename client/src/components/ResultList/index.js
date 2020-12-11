import React from 'react'
import BookCard from '../BookCard'

function ResultList() {

  var authours = [1, 2, 3, 4]

  return (
    <div>
      {authours.map(author => (
        (<BookCard author={author} />
        )
      ))}
    </div>
  )
}

export default ResultList
