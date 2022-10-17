import { useState } from 'react';

import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import WordList from '../components/WordList';

const Search = () => {
  const [openModal, setOpenModal] = useState(undefined);

  const openModalHandler = () => {
    setOpenModal({
      title: '단어 삭제하기',
      content: '단어장에서 삭제하시겠습니까?',
      button: '삭제하기',
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
        />
      )}
      <Wrapper>
        <Nav />
        <section className="w-[828px] h-[480px] mx-auto relative">
          {/* <span className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-2xl text-[#8c8eb8]">
            찾는 단어가 없어요!🤪
          </span> */}
          <ul className="w-[828px] flex flex-col gap-y-2 h-[30rem] min-h-fit p-2 overflow-y-scroll no-scrollbar">
            <WordList
              word="Sick"
              definition="cool"
              example="thats sick man"
              author="awkward misunderstood kid"
              onClick={openModalHandler}
              button="add"
              float="float-right"
            />
            <li className="p-2 border-2 border-[#f68eab] rounded-lg bg-[aliceblue]">
              <h1 className="mb-5 font-bold text-2xl text-[#7376AC]">
                Sillybilly
              </h1>
              <strong className="w-3/5 inline-block mb-2 font-normal">
                A person, who acts in a special way and is [not afraid] to do
                so. Usually a small, cute, person who is very happy and can make
                you laugh whenever they want to. Also some one who is very fun
                to be around and acts in the silliest way possible.
              </strong>
              <p className="w-3/5 mb-2 underline">
                Why are you so cute, you sillybilly.
              </p>
              <span>author: Adafusio</span>
              <button className="float-right rounded-fill bg-[#9f9bbc] py-1 px-3 rounded-lg hover:bg-[#8c8eb8]">
                add
              </button>
            </li>
            <li className="p-2 border-2 border-[#f68eab] rounded-lg bg-[aliceblue]">
              <h1 className="mb-5 font-bold text-2xl text-[#7376AC]">
                In the lavender haze
              </h1>
              <strong className="w-3/5 inline-block mb-2 font-normal">
                A slang term coined during the '50s, referring to being in love.
              </strong>
              <p className="w-3/5 mb-2 underline">
                Don: She really makes me laugh and smile a whole lot. Anna: Ah.
                You're in the lavender haze. Don: Yes... I think I'm going to
                ask her to marry me.
              </p>
              <span>author: lav3nd3r</span>
              <button className="float-right rounded-fill bg-[#9f9bbc] py-1 px-3 rounded-lg hover:bg-[#8c8eb8]">
                add
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
                add
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
                add
              </button>
            </li>
          </ul>
        </section>
      </Wrapper>
    </>
  );
};

export default Search;
