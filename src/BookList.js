import React from 'react'
import BookItem from './components/BookItem'
import './BookList.css'

function BookList({ books }) {
    return (
        <div className="bookList">
            {
                books.map((book, i) => {
                    return (
                        <div >
                            <BookItem key={i} book={book} />
                        </div>)
                })
            }
        </div>
    )
}

export default BookList
