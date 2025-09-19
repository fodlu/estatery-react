import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const initialState = {
    email: '',
    password: '',
    attempts: 0 // Track failed login attempts
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.field]: action.value
        };
      case 'LOGIN_FAIL':
        return {
          ...state,
          attempts: state.attempts + 1
        };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState('false');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!state.email || !state.password) {
      setError('Email and password are required.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        'https://propertyapi.slemtest.com.ng/api/v1/accounts/user-login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: state.email,
            password: state.password
          })
        }
      );

      if (!res.ok) {
        dispatch({ type: 'LOGIN_FAIL' }); // Increment failed attempts
        throw new Error('Invalid email or password.');
      }

      const data = await res.json();
      console.log('Login successful:', data);

      // Reset form and attempts after successful login
      dispatch({ type: 'RESET' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        required
        placeholder="Email Address"
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
        required
        placeholder="New Password"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {state.attempts > 0 && (
        <p className="text-yellow-600 text-sm">
          Failed login attempts: {state.attempts}
        </p>
      )}
      <button>{loading ? 'Processing...' : 'Proceed'}</button>
      <p>
        Dont Have an account,
        <Link to="/signup">Signup</Link>
      </p>

      <p>
        Forgotten Password, <Link to="/reset-password">Reset Here</Link>
      </p>
    </form>
  );
}

export default Login;
