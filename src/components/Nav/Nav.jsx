import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link, NavLink } from "react-router-dom"

const Nav = ({onSearch})=> {
    return (
        <nav className={styles.divSB}> 
            <Link to="/about">About</Link>

            <Link to="/home">Home</Link>

            {/*  le pasamos la funcion a "SrarchBar"*/}

            <SearchBar onSearch={onSearch}/>
        
        </nav>
    )
}

export default Nav;