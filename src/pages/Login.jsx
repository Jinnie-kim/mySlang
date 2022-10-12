import Wrapper from '../components/Wrapper';

const Login = () => {
  return (
    <Wrapper>
      <section className="h-full flex flex-col justify-center items-center gap-y-60">
        <h1 className="text-6xl animate-[show_0.5s_ease-in]">MySlang</h1>

        <form className="flex flex-col gap-y-5">
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
          <button
            type="submit"
            className="rounded-fill bg-[#9f9bbc] py-1.5 px-3.5 rounded-lg hover:bg-[#8c8eb8]"
          >
            Login
          </button>
        </form>
      </section>
    </Wrapper>
  );
};

export default Login;
