import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSearcedhWords } from '../api/word/word';
import useWordStore from '../api/word/useWordStore';
import useGlobalContext from '../store/useGlobalContext';
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import WordList from '../components/WordList';
import SearchImg from '../assets/search.png';

const Search = () => {
  const [openModal, setOpenModal] = useState(undefined);
  const [word, setWord] = useState('');
  const [wordDefs, setWordDefs] = useState([]);
  const { user } = useGlobalContext();
  const uid = user && user.uid;
  const { addDocument, response } = useWordStore('wordList');
  const navigate = useNavigate();
  const goLogin = () => {
    navigate('/login');
  };

  const getWordHandler = (event) => {
    setWord(event.target.value);
  };

  const getWordResult = () => {
    getSearcedhWords(word).then((result) => {
      setWordDefs(result);
    });
  };

  const getSelectedWord = () => {
    const word = JSON.parse(localStorage.getItem('word'));
    addDocument({ uid, ...word });
    setOpenModal(null);
  };

  const openModalHandler = (word) => {
    if (user) {
      setOpenModal({
        title: '단어 추가하기',
        content: '단어장에 추가하시겠습니까?',
        button: '추가하기',
        action: getSelectedWord,
      });
      localStorage.setItem('word', JSON.stringify(word));
    } else {
      setOpenModal({
        title: '단어 추가하기',
        content: '로그인이 필요한 기능입니다.',
        button: '로그인하기',
        action: goLogin,
      });
    }
  };

  const confirmModalHandler = () => {
    setOpenModal(null);
    localStorage.removeItem('word');
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
        <section className="flex flex-row items-top justify-evenly">
          <section className="w-[275px] text-center p-2 border-r-2 border-[#8c8eb8]">
            <div className="h-9 flex">
              <input
                type="text"
                placeholder="단어 검색하기"
                className="w-[177px] rounded-lg p-1 focus-visible:outline-[#8c8eb8] mr-2"
                value={word}
                onChange={getWordHandler}
              />
              <button
                type="submit"
                className="w-[36px] p-1.5 bg-[#f78eab] rounded-3xl"
                onClick={getWordResult}
              >
                <img
                  src={SearchImg}
                  alt="검색 버튼 이미지"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>
          </section>
          <section className="w-[828px] h-[480px] relative">
            {wordDefs.length === 0 ? (
              <span className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-2xl text-[#8c8eb8]">
                찾는 단어가 없어요!🤪
              </span>
            ) : (
              <ul className="w-[828px] flex flex-col gap-y-2 h-[30rem] min-h-fit p-2 overflow-y-scroll no-scrollbar">
                {wordDefs.map((word) => {
                  return (
                    <WordList
                      key={word.defid}
                      word={word.word}
                      definition={word.definition}
                      example={word.example}
                      author={word.author}
                      onClick={openModalHandler}
                      onAdd={word}
                      button="add"
                      float="float-right"
                    />
                  );
                })}
              </ul>
            )}
          </section>
        </section>
      </Wrapper>
    </>
  );
};

export default Search;
