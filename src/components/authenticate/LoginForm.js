import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { Background, Popup } from '../../app/layout/styles';
const LoginForm = () => {
  return (
    <Popup>
      <Background />
      <Section>
        <div className='form-style-10'>
          <h1 className='center'>Login</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}>
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} autoComplete='off'>
                <div className='inner-wrap'>
                  <label>
                    Email
                    <Field name='email' type='email' />
                    <ErrorMessage
                      name='email'
                      render={(error) => (
                        <label style={{ color: 'red' }}>{error}</label>
                      )}
                    />
                  </label>
                  <label>
                    Password
                    <Field name='password' type='password' />
                    <ErrorMessage
                      name='password'
                      render={(error) => (
                        <label style={{ color: 'red' }}>{error}</label>
                      )}
                    />
                  </label>
                </div>
                <button
                  className='details_button'
                  type='submit'
                  content='Submit'>
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Section>
    </Popup>
  );
};

export default LoginForm;

const Section = styled.section`
  max-width: 50rem;
  margin: 0 auto;
  z-index: 999;
  position: relative;
  padding-top: 15rem;

  .center {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
  }
`;
