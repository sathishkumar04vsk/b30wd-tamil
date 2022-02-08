import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export function AddMovie({ movielist, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer,setTrailer]=useState("");
  const history = useHistory();
  return <div className="container">
    <h4 className="text-center">Add a New Movie</h4>
    <div className="inputs">
      <TextField
        id="outlined-basic"
        label="Movie Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Poster Link"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)} />

      <Button
        variant="contained"
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
          };
          setMovieList([...movielist, newMovie]);
          history.push("/Movies")
        }}
      >
        Add Movie
      </Button>
    </div>
  </div>;
}
