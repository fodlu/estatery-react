function IndividualAccount({ state, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Register individual account</h1>
      <p>For the purpose of industry regulation, your details are required</p>

      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={state.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={state.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        name="email"
        value={state.email}
        onChange={handleChange}
        required
      />
      <select className="countryCode" value={state.countryCode}></select>
      <input
        className="phoneNumber"
        value={state.phoneNumber}
        type="text"
        placeholder="Phone Number"
        name="phoneNumber"
        onChange={handleChange}
        required
      />
      <select
        className="gender"
        onChange={handleChange}
        required
        value={state.gender}
        name="gender"
      >
        <option value={'select'}>Select Gender</option>
        <option value={'male'}>Male</option>
        <option value={'female'}>Female</option>
      </select>
      <input
        type="date"
        className="dob"
        value={state.dob}
        placeholder=""
        name="dob"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Residential Address"
        name="address"
        value={state.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Referral code (if any)"
        name="refCode"
        value={state.refCode}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={state.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="password"
        value={state.password}
        onChange={handleChange}
        required
      />
      <div className="terms" value={state.terms}>
        By continuing, you are acknowledging that you have read, understood and
        agreed to Omnny's <em>Terms and Conditions</em> and{' '}
        <em>Privacy Policy</em> as well as to{' '}
        <em>Drivewealth's Disclosures, W8-ben acknowledgement</em> and{' '}
        <em>Privacy Policy.</em>
      </div>
    </form>
  );
}

export default IndividualAccount;
