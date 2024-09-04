import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
function App() {
    const [books,setBooks] = useState([]);

    const fetchBook = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    }

    useEffect(()=>{
        fetchBook();
    },[]);

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        });

        const updateBook = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data};
            }
            return book;
        })
        setBooks(updateBook);
    }
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updateBook = books.filter((book)=>{
            return book.id !== id;
        })

        setBooks(updateBook);
    };

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title
        });
        const updateBook = [...books,
           response.data
        ];

        setBooks(updateBook);

        // const updateBook = [...books,
        //     {id: Math.round(Math.random()*9999), 
        //         title
        //     }
        // ];

        // setBooks(updateBook);
    }
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onSubmit={createBook}/>
        </div>
    )
}

export default App;