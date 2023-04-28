import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCollection from '../api/word/useWordCollection';
import useGlobalContext from '../store/useGlobalContext';
import useLogout from '../api/auth/useLogout';
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import WordList from '../components/WordList';
import Button from '../components/Button';

import ProfilePic from '../assets/profilePic.png';
import useWordStore from '../api/word/useWordStore';

const Profile = () => {
  const [openModal, setOpenModal] = useState(undefined);
  const { user } = useGlobalContext();
  const uid = user && user.uid;
  const { documents } = useCollection('wordList', ['uid', '==', uid]);
  const { deleteDocument } = useWordStore('wordList');
  const { logout } = useLogout();
  const navigate = useNavigate();
  const goLogin = () => {
    navigate('/login');
  };

  const openModalHandler = () => {
    setOpenModal({
      title: '단어 삭제하기',
      content: '단어장에서 삭제하시겠습니까?',
      button: '삭제하기',
      action: wordDeleteHandler,
    });
  };

  const wordDeleteHandler = () => {
    const id = localStorage.getItem('id');
    deleteDocument(id);
    setOpenModal(null);
  };

  const authModalHandler = () => {
    setOpenModal(
      user
        ? {
            title: '로그아웃',
            content: '로그아웃 하시겠습니까?',
            button: '로그아웃',
            action: actionModalHandler,
          }
        : {
            title: '로그인',
            content: '로그인 하시겠습니까?',
            button: '로그인',
            action: goLogin,
          }
    );
  };

  const confirmModalHandler = () => {
    setOpenModal(null);
    localStorage.removeItem('id');
  };

  const actionModalHandler = () => {
    logout();
    setOpenModal(null);
  };

  return (
    <>
      {openModal && (
        <Modal title={openModal.title} content={openModal.content} button={openModal.button} onClick={confirmModalHandler} onAction={openModal.action} />
      )}
      <Wrapper>
        <Nav />
        <section className="flex flex-row items-top justify-around">
          <section className="text-center w-[275px] p-2">
            <img src={ProfilePic} alt="사용자 기본 이미지" className="w-[200px] inline-block p-1 mb-5 border-4 border-[#8c8eb8] bg-[#ffffff] rounded-[50%]" />
            <h1 className="mb-14 font-bold text-2xl">{user ? `${user.displayName}'s Slang` : "ur name'll be here"}</h1>
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => {
                  alert('준비 중인 기능입니다.');
                }}
              >
                단어 테스트 하기
              </Button>
              <Button onClick={authModalHandler}>{user ? 'Logout' : 'Login'}</Button>
            </div>
          </section>
          <section className="w-[828px] relative">
            {user && documents ? (
              <ul className="w-[828px] flex flex-col gap-y-2 h-[30rem] min-h-fit p-2 overflow-y-scroll no-scrollbar">
                {documents.map((word) => {
                  return (
                    <WordList
                      key={word.defid}
                      word={word.word}
                      definition={word.definition}
                      example={word.example}
                      author={word.author}
                      onClick={openModalHandler}
                      onAdd={word}
                      id={word.id}
                      button="delete"
                      float="float-right"
                    />
                  );
                })}
              </ul>
            ) : (
              <span className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-2xl text-[#8c8eb8]">로그인 후 단어를 저장해보세요😃</span>
            )}
          </section>
        </section>
      </Wrapper>
    </>
  );
};

export default Profile;
