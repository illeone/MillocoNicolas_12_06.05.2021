function InfoList({icon,info,value,title}) {
    return (  
    <div className="info_list">
        <img src={icon} alt="infos liste icons"/>
        <div className="info_list_desc">
            <span className="info_list_value">{info}{value}</span>
            <span className="info_list_title">{title}</span>
        </div>
    </div>
    );
}

export default InfoList;