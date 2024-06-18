import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="navlogo">
          <a href="/"><h1>MovChoice</h1></a>
        </div>
        <ul className="navlink">
          <Link to="/"><li>Home</li></Link>
        </ul>
      </div>
      
    </>
  );
};
export default Navbar;
