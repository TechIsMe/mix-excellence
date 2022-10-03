// import { Navbar, Container, Nav } from "react-bootstrap";

// import React, { useEffect, useState } from "react";

// function Navigation() {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };
//   return (
//     <div>
//       <Navbar expand="lg" className={scrolled ? "srolled" : ""}>
//         <Container>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link
//                 href="#aboutUs"
//                 className={
//                   activeLink === "aboutUs"
//                     ? "active navbar-link"
//                     : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("aboutUs")}
//               >
//                 About us
//               </Nav.Link>
//               <Nav.Link
//                 href="#skills"
//                 className={
//                   activeLink === "skills" ? "active navbar-link" : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("skills")}
//               >
//                 FQA's
//               </Nav.Link>
//               <Nav.Link
//                 href="#projects"
//                 className={
//                   activeLink === "projects"
//                     ? "active navbar-link"
//                     : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("projects")}
//               >
//                 Drinks
//               </Nav.Link>
//               <Nav.Link
//                 href="#projects"
//                 className={
//                   activeLink === "projects"
//                     ? "active navbar-link"
//                     : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("projects")}
//               >
//                 Reviews
//               </Nav.Link>
//               <button className="vvd ">
//                 <span> Mixcellence</span>
//               </button>
//             </Nav>
//             <span className="navbar-text">
//               <button className="vvd">
//                 <span> Contact</span>
//               </button>
//             </span>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Navigation;
