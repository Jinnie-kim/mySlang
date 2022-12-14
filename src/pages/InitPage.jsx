import { Link } from 'react-router-dom';
import useGlobalContext from '../store/useGlobalContext';
import Wrapper from '../components/Wrapper';

const InitPage = () => {
  const { user } = useGlobalContext();

  return (
    <Wrapper>
      <section className="h-full flex flex-col justify-center items-center gap-y-24">
        <h1 className="text-6xl">MySlang</h1>
        <section className="flex flex-row gap-x-8 animate-[show_1s_ease-in]">
          {user ? (
            <Link to="/home">
              <button
                type="button"
                className="rounded-fill bg-[#9f9bbc] py-1.5 px-3.5 rounded-lg hover:bg-[#8c8eb8]"
              >
                start
              </button>
            </Link>
          ) : (
            <>
              <Link to="/home">
                <button
                  type="button"
                  className="rounded-fill bg-[#9f9bbc] py-1.5 px-3.5 rounded-lg hover:bg-[#8c8eb8]"
                >
                  start
                </button>
              </Link>
              <Link to="/login">
                <button
                  type="button"
                  className="rounded-fill bg-[#9f9bbc] py-1.5 px-3.5 rounded-lg hover:bg-[#8c8eb8]"
                >
                  login
                </button>
              </Link>
            </>
          )}
        </section>
      </section>
    </Wrapper>
  );
};

export default InitPage;
