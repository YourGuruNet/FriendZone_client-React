import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../activities/reducer/ActivitiesActions';

const LoginForm = (props) => {
  return (
    <Section>
      <div className='form-style-10'>
        <h1 className='center'>Login</h1>
        <Formik
          initialValues={{ email: '', password: '', error: null }}
          onSubmit={(values, { setErrors }) =>
            props
              .login(values)
              .catch((error) =>
                setErrors({ error: 'Invalid Email or Password!' })
              )
          }>
          {({ handleSubmit, isSubmitting, errors }) => (
            <Form onSubmit={handleSubmit} autoComplete='off'>
              <div className='inner-wrap'>
                <label>
                  Email
                  <Field name='email' type='email' />
                </label>
                <label>
                  Password
                  <Field name='password' type='password' />
                </label>
              </div>
              <ErrorMessage
                name='error'
                render={() => (
                  <label style={{ color: 'red' }}>{errors.error}</label>
                )}
              />
              <button className='details_button' type='submit' content='Submit'>
                {isSubmitting ? 'Wait..' : '  Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);

const Section = styled.section`
  max-width: 60rem;
  margin: 0 auto;
  z-index: 999;
  box-shadow: 1rem 2rem 4rem 0rem black;
  .center {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
  }
`;
