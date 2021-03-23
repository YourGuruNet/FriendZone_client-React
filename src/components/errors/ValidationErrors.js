import React from 'react';

const ValidationErrors = ({ errors }) => {
  return (
    <div style={{ paddingBottom: '0.5rem' }}>
      {errors && (
        <ul>
          {errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ValidationErrors;
