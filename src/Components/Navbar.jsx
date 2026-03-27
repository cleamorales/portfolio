import "./Styles/Navbar.css";


function Navbar() {
  return (
  <nav className="navbar">
    <div className="nav-links">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#projects">PROJECTS</a>
      <a href="#contact">CONTACT</a>
    
    </div>
    
    <a 
      className="resume-btn" 
      href="https://drive.google.com/file/d/1ubjB1qnMc9xOHmQyQJAAi9Sm6EjNL5PN/view?usp=sharing">RESUME
    </a>
  </nav>

  );
}


export default Navbar;


