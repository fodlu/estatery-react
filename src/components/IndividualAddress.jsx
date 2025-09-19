function IndividualAddress() {
  return (
    <form>
      <h1>Upload Proof of Address Document</h1>
      <p>This will also help us identify that it is you running this account</p>

      <input type="text" placeholder="Residential Adress" />
      <input type="text" placeholder="State" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Postal code" />

      <h3>Select Proof of Address Document type</h3>
      <select>
        <option>Select Document</option>
        <option>ban Statement</option>
        <option>Utility Bill</option>
      </select>
      <imput type="file" />
      <button>Cancel</button>
      <button>Proceed</button>
      <p>Click Cancel to skip onboarding process and continue to dashboard</p>
    </form>
  );
}

export default IndividualAddress;
