import "./App.css";
import { useState } from "react";

export default function App() {
  const Movies = [
    {
      Poster:"https://static.toiimg.com/thumb/msid-18691254,width-800,height-600,resizemode-75,imgsize-32958,pt-32,y_pad-40/18691254.jpg",
        movie_name: "THUPPAKKI",
        summary: "In a bomb blast, an army officer apprehends a sleeper agent who confesses that more bomb attacks are planned around the city; the officer impedes the subsequent blasts and devices a plan to capture the mastermind behind these attacks.",
        rating: "3.5 stars"  
    },
    {
      Poster:"https://spiderimg.amarujala.com/assets/images/2021/12/21/750x506/pushpa-the-rise_1640075397.jpeg",
      movie_name: "PUSHPA",
      summary: "Violence erupts between red sandalwood smugglers and the police charged with bringing down their organisation in the Seshachalam forests of South India.",
      rating: "2.75 stars" 
    },
    {
      Poster:"https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/78/26/8c48d1008fac11e9b12279bd2b689533_1562840678273_l_medium.jpg",
        movie_name: "MANKATHA",
        summary: "Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot.",
        rating: "2.5 stars" 
    },
    {
      Poster:"https://images.moviesanywhere.com/eebd935228b3a121b0b07c023ca5651e/92201c53-a2d7-40f9-a0c9-ae018f711cfc.jpg",
        movie_name: "HANGOVER",
        summary: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding. ... Regardless, he intends on eventually marrying her, against the advice and wishes of his friends.",
        rating: "3.0 stars" 
    },
    {
      Poster:"https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.jpg",
        movie_name: "AVENGERS ENDGAME",
        summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
        rating: "4.0 stars" 
    }
  ];

  return (
    <div className="App">
      {Movies.map((nm) => (
        <Movieslist poster={nm.Poster} moviename={nm.movie_name} summary={nm.summary} Rating={nm.rating}/>
      ))}
      
    </div>
  );
}

function Movieslist({ poster, moviename, summary,Rating}) {
  const [like,setLike]=useState(0);
  const [dislike,setDislike]=useState(0);
  return (
    <div className="constainer-sm">
      <img src={poster} alt="Poster_pic" />  
      <h1>Movie Name: {moviename}!!!</h1>
      <p className="summary"><b>Summary:</b> {summary}</p>
      <h4>Rating: {Rating}</h4>
      <div className="like-btn">
      <button onClick={() => setLike(like + 1)}><i class="fa fa-thumbs-o-up fa-2x like"></i>Like{like}</button>
      <button onClick={()=>setDislike(dislike + 1)}><i class="fa fa-thumbs-o-down fa-2x dislike"></i>Dislike{dislike}</button>
      </div>
    </div>
  );
}
