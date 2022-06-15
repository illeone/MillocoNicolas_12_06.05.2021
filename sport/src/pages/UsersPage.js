import { NavLink } from "react-router-dom";

const UsersPage = () => {

    return (
        <>
        <div className="">
            <nav className="aze">
                <NavLink to="/user/12" className="link" style={{ textDecoration: 'none' }}>
                    <div className="btn">12</div> 
                </NavLink>
                
                <NavLink to="/user/18" className="link" style={{ textDecoration: 'none' }}>
                    <div className="btn btn2">18</div>
                </NavLink>
            </nav>
        </div>

        </>
    )
}

export default UsersPage;