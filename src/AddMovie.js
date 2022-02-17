import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { API } from "./global";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();

  const Addmovies = () =>{
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    // 1.method must be POST
    // 2.body-JSON data
    // 3.header-JSON data
    // After POST is complete-move to/movies
      fetch(`${API}/movies`, {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(()=>history.push("/Movies"));
    
    // setMovieList([...movielist, newMovie]);
  };

  return (
    <div className="container">
      <h4 className="text-center">Add a New Movie</h4>
      <div className="inputs">
        <TextField
          id="outlined-basic"
          label="Movie Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Poster Link"
          variant="outlined"
          onChange={(event) => setPoster(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          onChange={(event) => setSummary(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          onChange={(event) => setRating(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Trailer"
          variant="outlined"
          onChange={(event) => setTrailer(event.target.value)}
        />

        <Button
          variant="contained"
          onClick={() => Addmovies()}
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
