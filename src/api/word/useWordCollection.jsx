import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { appFireStore } from '../../firebase/config';

const useCollection = (collectionName, myQuery) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let q;
    if (myQuery) {
      q = query(collection(appFireStore, collectionName), where(...myQuery));
    }
    const unsubscribe = onSnapshot(
      (myQuery ?  q : collection(appFireStore, collectionName)),
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
