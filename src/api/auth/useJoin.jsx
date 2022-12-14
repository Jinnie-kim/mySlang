import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import useGlobalContext from '../../store/useGlobalContext';

const useJoin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIspending] = useState(false);
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };

  const join = (email, password, displayName) => {
    setError(null);
    setIspending(true);
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (!user) {
          throw new Error('회원가입에 실패했습니다.');
        }
        updateProfile(auth.currentUser, { displayName })
          .then(() => {
            setError(null);
            setIspending(false);
            dispatch({ type: 'login', payload: user });
          })
          .catch((error) => {
            setError(error.message);
            setIspending(false);
          });
          goHome();
      })
      .catch((error) => {
        setError(error.message);
        setIspending(false);
      });
  };
  return { error, isPending, join };
};

export default useJoin;
