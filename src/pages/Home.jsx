import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Button from '../components/Button';

const Home = () => {
  return (
    <Wrapper>
      <Nav />
      <section className='flex flex-col items-center gap-y-24 text-center'>
        <h1 className='font-bold text-3xl'>Word of the Day🦄</h1>
        <article className='w-2/4 p-2 border-2 border-[#f68eab] rounded-lg bg-[aliceblue]'>
          <h1 className="mb-5 font-bold text-2xl text-[#7376AC]">Sillybilly</h1>
          <strong className="w-3/5 inline-block mb-2 font-normal">
            A person, who acts in a special way and is not afraid to do so.
            Usually a small, cute, person who is very happy and can make you
            laugh whenever they want to. Also some one who is very fun to be
            around and acts in the silliest way possible.
          </strong>
          <p className="w-3/5 mb-2 mx-auto underline">
            Why are you so cute, you sillybilly.
          </p>
          <span>author: Adafusio</span>
          <Button float='float-right'>add</Button>
        </article>
      </section>
    </Wrapper>
  );
};

export default Home;
