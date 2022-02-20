import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

export function EditMovie() {
  const { id } = useParams();
  //  const movie = movielist[id];

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setMovie(data));
  }, []);

  return (
    <div>{movie ? <EditMovieForm movie={movie} /> : <h1>Loading...</h1>}</div>
  );
}

const EditMovieForm = ({ movie }) => {
  const editmovieValidationSchema = yup.object({
    name: yup.string().required("why not fill name"),
    poster: yup
      .string()
      .required("why not fill the poster")
      .min(4, "Need a longer poster"),
    summary: yup
      .string()
      .required("why not fill the summary")
      .min(20, "Need a longer summary"),
    rating: yup.number().min(0).max(10),
    trailer: yup
      .string()
      .required("why not fill the poster")
      .min(4, "Need a longer trailer"),
  });

  // const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [summary, setSummary] = useState(movie.summary);
  // const [rating, setRating] = useState(movie.rating);
  // const [trailer,setTrailer]=useState(movie.trailer);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      summary: movie.summary,
      rating: movie.rating,
      trailer: movie.trailer,
    },
    validationSchema: editmovieValidationSchema,
    onSubmit: (updateMovie) => editMovie(updateMovie),
  });
  const editMovie = (updateMovie) => {
    // 1.method must be PUT & Pass id
    // 2.body-JSON data
    // 3.header-JSON data
    // After PUT complete - movie to /movies
    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/Movies"));
  };

  return (
    <div className="container">
      <h4 className="text-center">Edit a Movie</h4>
      <form onSubmit={formik.handleSubmit} className="inputs">
        <TextField
          value={formik.values.name}
          id="name"
          name="name"
          label="Movie Name"
          variant="outlined"
          error={formik.touched.name && formik.errors.name}
          helperText={
            formik.touched.name && formik.errors.name ? formik.errors.name : ""
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextField
          value={formik.values.poster}
          id="poster"
          name="poster"
          label="Poster Link"
          variant="outlined"
          error={formik.touched.poster && formik.errors.poster}
          helperText={
            formik.touched.poster && formik.errors.poster
              ? formik.errors.poster
              : ""
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          value={formik.values.summary}
          id="summary"
          name="summary"
          label="Summary"
          variant="outlined"
          error={formik.touched.summary && formik.errors.summary}
          helperText={
            formik.touched.summary && formik.errors.summary
              ? formik.errors.summary
              : ""
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          value={formik.values.rating}
          id="rating"
          name="rating"
          label="Rating"
          variant="outlined"
          error={formik.touched.rating && formik.errors.rating}
          helperText={
            formik.touched.rating && formik.errors.rating
              ? formik.errors.rating
              : ""
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          value={formik.values.trailer}
          id="trailer"
          name="trailer"
          label="Trailer"
          variant="outlined"
          error={formik.touched.trailer && formik.errors.trailer}
          helperText={
            formik.touched.trailer && formik.errors.trailer
              ? formik.errors.trailer
              : ""
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Button variant="contained" color="success" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};
