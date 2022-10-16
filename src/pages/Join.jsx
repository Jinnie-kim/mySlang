import Wrapper from '../components/Wrapper';
import Button from '../components/Button';

const Join = () => {
  return (
    <Wrapper>
      <section className="h-full flex flex-col justify-center items-center gap-y-60">
        <h1 className="text-6xl animate-[show_0.5s_ease-in]">MySlang</h1>

        <form className="flex flex-col gap-y-5">
          <input
            type="text"
            placeholder="nickname"
            className="p-1.5 border-solid border-2 rounded-lg focus-visible:outline-[#8c8eb8]"
          />
          <input
            type="email"
            placeholder="email"
            className="p-1.5 border-solid border-2 rounded-lg focus-visible:outline-[#8c8eb8]"
          />
          <input
            type="password"
            placeholder="password"
            className="p-1.5 border-solid border-2 rounded-lg focus-visible:outline-[#8c8eb8]"
          />
          <Button>Join</Button>
        </form>
      </section>
    </Wrapper>
  );
};

export default Join;
