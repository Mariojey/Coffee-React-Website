import React from "react"
import '../App.css'

function Header() {
    return(
        <header className="header">
            <div className="header--content">
            <h3>A few words about...</h3>
            <h1>Coffee</h1>
            <h5>Wonderfull smell, amazing taste, learn more about coffee...</h5>
            <a href="#" className="scrollDown"><span></span></a>
            </div>
            <div className="header--footer">
                <p>Photo by Aphiwat chuangchoem from Pexels</p>
            </div>
        </header>
    )
}

export default Header()