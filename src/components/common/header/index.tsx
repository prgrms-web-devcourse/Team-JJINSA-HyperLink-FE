import { Link } from 'react-router-dom';
import UserNav from './UserNav';

import * as style from './style.css';
import logo from '@/assets/logo.svg';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.top}>
        <Link to="/" className={style.logo}>
          <img src={logo} alt="hyperlink logo" />
        </Link>
        <SearchBar />
        <UserNav />
      </div>
    </header>
  );
};

export default Header;
