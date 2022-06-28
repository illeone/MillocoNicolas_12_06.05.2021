function Users({name}) {

    return (  
          <div>
            <h1 className="hello">Bonjour <span className="user_name">{name}</span></h1>
            <span className="congratulation">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </div>
    );
}

export default Users;