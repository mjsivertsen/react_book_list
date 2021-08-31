import axios from "axios";
import { REGEX_BACKSLASH } from "picomatch/lib/constants";
import React, { useEffect, useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    console.log("useEffect called");
    getBooks();
  }, []);
  
  const getBooks = async () => {
    try {
      let res = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5");
    console.log(res.data.data);
    setBooks(res.data.data);
  } catch (err) {
    alert("error occured getting books");
    console.log(err);
  }
  };

  const renderBooks = () => {
    if(books.length == 0) {
      return <p> No Books To Show </p>;
    }

    return books.map((book) => {
      return (
        <div style={styles.container} key={book.isbn}>
          <em><h1>{book.title}</h1></em>
          <h2>{`By ${book.author}`}</h2>
          <img style={{height:"200px"}} src={book.image} />
          <p style={{size:"3px"}}>{book.description}</p>
          <h5>{`Genre: ${book.genre}`}</h5>
          <h6> {`Publisher: ${book.publisher}`} </h6>
          <h6> {`Published: ${book.published}`}</h6>
          <h6>{`ISBN: ${book.isbn}`}</h6>
        </div>
      )
    })

  }

  return (
    <div> 
     <u><h1>REACT BOOK LIST</h1></u>
      
      {renderBooks()}
      </div>
    
  );
};

const styles = {
container: {
  maxWidth: "800px",
  padding: "22px",
  margin: "22px",
  boxShadow: "rgba(0, 0, 0, .6) 0px 6px 18px",
}

}

export default App;
