import { NavLink } from "react-router-dom";

const UsersPage = () => {

    return (
        <>
        <div className="">
            <div className="">
                <NavLink to="/user/:id">
                    <button className="">12</button> 
                </NavLink>
                
                <NavLink to="/user/:id" >
                    <button className="">18</button>
                </NavLink>
            </div>
        </div>

        </>
    )
}

export default UsersPage;