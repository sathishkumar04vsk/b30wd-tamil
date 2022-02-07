import { useState } from "react";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function Movieslist({ poster, moviename, summary, Rating }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const style = {
    color: Rating > 8.5 ? "green" : "brown"
  };
  const [show, setShow] = useState(true);

  return (
  
      <Card className="movies">
        <img src={poster} alt="Poster_pic" />
        <CardContent>
        <div className="title">
          <h4 className="moviename">{moviename}</h4>
          <IconButton value="android" onClick={() => setShow(!show)}>{show?<ExpandLessIcon/>:<ExpandMoreIcon/>}</IconButton>
          <h4 style={style} className="rating"><i class="fa fa-star rate fa-2x" aria-hidden="true"></i>  {Rating}/10</h4>
        </div>  
      
        {show ? <p className="summary"><b>Summary: </b>{summary}</p> : null}
        <CardActions className="like-btn">
          <IconButton aria-label="like thumb" color="primary" onClick={() => setLike(like + 1)}>
            <Badge badgeContent={like} color="primary">
              <i class="fa fa-thumbs-o-up  like"></i>
            </Badge>
          </IconButton>
          <IconButton aria-label="dis-like thumb" onClick={() => setDislike(dislike + 1)}>
            <Badge badgeContent={dislike} color="error">
            <i class="fa fa-thumbs-o-down  dislike"></i>
            </Badge>
          </IconButton>
        </CardActions>
        </CardContent>
      </Card>
    
  );
}
