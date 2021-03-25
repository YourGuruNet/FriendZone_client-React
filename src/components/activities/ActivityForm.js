import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  handleCreateActivity,
  handleEditActivity,
  setEditMode,
} from './reducer/ActivitiesActions';
import uuid from 'react-uuid';
import { Background, Popup } from '../../app/layout/styles';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import DataInput from '../DataInput';

const ActivityForm = (props) => {
  const initializeForm = () => {
    return props.selectedActivity
      ? props.selectedActivity
      : {
          id: '',
          title: '',
          category: '',
          description: '',
          date: '',
          city: '',
          venue: '',
        };
  };
  const [activity] = useState(initializeForm);
  //Submit
  const handleFormSubmit = (activity) => {
    if (activity.id === '') {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      props.handleCreateActivity(newActivity);
    } else {
      props.handleEditActivity(activity);
    }
  };

  //Validation Errors
  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(3, 'Too Short!')
      .max(300, 'Too Long!')
      .required('Required'),
    city: Yup.string()
      .min(3, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    venue: Yup.string()
      .min(3, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    category: Yup.string()
      .min(3, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    date: Yup.string().required('Data is required').nullable(),
  });
  return (
    <Popup>
      <Background />
      <Section>
        <div className='form-style-10'>
          <h1>
            Create new activity
            <span>Fill the form and tell us about your activity!</span>
          </h1>
          <Formik
            initialValues={activity}
            validationSchema={SignupSchema}
            onSubmit={(values) => handleFormSubmit(values)}>
            {({ handleSubmit, isValid, isSubmitting, dirty }) => (
              <Form onSubmit={handleSubmit}>
                <div className='section'>
                  <span>1</span>About activity:
                </div>
                <div className='inner-wrap'>
                  <label>
                    Title
                    <Field name='title' type='text' />
                    <ErrorMessage
                      name='title'
                      render={(error) => (
                        <label style={{ color: 'red' }}>{error}</label>
                      )}
                    />
                  </label>
                  <label>
                    Description
                    <Field name='description' type='text' />
                    <ErrorMessage
                      name='description'
                      render={(error) => (
                        <label style={{ color: 'red' }}>{error}</label>
                      )}
                    />
                  </label>
                </div>

                <div className='section'>
                  <span>2</span>Where it's will happen?
                </div>
                <div className='inner-wrap'>
                  <label>
                    City
                    <Field name='city' type='text' />
                    <ErrorMessage
                      name='city'
                      render={(error) => (
                        <label style={{ color: 'red' }}>{error}</label>
                      )}
                    />
                  </label>
                  <label>
                    Venue
                    <Field name='venue' type='text' />
                    <ErrorMessage
                      name='venue'
                      render={(error) => (
                        <label style={{ color: 'red' }}>{error}</label>
                      )}
                    />
                  </label>
                </div>

                <div className='section'>
                  <span>3</span>When and what?
                </div>
                <div className='inner-wrap'>
                  <DataInput
                    name='date'
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={15}
                    timeCaption='time'
                    dateFormat='MMMM d, yyyy h:mm aa'
                  />
                  <label>
                    Category
                    <Field name='category' type='text' />
                    <ErrorMessage
                      name='category'
                      render={(error) => (
                        <label style={{ color: 'red' }}>{error}</label>
                      )}
                    />
                  </label>
                </div>
                <div className='button_container'>
                  <button
                    disabled={isSubmitting || !dirty || !isValid}
                    className='details_button'
                    type='submit'
                    content='Submit'>
                    {props.updateLoading ? 'Wait..' : 'Add'}
                  </button>
                  <button
                    className='details_button light_detail_button'
                    onClick={() => props.setEditMode(false)}>
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Section>
    </Popup>
  );
};
const mapStateToProps = ({
  activitiesState: { selectedActivity, updateLoading },
}) => {
  return { selectedActivity, updateLoading };
};

// Functions
const mapDispatchToProps = (dispatch) => {
  return {
    setEditMode: (boole) => dispatch(setEditMode(boole)),
    handleCreateActivity: (activity) =>
      dispatch(handleCreateActivity(activity)),
    handleEditActivity: (activity) => dispatch(handleEditActivity(activity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);

const Section = styled.section`
  max-width: 100%;
  margin: 0 auto;
  z-index: 999;
  position: relative;

  .react-datepicker-wrapper {
    width: 100%;
  }
`;
