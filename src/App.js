import "./App.css";
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Movieslist } from "./Movieslist";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Addcolor } from "./Addcolor";
import { green, red } from "@mui/material/colors";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import IconButton from '@mui/material/IconButton';
import { Navbar } from "./Navbar";

export default function App() {
  return (
    <div className="App">
    
      <Router>
      {Navbar()}
        <Switch>
          <Route path="/" exact><h1 className="home">sample application</h1></Route>
          <Route path="/flims"><Redirect to="/Movies"></Redirect></Route>
          <Route path="/Movies" component={Movies} exact></Route>
          <Route path="/Color_game" exact component={Addcolor}></Route>
          <Route path="/tic_tac_tce" exact component={TicTacToe}></Route>
          <Route path="/about" exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

function Movies() {
  var Initial_movies = [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7.0,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster: "https://www.sify.com/uploads/Jai_bhim_2_vkgnOcidibacj.jpeg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "The Avengers",
      rating: 8.0,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8.0,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8.0,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    },
  ];
  const [movielist, setMovieList] = useState(Initial_movies);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div>
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

          <Button
            variant="contained"
            onClick={() => {
              const newMovie = {
                name: name,
                poster: poster,
                rating: rating,
                summary: summary,
              };
              setMovieList([...movielist, newMovie]);
            }}
          >
            Add Movie
          </Button>
        </div>
      </div>
      <div className="lists">
        {movielist.map(({poster,name,summary,rating},index) => (
          <Movieslist
            key={index}
            poster={poster}
            moviename={name}
            summary={summary}
            Rating={rating}
          />
        ))}
      </div>
    </div>
  );
}

function TicTacToe(){
  const [board,setBoard]=useState(
    [ null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
    );
  const decideWinner=(board)=>{
      const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        
      ];

      for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];

        if(board[a]!==null && board[a]===board[b] && board[b]===board[c]){
          return board[a];
        }
      }
      return null;
  };
 const Winner= decideWinner(board);
  const [isXturn,setIsXTurn]=useState(true);
  const handleClick=(index)=>{
    if(Winner===null && board[index]===null){
    const Boradcopy=[...board];
    Boradcopy[index]=isXturn ? "X":"O";
    setBoard(Boradcopy);
    setIsXTurn(!isXturn);
  }
};

    const{width,height}=useWindowSize();
 
  return(
    <div className="board">
    <div className="box-group">
     {Winner ? <Confetti width={width} height={height} />:" " }
       {board.map((val,index)=><GameBox val={val} onPlayerClick={()=>handleClick(index)}/>)}
    </div>
   {Winner?alert(`Winner is: ${Winner}`): " "}
   <h2>Winner is: {Winner}</h2>
    <IconButton color="primary" onClick={()=>setBoard([null,null,null,null,null,null,null,null,null])}>
    <RestartAltIcon />
    </IconButton>
    </div>
  );
}

function GameBox({val,onPlayerClick}){
  // const value="X";
  // const [val,setVal]=useState(null);
  const style={
    color:val==="X"?"green":"red",
  }
  return (
  <div
  onClick={()=>onPlayerClick()} 
  style={style} 
  className="game-box">{val}
  </div>); 
}
