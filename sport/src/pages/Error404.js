import { NavLink } from "react-router-dom";

const Error404 = () => {
    return (
         <div className="content">
            <h2 className="linear-wipe" data-text="404">
               404
            </h2>
            <h4 className="oups" >
               Oups ! La page que vous demandez n'existe pas.
            </h4>
            <NavLink to="/" className="btns">retour accueil</NavLink>
         </div>
    )
}

export default Error404;