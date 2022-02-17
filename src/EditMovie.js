import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { API } from "./global";


export function EditMovie() {
  const {id} = useParams();
  //  const movie = movielist[id];
  const [movie,setMovie]=useState(null);
  useEffect(()=>{
    fetch(`${API}/movies/${id}`,{
      method : "GET"
    })
    .then((data)=>data.json())
    .then((data)=>setMovie(data))
  },[])
 

  
  return (
    <div>
      {movie ? <EditMovieForm movie = {movie}/>: <h1>Loading...</h1>}
    </div>
  );
}

const EditMovieForm = ({movie}) =>{
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [rating, setRating] = useState(movie.rating);
  const [trailer,setTrailer]=useState(movie.trailer);
  const history = useHistory();
  return(
    <div className="container">
    <h4 className="text-center">Edit a Movie</h4>
    <div className="inputs">
      <TextField
        value={name}
        id="outlined-basic"
        label="Movie Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)} />
      <TextField
        value={poster}
        id="outlined-basic"
        label="Poster Link"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)} />
      <TextField
        value={summary}
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)} />
      <TextField
        value={rating}
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)} />
      <TextField
        value={trailer}
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)} />

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          const updateMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
          };

          fetch(`${API}/movies/${movie.id}`,{
            method : "PUT",
            body : JSON.stringify(updateMovie),
            headers : {
              "Content-Type":"application/json"
            }
          }).then(()=> history.push("/Movies"));
          // const CopyMovielist = [...movie]
          // CopyMovielist[id]=updateMovie;
          // setMovie(CopyMovielist);

          // setMovieList([...movielist, newMovie]);
          
        }}
      >
        Save
      </Button>
    </div>
  </div>
  );
}

// 1.method must be PUT & Pass id
// 2.body-JSON data
// 3.header-JSON data
// After PUT complete - movie to /movies

