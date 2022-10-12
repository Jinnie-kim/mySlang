import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

const InitPage = () => {
  return (
    <Wrapper>
      <section className="h-full flex flex-col justify-center items-center gap-y-24">
        <h1 className="text-6xl">MySlang</h1>
        <section className="flex flex-row gap-x-8 animate-[show_1s_ease-in]">
          <Link to='/login'>
            <button
              type="button"
              className="rounded-fill bg-[#9f9bbc] py-1.5 px-3.5 rounded-lg hover:bg-[#8c8eb8]"
            >
              Login
            </button>
          </Link>
          <Link to='/join'>
          <button
            type="button"
            className="rounded-fill bg-[#9f9bbc] py-1.5 px-3.5 rounded-lg hover:bg-[#8c8eb8]"
          >
            Join
          </button>
          </Link>
        </section>
      </section>
    </Wrapper>
  );
};

export default InitPage;
