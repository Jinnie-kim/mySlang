const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.width} ${props.float} rounded-fill bg-[#9f9bbc] py-1 px-3 rounded-lg hover:bg-[#8c8eb8]`}
    >
      {props.children}
    </button>
  );
};

export default Button;
