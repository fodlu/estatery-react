import { Link } from 'react-router-dom';
import IndividualAccount from '../../components/IndividualAccount';
// import IndividualBank from '../../components/IndividualBank';
import Steps from '../../components/Steps';
import './signup.css';
import { useReducer, useState } from 'react';
// import Butto/nCancel from '../../components/ButtonCancel';
import Button from '../../components/Button';

function SignUp() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(response, error, loading);
  // const [count, setCount] = useState(0);

  const initialState = {
    email: '',
    password: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    dob: '',
    nationality: '',
    gender: '',
    refCode: '',
    address: '',
    city: '',
    state: '',
    postalCode: ''
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.field]: action.value
        };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        'https://propertyapi.slemtest.com.ng/api/v1/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(state)
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
      dispatch({ type: 'RESET' }); // Clear the form
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  return (
    <div>
      {/* <Steps count={count} /> */}
      <Steps />
      {
        <IndividualAccount
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      }
      {/* {count === 3 && <IndividualBank handleChange={handleChange} />} */}
      <div className="button">
        {/* {count !== 0 && <ButtonCancel setCount={setCount}>Cancel</ButtonCancel>} */}
        {/* <Button setCount={setCount}>Proceed</Button> */}
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>{' '}
      </div>
      <p>Click Cancel to skip onboarding process and continue to dashboard</p>
      <p>
        Have an account,
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignUp;
