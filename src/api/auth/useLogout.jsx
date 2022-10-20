import { useState } from 'react';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import useGlobalContext from '../../store/useGlobalContext';

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useGlobalContext();

  const logout = () => {
    setError(null);
    setIsPending(true);

    signOut(auth)
      .then(() => {
        setError(null);
        setIsPending(false);
        dispatch({ type: 'logout' });
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  };

  return { error, isPending, logout };
};

export default useLogout;
