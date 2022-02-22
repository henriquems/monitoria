import { Link } from 'react-router-dom';
import './styles.css'

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="nav-content">
                    <Link to="/">
                        <h1>MONITORIA</h1>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;