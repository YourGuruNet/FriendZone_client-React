import React, { useEffect } from 'react';
import { loadActivityFromBackend } from '../reducer/ActivitiesActions';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../Loading';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  getActivity,
  handleDeleteActivity,
  setEditMode,
} from '../reducer/ActivitiesActions';
import { Popup } from '../../../app/layout/styles';
import ActivityDetailHeader from './ActivityDetailHeader';
import ActivityDetailChat from './ActivityDetailChat';
import ActivityDetailSideBar from './ActivityDetailSideBar';

const FullViewActivity = ({ loadActivityFromBackend, selectedActivity }) => {
  const { id } = useParams();
  useEffect(() => {
    loadActivityFromBackend(id);
  }, [id, loadActivityFromBackend]);

  return selectedActivity === null ? (
    <Loading />
  ) : (
    <Popup>
      <Section>
        <div>
          <ActivityDetailHeader selectedActivity={selectedActivity} />
          <ActivityDetailChat />
        </div>
        <ActivityDetailSideBar />
      </Section>
    </Popup>
  );
};

const mapStateToProps = ({ activitiesState: { selectedActivity } }) => {
  return { selectedActivity };
};

// Functions
const mapDispatchToProps = (dispatch) => {
  return {
    setEditMode: (boole) => dispatch(setEditMode(boole)),
    getActivity: (activity) => dispatch(getActivity(activity)),
    handleDeleteActivity: (id) => dispatch(handleDeleteActivity(id)),
    loadActivityFromBackend: (id) => dispatch(loadActivityFromBackend(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullViewActivity);

const Section = styled.section`
  margin: 0 auto;
  max-width: 150rem;
  padding: 10rem 8rem 0 8rem;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 5rem;

  //////
  .details_image {
    width: 100%;
    max-height: 40rem;
    object-fit: cover;
  }
  .details_title {
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    padding: 1rem 1.5rem;
    background-color: var(--baseColor-Light-2);
    color: var(--baseColor-Light);
  }
  .bottom_container {
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
    text-decoration: none;
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
    border: solid 0.1rem transparent;
    transition: all 0.3s;
    padding: 0.3rem 0;
  }

  .location-item:last-child {
    padding-left: 0.5rem;
  }
`;

{
  /* <h1 className='details_title'>{selectedActivity.title}</h1>
<img
  src={`/assets/categoryImages/${selectedActivity.category}.jpg`}
  alt='activity-2'
  className='details_image'
/>
<p className='details_text'>{selectedActivity.description}</p>
<div className='bottom_container'>
  <div className='location'>
    <p className='details_date'>
      <span>{selectedActivity.date.slice(0, 10)}</span>{' '}
      {selectedActivity.date.slice(11, 20)}
    </p>
    <p className='location-item'>{selectedActivity.city},</p>
    <p className='location-item'>{selectedActivity.venue}</p>
  </div>
  <div className='button_container'>
    <Link to='/activities' className='details_button'>
      Go back
    </Link>
  </div>
</div> */
}
