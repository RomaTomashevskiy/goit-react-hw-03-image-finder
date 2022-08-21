import './index.css'


function Header({ children }) {
    return (
        <header className="searchbar">
            {children}
        </header>
    )
}; 


export default Header;

