import yoga from '../assets/yoga.svg';
import swim from '../assets/swim.svg';
import bike from '../assets/bike.svg';
import alters from '../assets/alters.svg';

/**
 * create left sidebar with icons
 * @returns {JSX}
 */
const LateralBar = () => {
    return (
      <>
        <section className="header lateral">
          <nav className="header_vertical">
            <ul className="header_icons">
              <li className="lateral_icon">
                <img className="lateral_img" src={yoga} alt="" />
              </li>
              <li className="lateral_icon">
                <img className="lateral_img swim" src={swim} alt="" />
              </li>
              <li className="lateral_icon">
                <img className="lateral_img" src={bike} alt="" />
              </li>
              <li className="lateral_icon">
                <img className="lateral_img"  src={alters} alt="" />
              </li>
            </ul>
            <p className="lateral_copyrights">Copiryght, SportSee 2020</p>
          </nav>
        </section>
      </>
    );
};

export default LateralBar;

