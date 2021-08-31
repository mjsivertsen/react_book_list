import React, {useState} from "react";


const BookForm = (props) => {
  const [bookTitle, setBookTitle] = useState(
    props.book ? props.book.title: ""
  );
  const [bookAuthor, setBookAuthor] = useState(
    props.book ? props.book.author : ""
  );
  const [bookImage, setBookImage] = useState(
    props.book ? props.book.image : ""
  );
  const [bookDescription, setBookDescription] = useState(
    props.book ? props.book.description : ""
  );
  const [bookGenre, setBookGenre] = useState(
    props.book ? props.book.genre : ""
  );
  const [bookPublisher, setBookPublisher] = useState(
    props.book ? props.book.publisher : ""
  );
  const [bookPublished, setBookPublished] = useState(
    props.book ? props.book.published : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if(props.book){
      props.changeBook({
      title: bookTitle,
      author: bookAuthor,
      image: props.book.image,
      description: bookDescription,
      genre: bookGenre,
      publisher: bookPublisher,
      published: bookPublished,
      isbn: props.book.isbn
      });
    } else {
    props.poop({
      title: bookTitle,
      author: bookAuthor,
      image: bookImage,
      description: bookDescription,
      genre: bookGenre,
      publisher: bookPublisher,
      published: bookPublished,
      isbn: Math.random()
    });
    }
  };

  //add all the other things after because you're an ocd bword

  return (
    <div style={formStyle.formContainer}>
      <h1>{props.book ? "Change Book" : "Add a Book"}</h1>
      <form onSubmit={handleSubmit}>
        <p> Title </p>
        <input value={bookTitle} 
        style={formStyle.input}
        onChange={(e)=> {
          setBookTitle(e.target.value)}}/>

        <p> Author </p>
        <input value={bookAuthor} 
        style={formStyle.input}
        onChange={(e)=> {
          setBookAuthor(e.target.value)}}/>

        <input value={bookImage}
        type="hidden"
        defaultValue = "http:\/\/placeimg.com\/480\/640\/any"
        onChange={(e) => {
         setBookImage(e.target.value)}}/>

         {/* my image input didn't work but I tried */}
        
        <p> Description </p>
        <input style={{height:"100px", width:"300px", color: "#889BAE"}} 
        value={bookDescription} 
        onChange={(e)=> {
        setBookDescription(e.target.value)}}/>

        <p> Genre </p>
         <input value={bookGenre}
         style={formStyle.input}
         onChange={(e) => {
           setBookGenre(e.target.value)}}/>

          <p> Publisher </p> 
          <input value={bookPublisher}
          style={formStyle.input}
           onChange={(e) => {
           setBookPublisher(e.target.value)}}/>

           <p> Published (YYYY-MM-DD) </p>
           <input value={bookPublished}
           style={formStyle.input}
           onChange={(e) => {
           setBookPublished(e.target.value)}}/>


        <br />
        <button style = {{margin: "6px"}} type="submit"> Book Me </button>
        
      </form>

    </div>



  );



};

export const formStyle = {
  formContainer: {
    width: "500px",
    margin: "6px",
    padding: "6px",
    size: "6px",
    boxShadow: "rgba(0, 0, 0, .9) 2px 3px 6px"
  },
  input: {
    width: "300px",
    color: "#889BAE"
  }
}

export default BookForm