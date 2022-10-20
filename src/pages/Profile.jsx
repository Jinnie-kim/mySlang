import { useState } from 'react';

import useGlobalContext from '../store/useGlobalContext';
import useLogout from '../api/auth/useLogout';
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import WordList from '../components/WordList';
import Button from '../components/Button';

import ProfilePic from '../assets/profilePic.png';

const Profile = () => {
  const [openModal, setOpenModal] = useState(undefined);
  const { user } = useGlobalContext();
  const { logout } = useLogout();

  const openModalHandler = () => {
    setOpenModal({
      title: '단어 삭제하기',
      content: '단어장에서 삭제하시겠습니까?',
      button: '삭제하기',
    });
  };

  const authModalHandler = () => {
    setOpenModal({
      title: '로그아웃',
      content: '로그아웃 하시겠습니까?',
      button: '로그아웃',
      action: logout,
    });
  };

  const confirmModalHandler = () => {
    setOpenModal(null);
  };

  return (
    <>
      {openModal && (
        <Modal
          title={openModal.title}
          content={openModal.content}
          button={openModal.button}
          onClick={confirmModalHandler}
          onAction={openModal.action}
        />
      )}
      <Wrapper>
        <Nav />
        <section className="flex flex-row items-top justify-around">
          <section className="text-center w-[275px] p-2">
            <img
              src={ProfilePic}
              alt="사용자 기본 이미지"
              className="w-[200px] inline-block p-1 mb-5 border-4 border-[#8c8eb8] bg-[#ffffff] rounded-[50%]"
            />
            <h1 className="mb-14 font-bold text-2xl">Jinnie's Slang</h1>
            <div className="flex flex-col gap-3">
              <Button>단어 테스트 하기</Button>
              <Button onClick={authModalHandler}>
                {user ? 'Logout' : 'Login'}
              </Button>
            </div>
          </section>
          <section className="w-[828px] relative">
            {/* <span className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-2xl text-[#8c8eb8]">
            단어를 저장해보세요😃
          </span> */}
            <ul className="w-[828px] flex flex-col gap-y-2 h-[30rem] min-h-fit p-2 overflow-y-scroll no-scrollbar">
              <WordList
                word="Sick"
                definition="cool"
                example="thats sick man"
                author="awkward misunderstood kid"
                onClick={openModalHandler}
                button="delete"
                float="float-right"
              />
              <li className="p-2 border-2 border-[#f68eab] rounded-lg bg-[aliceblue]">
                <h1 className="mb-5 font-bold text-2xl text-[#7376AC]">
                  Sillybilly
                </h1>
                <strong className="w-3/5 inline-block mb-2 font-normal">
                  A person, who acts in a special way and is [not afraid] to do
                  so. Usually a small, cute, person who is very happy and can
                  make you laugh whenever they want to. Also some one who is
                  very fun to be around and acts in the silliest way possible.
                </strong>
                <p className="w-3/5 mb-2 underline">
                  Why are you so cute, you sillybilly.
                </p>
                <span>author: Adafusio</span>
                <button className="float-right rounded-fill bg-[#9f9bbc] py-1 px-3 rounded-lg hover:bg-[#8c8eb8]">
                  delete
                </button>
              </li>
              <li className="p-2 border-2 border-[#f68eab] rounded-lg bg-[aliceblue]">
                <h1 className="mb-5 font-bold text-2xl text-[#7376AC]">
                  In the lavender haze
                </h1>
                <strong className="w-3/5 inline-block mb-2 font-normal">
                  A slang term coined during the '50s, referring to being in
                  love.
                </strong>
                <p className="w-3/5 mb-2 underline">
                  Don: She really makes me laugh and smile a whole lot. Anna:
                  Ah. You're in the lavender haze. Don: Yes... I think I'm going
                  to ask her to marry me.
                </p>
                <span>author: lav3nd3r</span>
                <button className="float-right rounded-fill bg-[#9f9bbc] py-1 px-3 rounded-lg hover:bg-[#8c8eb8]">
                  delete
                </button>
              </li>
              <li className="p-2 border-2 border-[#f68eab] rounded-lg bg-[aliceblue]">
                <h1 className="mb-5 font-bold text-2xl text-[#7376AC]">dang</h1>
                <strong className="w-3/5 inline-block mb-2 font-normal">
                  A euphemism for the word 'damn.'
                </strong>
                <p className="w-3/5 mb-2 underline">
                  Oh dang, I just missed my train!
                </p>
                <span>author: Mr. X-106</span>
                <button className="float-right rounded-fill bg-[#9f9bbc] py-1 px-3 rounded-lg hover:bg-[#8c8eb8]">
                  delete
                </button>
              </li>
              <li className="p-2 border-2 border-[#f68eab] rounded-lg bg-[aliceblue]">
                <h1 className="mb-5 font-bold text-2xl text-[#7376AC]">dang</h1>
                <strong className="w-3/5 inline-block mb-2 font-normal">
                  A euphemism for the word 'damn.'
                </strong>
                <p className="w-3/5 mb-2 underline">
                  Oh dang, I just missed my train!
                </p>
                <span>author: Mr. X-106</span>
                <button className="float-right rounded-fill bg-[#9f9bbc] py-1 px-3 rounded-lg hover:bg-[#8c8eb8]">
                  delete
                </button>
              </li>
            </ul>
          </section>
        </section>
      </Wrapper>
    </>
  );
};

export default Profile;
