import Button from './Button';

const Modal = (props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        className="w-full h-screen fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.75)]"
      />
      <section className="w-96 h-72 p-5 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center rounded-lg z-10 bg-[#f68eab]">
        <header className="bg-[white] rounded-lg mb-8">
          <h1>{props.title}</h1>
        </header>
        <p className="h-36 mb-8 bg-[white] rounded-lg">{props.content}</p>
        <footer className="flex gap-4 absolute bottom-3 left-2/4 -translate-x-2/4">
          <Button>{props.button}</Button>
          <Button onClick={props.onClick}>취소하기</Button>
        </footer>
      </section>
    </>
  );
};

export default Modal;
