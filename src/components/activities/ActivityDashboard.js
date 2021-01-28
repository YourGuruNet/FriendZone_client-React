import React from 'react';
import ActivityDetails from './ActivityDetails';
import ActivityList from './ActivityList';
import styled from 'styled-components';
import ActivityForm from './ActivityForm';

const ActivityDashboard = ({ activities }) => {
  return (
    <Section>
      <ActivityList activities={activities} />
      <div>
        <ActivityDetails />
        <ActivityForm />
      </div>
    </Section>
  );
};

export default ActivityDashboard;

const Section = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 2rem;
`;
