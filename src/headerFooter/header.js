import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./header.css";

export function Header() {
  return (
    <div className="header">
      <div className="header-logo-text">
        <Link style={{display:"flex"}} to="/">
          <div className="header-logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="header-text">
            <p>Trendy Decors</p>
          </div>
        </Link>
      </div>
      <div className="header-pages">
        <ul>
            <li><Link className={'hover-underline-animation'} to={`/`}>Home</Link></li>
            <li><Link className={'hover-underline-animation'} to={`team`}>Portfolio</Link></li>
            <li><Link className={'hover-underline-animation'}  to={`/services`}>Services</Link></li>
            <li><Link className={'hover-underline-animation'} to={`/projects`}>Projects</Link></li>
            <li><Link className={'hover-underline-animation'} to={`/blog`}>Blog</Link></li>
            <li><Link className={'hover-underline-animation'} to={`/contact`}>Contact</Link></li>
            <button className="btn transparent"><Link to={"/"}>Login</Link></button>
            <button className="btn transparent"><Link to={"/"}>SignUp</Link></button>
        </ul>
        
      </div>
    </div>
  );
}
