import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books,setBooks] = useState([]);

    const fetchBook = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    }

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

    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBook
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider};
export default BooksContext;

// import BookContext, {Provider} from './....'