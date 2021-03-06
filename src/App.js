import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Addcolor } from "./Addcolor";
import { Navbar } from "./Navbar";
import { Movies } from "./Movies";
import { TicTacToe } from "./TicTacToe";
import { NotFound } from "./NotFound";
import { useState } from "react";
import { MOvieDetails } from "./MOvieDetails";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";

export default function App() {
  // const Initial_movies = [
  //   {
  //     id:"100",
  //     name: "RRR",
  //     poster:
  //       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  //     rating: 8.8,
  //     summary:
  //       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  //     trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
  //   },
  //   {
  //     id:"101",
  //     name: "Iron man 2",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  //     rating: 7,
  //     summary:
  //       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  //     trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  //   },
  //   {
  //     id:"102",
  //     name: "No Country for Old Men",
  //     poster:
  //       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  //     rating: 8.1,
  //     summary:
  //       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  //     trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  //   },
  //   {
  //     id:"103",
  //     name: "Jai Bhim",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  //     summary:
  //       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  //     rating: 8.8,
  //     trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
  //   },
  //   {
  //     id:"104",
  //     name: "The Avengers",
  //     rating: 8,
  //     summary:
  //       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  //     poster:
  //       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
  //   },
  //   {
  //     id:"105",
  //     name: "Interstellar",
  //     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  //     rating: 8.6,
  //     summary:
  //       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  //     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  //   },
  //   {
  //     id:"106",
  //     name: "Baahubali",
  //     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  //     rating: 8,
  //     summary:
  //       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  //     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  //   },
  //   {
  //     id:"107",
  //     name: "Ratatouille",
  //     poster:
  //       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  //     rating: 8,
  //     summary:
  //       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  //     trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
  //   },
  // ];

  const [mode, setMode] = useState("light");

  //  const [movielist, setMovieList] = useState(Initial_movies);
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ boderRadius: "0px", minHeight: "100vh" }} elevation={0}>
        <div className="App">
          <Router>
            <Navbar mode={mode} setMode={setMode} />
            <Switch>
              <Route path="/" exact>
                <h1 className="home">Sample Application</h1>
              </Route>
              <Route path="/flims">
                <Redirect to="/Movies/"></Redirect>
              </Route>
              <Route path="/Movies" exact>
                {" "}
                <Movies />
              </Route>
              <Route path="/Movies/edit/:id" exact>
                <EditMovie />
              </Route>
              <Route path="/Movies/:id" exact>
                {" "}
                <MOvieDetails />
              </Route>
              <Route path="/movie/add" exact>
                <AddMovie />
              </Route>
              <Route path="/Color_game" exact component={Addcolor}></Route>
              <Route path="/tic_tac_tce" exact component={TicTacToe}></Route>
              <Route path="/about" exact></Route>
              <Route path="**" exact>
                {" "}
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

// const Form = () => {
//   const formik = useFormik({
//     initialValues: { email: "sathish04vsk@gmail.com", password: "1491840" },
//   });
//   return (
//     <form>
//       <input
//         id="email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//         placeholder="Email"
//         type="email"
//       />
//       <br />
//       <br />
//       <input
//         id="password"
//         value={formik.values.password}
//         onChange={formik.handleChange}
//         placeholder="Password"
//         type="password"
//       />
//       <br />
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
