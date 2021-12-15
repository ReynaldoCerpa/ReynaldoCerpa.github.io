import "./Navbar.css"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div class="nav-container">
                <nav class="nav">
                    <ul class="nav-list">
                        <li class="nav-item">
                            <Link className="link" to="/">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <a className="link" href="#skills-page">SKILLS</a>
                        </li>
                        <li class="nav-item">
                            <Link className="link" to="/contact">CONTACT ME</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
