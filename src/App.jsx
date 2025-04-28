import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";


function App() {


  const[movieName, setMovieName] = useState("");

  const[movie, setMovie] = useState(null);


  const searchMovie=()=>{
   
    fetch(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${movieName}`)

      .then((response) => response.json())

      .then((data)=>{

        if (data.Type=="movie") 
          {
          setMovie(data);
        
        }
        else
        {
          setMovie("Movie not found");
        }
      })
      .catch((error)=>
        {
        console.log(error);
      });

  };

  return(
    <>
      <div
        style={{
          minHeight: "100vh",
          padding: "20px",
          fontFamily: "Nunito, serif",
        }}className="maindiv"
      >
        <div
          style={{height:"920px", width: "650px", padding: "20px",  }}
          className="form rounded bg-light"
        >
          <div className="container mt-3">

            <h1>Movie Search App</h1>

            <p>Find your desired movies in the blink of an eye!!</p>

          
            <div
              style={{ height: "100px" }}
              className="rounded bg-light text-center text-light p-3 mt-3"
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  style={{ width: "400px" }}
                  value={movieName}
                  onChange={(e) => setMovieName(e.target.value)}
                  id="outlined-basic"
                  label="Search Your Movie"
                  variant="outlined"
                  placeholder="Enter your movie"
                />
                <Button variant="contained" onClick={searchMovie}>
                  Search
                </Button>
              </div>
            </div>
          
            {movie&&(
              <div
                className="mt-4 text-light "
                style={{marginTop:"20px",fontSize:"18px" }}
              >
                <h2 style={{color:"darkblue"}}>{movie.Title}</h2>
                <img
                  src={movie.Poster} alt=""
                  width="150px"
                  style={{ marginTop: "10px" }}
                />
                <p className="mt-3">Released: {movie.Released}</p>

                <p>Director: {movie.Director}</p>



                <p>Writer: {movie.Writer}</p>

                <p>Actors: {movie.Actors}</p>

                <p>Language: {movie.Language}</p>

                <p>Country:{movie.Country}</p>


                <p>Awards: {movie.Awards}</p>

                <p>Rating: {movie.imdbRating}</p>
                
              </div>
            )}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
