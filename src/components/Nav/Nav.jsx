import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link, NavLink } from "react-router-dom"

const Nav = ({onSearch})=> {
    return (
        <nav className={styles.divSB}> 
            <Link to="/about"><button>About</button></Link>

            <Link to="/home"><button>Home</button></Link>

            {/*  le pasamos la funcion a "SrarchBar"*/}

            <Link to="/favorites"><button>favorites</button></Link>
            <SearchBar onSearch={onSearch}/>
        
        </nav>
    )
}

export default Nav;