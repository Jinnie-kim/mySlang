const Wrapper = (props) => {
  return (
    <section className="container max-lg h-5/6 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-lg overflow-hidden shadow-2xl bg-[#e2e2e2]">
      {props.children}
    </section>
  );
};

export default Wrapper;
