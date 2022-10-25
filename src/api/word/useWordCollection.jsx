import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { appFireStore } from '../../firebase/config';

const useCollection = (collectionName) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(appFireStore, collectionName),
      (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) =>
          result.push({ ...doc.data(), id: doc.id })
        );
        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );

    return unsubscribe;
  }, [collection]);
  return { documents, error };
};

export default useCollection;
