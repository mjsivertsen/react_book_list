import React, {useState} from "react";


const BookForm = (props) => {
  const [bookTitle, setBookTitle] = useState(
    props.book ? props.book.title: ""
  );
  const [bookAuthor, setBookAuthor] = useState(
    props.book ? props.book.author : ""
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    props.book({
      title: bookTitle,
      author: bookAuthor
    });
  };

  //add all the other things after because you're an ocd bword

  return (
    <div style={formStyle.formContainer}>
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <p> Book Title </p>
        <input value={bookTitle} 
        onChange={(e)=> {
          setBookTitle(e.target.value)}}/>

        <p> Book Author </p>
        <input value={bookAuthor} 
        onChange={(e)=> {
          setBookAuthor(e.target.value)}}/>

        <br />
        <button style = {{margin: "6px"}} type="submit"> Book Me </button>
        
      </form>

    </div>



  );



};

export const formStyle = {
  formContainer: {
    width: "200px",
    margin: "6px",
    padding: "6px",
    size: "6px",
    boxShadow: "rgba(0, 0, 0, .9) 2px 3px 6px"

  }
}

export default BookForm