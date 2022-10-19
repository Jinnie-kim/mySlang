import { useState } from 'react';

import useJoin from '../api/auth/useJoin';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';

const Join = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const { join } = useJoin();

  const userEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const userPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const userNicknameHandler = (event) => {
    setNickname(event.target.value);
  };

  const userInfoSubmitHandler = (event) => {
    event.preventDefault();
    join(email, password, nickname);
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
            type="text"
            placeholder="nickname"
            className="p-1.5 border-solid border-2 rounded-lg focus-visible:outline-[#8c8eb8]"
            value={nickname}
            onChange={userNicknameHandler}
          />
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
          <Button>Join</Button>
        </form>
      </section>
    </Wrapper>
  );
};

export default Join;
