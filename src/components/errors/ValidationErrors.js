import React from 'react';

const ValidationErrors = ({ errors }) => {
  return (
    <div>
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
