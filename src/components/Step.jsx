function Step({ tag, index, count }) {
  return (
    <div className="step" key={index}>
      <p className={count >= index ? 'number active' : 'number'}>{index + 1}</p>
      <p className="tag">{tag}</p>
    </div>
  );
}

export default Step;
