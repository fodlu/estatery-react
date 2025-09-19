import { useReducer, useState } from 'react';

function ResetPassword() {
  const initialState = {
    email: '',
    token: '',
    newPassword: '',
    step: 1 // Step 1 = request code, Step 2 = reset password
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.field]: action.value
        };
      case 'NEXT_STEP':
        return {
          ...state,
          step: 2
        };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [, setStep] = useState(1);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleRequestCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(
        'https://propertyapi.slemtest.com.ng/swagger/api/v1/auth/password-reset/request',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: state.email })
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to request reset token: ${errorText}`);
      }

      const data = await res.json();
      setMessage(data.message || 'A token has been sent to your email.');
      setStep(2); // Proceed to token + new password step
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(
        'https://propertyapi.slemtest.com.ng/swagger/api/v1/auth/password-reset/confirm',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: state.token,
            newPassword: state.newPassword
          })
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Password reset failed: ${errorText}`);
      }

      const data = await res.json();
      setMessage(data.message || 'Password reset successful!');
      dispatch({ type: 'RESET' });
      setStep(1); // Back to Step 1 for next use
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form>
      <h1>Reset Password</h1>

      {message && <p>{message}</p>}

      {state.step === 1 && (
        <>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            onClick={handleRequestCode}
          />
          <button>{loading ? 'Sending...' : 'Request Code'}</button>
        </>
      )}

      {state.step === 2 && (
        <>
          <input
            type="text"
            name="text"
            value={state.text}
            onChange={handleChange}
            required
            placeholder="token"
          />
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
            placeholder="New Password"
            onClick={handleResetPassword}
            disabled={loading}
          />
          <button>Proceed</button>
        </>
      )}
    </form>
  );
}

export default ResetPassword;
