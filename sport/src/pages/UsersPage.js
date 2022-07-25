import { NavLink } from "react-router-dom";

/**
 * Rendering user page with link in order to choose a user
 * @returns {JSX}
 * @NavLink is used to navigate between different pages
 */
const UsersPage = () => {

    return (
        <>
        
        <div>
            <nav className="users_page">
                <NavLink to="/user/12" className="link" style={{ textDecoration: 'none' }}>
                    <div className="btn">12</div> 
                    <p className="name_kc">Karl</p>
                </NavLink>
                
                <NavLink to="/user/18" className="link" style={{ textDecoration: 'none' }}>
                    <div className="btn btn2">18</div>
                    <p className="name_kc">Cecilia</p>
                </NavLink>
            </nav>
        </div>

        </>
    )
}

export default UsersPage;