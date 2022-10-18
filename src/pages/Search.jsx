import { useState } from 'react';

import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import WordList from '../components/WordList';
import SearchImg from '../assets/search.png';

const Search = () => {
  const [openModal, setOpenModal] = useState(undefined);

  const openModalHandler = () => {
    setOpenModal({
      title: '단어 추가하기',
      content: '단어장에 추가하시겠습니까?',
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
        <section className="flex flex-row items-top justify-around">
          <section className="w-[275px] text-center p-2">
            <div className='h-9 flex'>
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
            </div>
          </section>
          <section className="w-[828px] h-[480px] relative">
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
                  so. Usually a small, cute, person who is very happy and can
                  make you laugh whenever they want to. Also some one who is
                  very fun to be around and acts in the silliest way possible.
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
        </section>
      </Wrapper>
    </>
  );
};

export default Search;
