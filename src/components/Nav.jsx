import { Link } from 'react-router-dom';

import HomeLogoImg from '../assets/homeLogo.png';
import SearchImg from '../assets/search.png';
import ProfileImg from '../assets/profile.png';

const Nav = () => {
  return (
    <nav className="w-full p-5">
      <ul className="flex flex-row justify-between items-center p-2 bg-[#9f9bbc] rounded-lg">
        <li>
          <Link to="/home">
            <img
              src={HomeLogoImg}
              alt="홈 로고 이미지"
              className="inline-block w-[30px] h-[30px]"
            />
          </Link>
        </li>
        <li className="flex">
          <input
            type="text"
            placeholder="단어 검색하기"
            className="rounded-lg p-1 focus-visible:outline-[#8c8eb8] mr-2"
          />
          <button type="submit" className="p-1.5 bg-[#f78eab] rounded-3xl">
            <img
              src={SearchImg}
              alt="검색 버튼 이미지"
              className="w-[24px] h-[24px]"
            />
          </button>
        </li>
        <li>
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
