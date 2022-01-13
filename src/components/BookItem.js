import React from 'react'
import './BookItem.css'

const BookItem = ({book}) => {
    return (
        <div className='bookItem'>
            <p className='trendingNumber'>#{book.id}</p>
            <img src={book.img} alt="book-img" />
            <p className='title'>{book.title}</p >
            <p className='auther'>{book.auther}</p>
        </div>
    )
}

export default BookItem
