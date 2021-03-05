import React from 'react';
import FilterCalendar from './FilterCalendar';
import styled from 'styled-components';
import { FaFilter } from 'react-icons/fa';
const ActivityFilters = () => {
  return (
    <Section>
      <div className='filter_container'>
        <h1 className='filter_title'>
          <FaFilter /> Filter
        </h1>
        <ul className='filter_list'>
          <li className='filter_list-item'>All Activities</li>
          <li className='filter_list-item'>Fallowing</li>
          <li className='filter_list-item'>Going</li>
        </ul>
      </div>
      <FilterCalendar />
    </Section>
  );
};

export default ActivityFilters;

const Section = styled.section`
  width: 100%;
  margin-top: 3rem;

  .filter_container {
    background-color: var(--baseColor-Light);
    width: 100%;
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    margin-bottom: 1rem;
    padding: 1rem;
  }
  .filter_title {
    font-size: 2rem;
  }
  .filter_list {
    list-style: none;
    padding: 1rem;
    font-size: 1.4rem;
  }
  .filter_list-item {
    padding: 0.3rem;
    cursor: pointer;
  }
  .filter_list-item:hover {
    background-color: var(--baseColor-Dark);
    color: var(--baseColor-Light);
  }
`;
