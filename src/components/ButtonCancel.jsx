function ButtonCancel({ children, setCount }) {
  return (
    <button
      className={'cancel'}
      onClick={() => setCount((prev) => (prev < 0 ? 0 : prev - 1))}
    >
      {children}
    </button>
  );
}

export default ButtonCancel;
