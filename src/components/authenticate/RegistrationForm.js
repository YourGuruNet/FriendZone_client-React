import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { registration } from '../activities/reducer/ActivitiesActions';
import * as Yup from 'yup';
const RegistrationForm = (props) => {
  return (
    <Section>
      <div className='form-style-10'>
        <h1 className='center'>Registration</h1>
        <Formik
          initialValues={{
            displayName: '',
            userName: '',
            email: '',
            password: '',
            error: null,
          }}
          onSubmit={(values, { setErrors }) =>
            props
              .registration(values)
              .catch((error) =>
                setErrors({ error: 'Invalid Email or Password!' })
              )
          }
          validationSchema={Yup.object().shape({
            displayName: Yup.string().required('Required'),
            userName: Yup.string().required('Required'),
            email: Yup.string().required('Required').email(),
            password: Yup.string().required('Required'),
          })}>
          {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
            <Form onSubmit={handleSubmit} autoComplete='off'>
              <div className='inner-wrap'>
                <label>
                  Display Name
                  <Field name='displayName' type='text' />
                </label>
                <label>
                  User Name
                  <Field name='userName' type='text' />
                </label>
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
              <button
                disabled={!isValid || !dirty || isSubmitting}
                className='details_button'
                type='submit'
                content='Submit'>
                {isSubmitting ? 'Wait..' : 'Register'}
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
    registration: (user) => dispatch(registration(user)),
  };
};

export default connect(null, mapDispatchToProps)(RegistrationForm);

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
