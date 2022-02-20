import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [summary, setSummary] = useState("");
  // const [rating, setRating] = useState("");
  // const [trailer, setTrailer] = useState("");
  const history = useHistory();

  const Addmovies = (newMovie) => {
     
    console.log("onSubmit", newMovie)
    // const newMovie = {
      // name: name,
      // poster: poster,
      // rating: rating,
      // summary: summary,
      // trailer: trailer,
    // };
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
    }).then(() => history.push("/Movies"));

    // setMovieList([...movielist, newMovie]);
  };

  const formValidationSchema = yup.object({
    name: yup.string().required("why not fill name"),
    poster:yup.string().required("why not fill the poster").min(4,"Need a longer poster"),
    summary:yup.string().required("why not fill the summary").min(16,"Need a longer summary"),
    rating:yup.number().min(0).max(10),
    trailer:yup.string().required("why not fill the poster").min(4,"Need a longer trailer"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      summary: "",
      rating: "",
      trailer: "",
    },
     validationSchema: formValidationSchema,
    onSubmit: (newMovie) => {
      Addmovies(newMovie)
    },
  });

  return (
    <div className="container">
      <h4 className="text-center">Add a New Movie</h4>
      <form onSubmit={formik.handleSubmit} className="inputs">
        <TextField
          id="name"
          name="name"
          label="Movie Name"
          variant="outlined"
          error={formik.touched.name && formik.errors.name}
          helperText=  {formik.touched.name && formik.errors.name ?formik.errors.name:""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      
        <TextField
          id="poster"
          name="poster"
          label="Poster Link"
          variant="outlined"
          error={formik.touched.poster && formik.errors.poster}
          helperText= {formik.touched.poster && formik.errors.poster ?formik.errors.poster:""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.poster}
        />
        
        <TextField
          id="summary"
          name="summary"
          label="Summary"
          variant="outlined"
          error={formik.touched.summary && formik.errors.summary}
          helperText= {formik.touched.summary && formik.errors.summary ?formik.errors.summary:""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.summary}
        />
        
        <TextField
          id="rating"
          name="rating"
          label="Rating"
          variant="outlined"
          error={formik.touched.rating && formik.errors.rating}
          helperText= {formik.touched.rating && formik.errors.rating ?formik.errors.rating:""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rating}
        />
        
        <TextField
          id="trailer"
          name="trailer"
          label="Trailer"
          variant="outlined"
          error={formik.touched.trailer  && formik.errors.trailer}
          helperText= {formik.touched.trailer && formik.errors.trailer ?formik.errors.trailer:""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.trailer}
        />
        
        <Button type="submit" variant="contained"  >
          Add Movie
        </Button>
      </form>
    </div>
  );
}
