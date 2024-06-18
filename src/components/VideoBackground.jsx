import { Link } from "react-router-dom";
import ProjectVid2 from "../assets/ProjectVid2.mp4";

const VideoBackground = () => {
  return (
    <>
      <div className="video-container">
        <video src={ProjectVid2} autoPlay loop muted className="bg-video"></video>
      </div>
      <div className="video-text">
        <h1>Welcome to MovChoice</h1>
        <p>
          <i>
            Let our AI choose a movie suitable for you based on your prefrences.
          </i>
        </p>
        <Link to="/prefrences">
          <button className="btn">Find A Movie</button>
        </Link>
      </div>
    </>
  );
};

export default VideoBackground;
