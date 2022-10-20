import { useState } from 'react';
import { Link } from 'react-router-dom';

import useLogin from '../api/auth/useLogin';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useLogin();

  const userEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const userPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const userInfoSubmitHandler = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <Wrapper>
      <section className="h-full flex flex-col justify-center items-center gap-y-60">
        <h1 className="text-6xl animate-[show_0.5s_ease-in]">MySlang</h1>

        <form
          className="flex flex-col gap-y-5"
          onSubmit={userInfoSubmitHandler}
        >
          <input
            type="email"
            placeholder="email"
            className="p-1.5 border-solid border-2 rounded-lg focus-visible:outline-[#8c8eb8]"
            value={email}
            onChange={userEmailHandler}
          />
          <input
            type="password"
            placeholder="password"
            className="p-1.5 border-solid border-2 rounded-lg focus-visible:outline-[#8c8eb8]"
            value={password}
            onChange={userPasswordHandler}
          />
          <Button>Login</Button>
          <Link to="/join">
            <Button width="w-[100%]">go to join</Button>
          </Link>
        </form>
      </section>
    </Wrapper>
  );
};

export default Login;
