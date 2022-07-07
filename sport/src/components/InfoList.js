import PropTypes from 'prop-types'; 

/**
 * display icons with user infos
 * @param {string} icon 
 * @param {number} info
 * @param {string} value
 * @param {string} title
 * @returns {JSX}
 */

function InfoList({icon,info,value,title}) {

    return (  
    <div className="info_list">
        <img className="iconList" src={icon} alt="infos liste icons"/>
        <div className="info_list_desc">
            <span className="info_list_value">{info}{value}</span>
            <span className="info_list_title">{title}</span>
        </div>
    </div>
    );
}

export default InfoList;

InfoList.prototype = {
    icon: PropTypes.string,
    info: PropTypes.number,
    value: PropTypes.string,
    title: PropTypes.string,
  };