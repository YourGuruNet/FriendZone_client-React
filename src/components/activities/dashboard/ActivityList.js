import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getActivity } from '../reducer/ActivitiesActions';
import ActivityListItem from '../dashboard/ActivityListItem';

const ActivityList = (props) => {
  return (
    <ActivitySection>
      {props.activities.map((activity) => {
        return (
          <ActivityListItem
            key={activity.id}
            activity={activity}
            getActivity={props.getActivity}
          />
        );
      })}
    </ActivitySection>
  );
};

const mapStateToProps = ({ activitiesState: { activities } }) => {
  return { activities };
};

// Functions
const mapDispatchToProps = (dispatch) => {
  return {
    getActivity: (activity) => dispatch(getActivity(activity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);

const ActivitySection = styled.section`
  .activity_item {
    background-color: var(--baseColor-Light);
    display: block;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem 0.5rem 0 0.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .location {
    display: flex;
    opacity: 0.8;
  }

  .location-item {
    letter-spacing: 0.1rem;
  }

  .location-item:last-child {
    padding-left: 0.5rem;
  }

  .date {
    letter-spacing: 0.1rem;
    opacity: 0.8;
    span {
      font-weight: 700;
    }
  }

  .hashtag {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    padding: 0.2rem 0.5rem;
    border: solid 0.1rem transparent;
    transition: all 0.3s;
    :hover {
      border: solid 0.1rem var(--baseColor-Dark-2);
    }
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
`;
