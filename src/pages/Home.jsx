import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useGlobalContext from '../store/useGlobalContext';
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import Button from '../components/Button';

const Home = () => {
  const [openModal, setOpenModal] = useState(undefined);
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const goLogin = () => {
    navigate('/login');
  };

  const openModalHandler = () => {
    setOpenModal(
      user
        ? {
            title: '단어 추가하기',
            content: '단어장에 추가하시겠습니까?',
            button: '추가하기',
          }
        : {
            title: '단어 추가하기',
            content: '로그인이 필요한 기능입니다.',
            button: '로그인하기',
            action: goLogin,
          }
    );
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
        <section className="flex flex-col items-center gap-y-24 text-center">
          <h1 className="font-bold text-3xl">Word of the Day🦄</h1>
          <article className="w-2/4 p-2 border-2 border-[#f68eab] rounded-lg bg-[aliceblue]">
            <h1 className="mb-5 font-bold text-2xl text-[#7376AC]">
              Sillybilly
            </h1>
            <strong className="w-3/5 inline-block mb-2 font-normal">
              A person, who acts in a special way and is not afraid to do so.
              Usually a small, cute, person who is very happy and can make you
              laugh whenever they want to. Also some one who is very fun to be
              around and acts in the silliest way possible.
            </strong>
            <p className="w-3/5 mb-2 mx-auto underline">
              Why are you so cute, you sillybilly.
            </p>
            <span>author: Adafusio</span>
            <Button float="float-right" onClick={openModalHandler}>
              add
            </Button>
          </article>
        </section>
      </Wrapper>
    </>
  );
};

export default Home;
