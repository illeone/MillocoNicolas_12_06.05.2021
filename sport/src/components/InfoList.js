function InfoList({icon,info,value,title}) {
    return (  
    <>
        <img src={icon} alt="infos liste icons"/>
        <div className="info_list_desc">
            <span>{info}{value}</span>
            <span>{title}</span>
        </div>
    </> );
}

export default InfoList;