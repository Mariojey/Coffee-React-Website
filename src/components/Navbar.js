import React from "react"
import '../App.css'

function Navbar(props){
    return(

        <div className="navbar--container">
            <div className="nav--logo">
                <img src={props.logoCoffee} alt="Logo" />
                <p>Coffee</p>
            </div>
            <nav className="nav--content">
                <ul className="nav--list">
                    <li className="nav--item">
                        <a href="#" className="nav--link">{props.home}</a>
                    </li>
                    <li className="nav--item">
                        <a href="#sectionOrigin" className="nav--link">{props.origin}</a>
                    </li>
                    <li className="nav--item">
                        <a href="#" className="nav--link">{props.cultivating}</a>
                    </li>
                    <li className="nav--item">
                        <a href="#" className="nav--link">{props.types}</a>
                    </li>
                </ul>
            </nav>
        </div>

    );
}
export default Navbar;
