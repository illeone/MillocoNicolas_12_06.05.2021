import { NavLink } from "react-router-dom";

/**
 * Display the page Error404
 * @returns {JSX}
 * @NavLink is used to navigate to the UsersPage
 */
const Error404 = () => {
   
    return (

         <div className="content">
            <h2 className="linear-wipe" data-text="404">
               404
            </h2>
            <h4 className="oups" >
               Oups ! La page que vous demandez n'existe pas.
            </h4>
            <div className="container-btns">
               <NavLink to="/" className="btns">retour accueil</NavLink>
            </div>

         </div>

    )
}

export default Error404;