import { useState } from "react";
import BookCreate from "./components/BookCreate";
function App() {
    const [books,setBooks] = useState([]);

    const createBook = (title) => {
        console.log('Add Book with: ',title)
    }
    return (
        <div>
            <BookCreate onSubmit={createBook}/>
        </div>
    )
}

export default App;