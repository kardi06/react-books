import { useState } from "react";

function BookCreate({onSubmit}){
    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(title);
        setTitle('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" onChange={handleChange} value={title}/>
                <button>Create!</button>
            </form>
        </div>
    )
}

export default BookCreate;