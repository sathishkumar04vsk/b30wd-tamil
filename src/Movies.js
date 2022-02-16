import * as React from "react";
import { Movieslist } from "./Movieslist";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useState } from "react";
import { API } from "./global";

export function Movies() {
  const styles={marginLeft:"auto"};
  const history = useHistory(); 
  const [movielist,setMovieList] = useState([]);

  const getMovies = ()=>{
    fetch(`${API}/movies`,{
      method: "GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs));
  }

  useEffect(()=>getMovies(),[]);

  const delectaction = (id)=>{
    fetch(`${API}/movies/${id}`,{
      method: "DELETE",
    })
    .then(()=>getMovies())
  };
  return (
    <div className="movie-container">
      
      <div className="lists">
        {movielist.map(({ poster, name, summary, rating,id }, index) => (
          <Movieslist
            key={index}
            poster={poster}
            moviename={name}
            summary={summary}
            Rating={rating}
            deleteButton={
              <IconButton
                style={styles}
                aria-label="delete"
                size="large"
                onClick={()=>delectaction(id)}
              >
                <DeleteIcon color="error" fontSize="inherit" />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="edit-button"
                size="large"
                onClick={() => history.push(`Movies/edit/${index}`)}
              >
                <EditIcon color="primary" fontSize="inherit" />
              </IconButton>
            }
            id={id}
          />
        ))}
      </div>
    </div>
  );
}

