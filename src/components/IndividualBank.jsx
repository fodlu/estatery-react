function IndividualBank({ handleChange }) {
  return (
    <form>
      <h1>Fill in Bank Details</h1>
      <p>
        Bank Details are required for you to withdraw your funds when needed.
        BVN is also required to verify your bank details as well as for
        compliance purposes.
      </p>

      <input type="text" placeholder="Bank Name" onChange={handleChange} />
      <input type="text" placeholder="Account Name" onChange={handleChange} />
      <input type="text" placeholder="Account Number" onChange={handleChange} />
      <input type="text" placeholder="Enter BVN" onChange={handleChange} />
    </form>
  );
}

export default IndividualBank;
