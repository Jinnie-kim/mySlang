import { Link } from 'react-router-dom';

import HomeLogoImg from '../assets/homeLogo.png';
import SearchImg from '../assets/search.png';
import ProfileImg from '../assets/profile.png';

const Nav = () => {
  return (
    <nav className="mb-5">
      <ul className="flex flex-row justify-between items-center p-2 bg-[#9f9bbc] rounded-lg">
        <li className="flex-1">
          <Link to="/home">
            <img
              src={HomeLogoImg}
              alt="홈 로고 이미지"
              className="inline-block w-[30px] h-[30px]"
            />
          </Link>
        </li>
        <li className="flex-none mt-2 mr-3">
          <Link to="/search">
            <button type="submit">
              <img
                src={SearchImg}
                alt="검색 버튼 이미지"
                className="w-[24px] h-[24px]"
              />
            </button>
          </Link>
        </li>
        <li className="flex-none">
          <Link to="/profile">
            <img
              src={ProfileImg}
              alt="프로필 링크 이미지"
              className="w-[24px] h-[24px]"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
