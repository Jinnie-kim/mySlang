import apiClient from '../core';

export const getSearcedhWords = (word) => {
  const result = apiClient({ params: { term: `${word}` } })
    .then((result) => {
      return result.data.list;
    })
    .catch((error) => {
      alert(error);
    });
  return result;
};
