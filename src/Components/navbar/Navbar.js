// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  // const navRef = useRef();
  // const showNavbar = () => {
  // 	navRef.current.classList.toggle("responsive_nav");
  // };

  return (
    <header>
      <nav>
        <ul className="">
          <li>
            {" "}
            <a href="#aboutUs">About us</a>
          </li>
          <li>
            {" "}
            <a href="#faq">FAQ's</a>
          </li>
          <li>
            {" "}
            <a href="#">Drinks</a>
          </li>
          <li>
            {" "}
            <a href="#">Reviews</a>
          </li>
        </ul>
        <div>
          <p class="contact-top" href="/#">
            Mixcellence
          </p>
        </div>
        <div className="">
          <a className="contact-left" href="/#">
            Contact
          </a>
          {/* <button className="upbtn"> */}
        </div>

        {/* <button className="btn1">
                <p>Contact us</p>
				</button> */}
        {/* <button>
				</button> */}
      </nav>
      {/* <button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>  */}
    </header>
  );
}

export default Navbar;
