import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';

const Nav = ({onSearch})=> {
    return (
        <nav className={styles.divSB}>         
        
        <SearchBar onSearch={onSearch}/>

        </nav>
    )
}

export default Nav;