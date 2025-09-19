function IndividualDocument() {
  return (
    <form>
      <h1>Upload Identity Document</h1>
      <p>
        You can upload any Identity document from the options below, However
        some require front and back upload. This will help us identify that this
        is you!
      </p>

      <h3>Select identification Documeent type</h3>

      <select>
        <option>Select Document</option>
        <option>International passport</option>
        <option>ID card</option>
        <option>Drivers Licence</option>
        <option>National card</option>
      </select>
      <input type="text" placeholder="ID number" />
      <input type="text" placeholder="Expiry Date" />
      <button>Cancel</button>
      <button>Proceed</button>
    </form>
  );
}

export default IndividualDocument;
