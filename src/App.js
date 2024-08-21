import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
    const [books,setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updateBook = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }
            return book;
        })
        setBooks(updateBook);
    }
    const deleteBookById = (id) => {
        const updateBook = books.filter((book)=>{
            return book.id !== id;
        })

        setBooks(updateBook);
    };

    const createBook = (title) => {
        const updateBook = [...books,
            {id: Math.round(Math.random()*9999), 
                title
            }
        ];

        setBooks(updateBook);
    }
    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onSubmit={createBook}/>
        </div>
    )
}

export default App;