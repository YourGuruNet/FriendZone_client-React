import React, { useState } from 'react';
import axios from 'axios';
import ValidationErrors from './ValidationErrors';

export default function TestErrors() {
  const baseUrl = 'http://localhost:5000/api/';

  const [errors, setErrors] = useState(null);

  function handleNotFound() {
    axios
      .get(baseUrl + 'buggy/not-found')
      .catch((err) => console.log(err.response));
  }

  function handleBadRequest() {
    axios
      .get(baseUrl + 'buggy/bad-request')
      .catch((err) => console.log(err.response));
  }

  function handleServerError() {
    axios
      .get(baseUrl + 'buggy/server-error')
      .catch((err) => console.log(err.response));
  }

  function handleUnauthorised() {
    axios
      .get(baseUrl + 'buggy/unauthorised')
      .catch((err) => console.log(err.response));
  }

  function handleBadGuid() {
    axios
      .get(baseUrl + 'activities/notaguid')
      .catch((err) => console.log(err.response));
  }

  function handleValidationError() {
    axios.post(baseUrl + 'activities', {}).catch((err) => setErrors(err));
  }

  return (
    <div style={{ padding: '10em' }}>
      <button onClick={handleNotFound}>Not Found</button>
      <button onClick={handleBadRequest}>Bad Request</button>
      <button onClick={handleValidationError}>Validation Error</button>
      <button onClick={handleServerError}>Server Error</button>
      <button onClick={handleUnauthorised}>Unauthorised</button>
      <button onClick={handleBadGuid}>Bad Guid</button>
      {errors && <ValidationErrors errors={errors} />}
    </div>
  );
}
