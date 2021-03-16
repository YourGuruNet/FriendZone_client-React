import React from 'react';
import DatePicker from 'react-datepicker';
import { useField } from 'formik';

const DataInput = (props) => {
  const [field, meta, helpers] = useField(props.name);
  return (
    <label>
      Date
      <DatePicker
        {...field}
        {...props}
        selected={(field.values && new Date(field.values)) || new Date()}
        onChange={(values) => helpers.setValue(values)}
      />
      {meta.touched && meta.error ? (
        <label style={{ color: 'red' }}>{meta.error}</label>
      ) : null}
    </label>
  );
};

export default DataInput;
