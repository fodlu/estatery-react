function Button({ children, onClick }) {
  return (
    // <button className="proceed" onClick={() => setCount((prev) => prev + 1)}>
    <button className="proceed" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
