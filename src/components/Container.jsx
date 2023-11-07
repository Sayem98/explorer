// eslint-disable-next-line react/prop-types
function Container({ children, className }) {
  return (
    <div
      className={`max-w-[1400px] w-full mx-auto px-4 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
