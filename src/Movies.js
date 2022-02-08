import * as React from "react";
import { Movieslist } from "./Movieslist";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export function Movies({movielist,setMovieList}) {

  
  return (
    <div className="movie-container">
      
      <div className="lists">
        {movielist.map(({ poster, name, summary, rating }, index) => (
          <Movieslist
            key={index}
            poster={poster}
            moviename={name}
            summary={summary}
            Rating={rating}
            deleteButton={
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => {
                  const copyMovielist = [...movielist];
                  copyMovielist.splice(index, 1);
                  setMovieList(copyMovielist);
                }}
              >
                <DeleteIcon color="error" fontSize="inherit" />
              </IconButton>
            }
            id={index}
          />
        ))}
      </div>
    </div>
  );
}

