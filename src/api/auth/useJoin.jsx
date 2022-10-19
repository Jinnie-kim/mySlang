import { useState } from 'react';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const useJoin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIspending] = useState(false);

  const join = (email, password, displayName) => {
    setError(null);
    setIspending(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (!user) {
          throw new Error('회원가입에 실패했습니다.');
        }
        updateProfile(auth.currentUser, { displayName })
          .then(() => {
            setError(null);
            setIspending(false);
          })
          .catch((error) => {
            setError(error.message);
            setIspending(false);
          });
      })
      .catch((error) => {
        setError(error.message);
        setIspending(false);
      });
  };
  return { error, isPending, join };
};

export default useJoin;
