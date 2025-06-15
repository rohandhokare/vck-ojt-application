import{Link} from 'react-router-dom'
const Header = () => {
    return(
        <div>
            <header>
                <nav>
                    <Link to="/home ">Home</Link>
                    <Link to="/about">About</Link><p></p>
                    <Link to="/courses">Courses</Link><p></p>
                    <Link to="/contact">Contact</Link><p></p>
                    <Link to="/admission">Admission</Link><p></p>
                    <Link to="/notfound">NotFoundPage</Link><p></p>
                 </nav>
            </header>
         </div>
    )
}

export default Header;
