import React from 'react';
import FilterCalendar from './FilterCalendar';
import styled from 'styled-components';
const ActivityFilters = () => {
  return (
    <Section>
      <FilterCalendar />
    </Section>
  );
};

export default ActivityFilters;

const Section = styled.section`
  background-color: var(--baseColor-dark);
  width: 100%;
  margin-top: 3rem;
  overflow: hidden;
  position: relative;
`;
