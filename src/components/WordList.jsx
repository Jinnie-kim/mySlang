import Button from './Button';

const WordList = (props) => {
  return (
    <li className="p-2 border-2 border-[#f68eab] rounded-lg bg-[aliceblue]">
      <h1 className="mb-5 font-bold text-2xl text-[#7376AC]">{props.word}</h1>
      <strong className="w-3/5 inline-block mb-2 font-normal">
        {props.definition}
      </strong>
      <p className="w-3/5 mb-2 underline">{props.example}</p>
      <span>{`author: ${props.author}`}</span>
      <Button float={props.float}>{props.button}</Button>
    </li>
  );
};

export default WordList;
