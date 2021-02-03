import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  getActivity,
  handleDeleteActivity,
  setEditMode,
} from './reducer/ActivitiesActions';
import { Background } from './ActivityForm';

const ActivityDetails = (props) => {
  return props.selectedActivity === null ? (
    <div />
  ) : (
    <Fragment>
      <Background />
      <Section>
        <img
          src={`assets/categoryImages/${props.selectedActivity.category}.jpg`}
          alt='activity'
          className='details_image'
        />
        <h1 className='details_title'>{props.selectedActivity.title}</h1>
        <p className='details_text'>{props.selectedActivity.description}</p>
        <div className='bottom_container'>
          <div className='location'>
            <p className='location-item'>{props.selectedActivity.city},</p>
            <p className='location-item'>{props.selectedActivity.venue}</p>
          </div>
          <div className='button_container'>
            <p className='details_date'>
              <span>{props.selectedActivity.date.slice(0, 10)}</span>{' '}
              {props.selectedActivity.date.slice(11, 20)}
            </p>
            <button
              className='details_button'
              onClick={() => props.setEditMode(true)}
            >
              Edit
            </button>
            <button
              className='details_button light_detail_button'
              onClick={() =>
                props.handleDeleteActivity(props.selectedActivity.id)
              }
            >
              {props.updateLoading ? 'Wait..' : 'Delete'}
            </button>
            <button
              className='details_button light_detail_button'
              onClick={() => props.getActivity(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Section>
    </Fragment>
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
    getActivity: (activity) => dispatch(getActivity(activity)),
    handleDeleteActivity: (id) => dispatch(handleDeleteActivity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails);

const Section = styled.section`
  background-color: var(--baseColor-Light);
  width: 100%;
  display: block;
  height: 40rem;
  margin: 1rem;
  border-radius: 0.5rem 0.5rem 0.5rem 0;
  overflow: hidden;
  position: relative;
  z-index: 999;

  .details_image {
    width: 100%;
    max-height: 25rem;
    object-fit: cover;
  }
  .details_title {
    position: absolute;
    z-index: 99;
    top: 0;
    font-size: 2rem;
    padding: 1rem 1.5rem;
    background-color: var(--baseColor-Light-2);
    color: var(--baseColor-Light);
  }
  .bottom_container {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
  }
  .button_container {
    display: flex;
    justify-content: flex-end;
  }

  .details_button {
    padding: 0.2rem 0.5rem;
    margin-left: 1rem;
    background-color: var(--baseColor-Dark-2);
    border: solid 0.1rem var(--baseColor-Dark-2);
    text-transform: uppercase;
    color: var(--baseColor);
    font-size: 1.2rem;
    transition: all 0.3s;
    cursor: pointer;
    outline: none;
    :hover {
      background-color: var(--baseColor);
      color: var(--baseColor-Dark-2);
    }
    :active {
      transform: scale(0.9);
    }
  }

  .light_detail_button {
    background-color: var(--baseColor);
    color: var(--baseColor-Dark-2);

    :hover {
      background-color: var(--baseColor-Dark-2);
      color: var(--baseColor);
    }
  }
  .details_text {
    padding: 1rem;
    font-size: 1.2rem;
  }

  .details_date {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    padding: 0.2rem 0.5rem;
    border: solid 0.1rem transparent;
    transition: all 0.3s;
    :hover {
      border: solid 0.1rem var(--baseColor-Dark-2);
    }

    span {
      font-weight: 700;
    }
  }

  .location {
    display: flex;
    justify-content: flex-end;
    opacity: 0.8;
    padding-bottom: 1rem;
  }

  .location-item {
    letter-spacing: 0.1rem;
  }

  .location-item:last-child {
    padding-left: 0.5rem;
  }
`;
