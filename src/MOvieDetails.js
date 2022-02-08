import * as React from "react";
import { useParams } from "react-router-dom";

export function MOvieDetails({ movielist }) {
  const { id } = useParams();
  // const movie={
  //   name: "RRR",
  //   poster:
  //     "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  //   rating: 8.8,
  //   summary:
  //     "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  //   trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
  // };
  const movie = movielist[id];
  return (
    <div>
      <iframe
        width="100%"
        height="640"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movies-details">
        <div class="title">
          <h4 className="moviename">{movie.name}</h4>
          <h4 className="rating">
            <i class="fa fa-star rate fa-2x" aria-hidden="true"></i> {movie.rating}/10
          </h4>
        </div>
        <p className="summary">
          <b>Summary: </b>
          {movie.summary}
        </p>
      </div>
    </div>
  );
}
