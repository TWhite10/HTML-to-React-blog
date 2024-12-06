import React from "react";

function Nav() {
    return (
        <div>
            <header>
                <h1> Style Street </h1>
                <h2>Fashion Daily</h2>

                <nav className="nav-bar" aria-label="Main Navigation" role="navigation" >
                    <ul>
                        <li><a href="...">Home</a></li>
                        <li><a href="...">Women's</a></li>
                        <li><a href="...">Men's</a></li>
                        <li><a href="...">On the Street</a></li>
                        <li><a href="...">The Catwalk</a></li>
                        <li><a href="...">About</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Nav;