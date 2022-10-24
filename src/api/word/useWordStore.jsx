import { useReducer } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { appFireStore, timeStamp } from '../../firebase/config';

const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'isPending':
      return { isPending: true, document: null, success: false, error: null };
    case 'addDoc':
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case 'error':
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const useWordStore = (collectionName) => {
  const [response, dispatch] = useReducer(storeReducer, initState);

  const collectionRef = collection(appFireStore, collectionName);

  const addDocument = async (document) => {
    dispatch({ type: 'isPending' });
    try {
      const createdTime = timeStamp.fromDate(new Date());
      const documentRef = await addDoc(collectionRef, {
        ...document,
        createdTime,
      });
      console.log(documentRef);
      dispatch({ type: 'addDoc', payload: documentRef });
    } catch (error) {
      dispatch({ type: 'error', payload: error.message });
    }
  };

  return { addDocument, response };
};

export default useWordStore;
