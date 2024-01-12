import '../Header/header.css';
import headerlogo from '../../img/Headlogo.svg';

function Header() {
  return (
    <header>
        <div className="headerlogo" >
          <img src={headerlogo} alt="DAT Power" />
        </div>
    </header>
  );
}

export default Header;