function BookShow({book, onDelete}){
    const handleDeleteClick = () => {
        onDelete(book.id)
    }
    return (
        <div className="book-show" >
            {book.title}
            <div className="actions">
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow;