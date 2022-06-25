function Users({name}) {

    return (  
          <div>
            <h1>Bonjour <span className="user_name">{name}</span></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </div>
    );
}

export default Users;