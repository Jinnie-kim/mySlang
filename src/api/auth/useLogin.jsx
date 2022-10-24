import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import useGlobalContext from '../../store/useGlobalContext';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIspending] = useState(false);
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };

  const login = (email, password) => {
    setError(null);
    setIspending(true);
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: 'login', payload: user });

        setError(null);
        setIspending(false);

        if (!user) {
          throw new Error('회원가입에 실패했습니다.');
        }
        goHome();
      })
      .catch((error) => {
        setError(error.message);
        setIspending(false);
      });
  };
  return { error, isPending, login };
};

export default useLogin;
