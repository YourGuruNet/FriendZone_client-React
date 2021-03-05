import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Popup } from '../../../app/layout/styles';
import styled from 'styled-components';

const FilterCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Popup>
      <Section>
        <Calendar onChange={onChange} value={value} />
      </Section>
    </Popup>
  );
};

export default FilterCalendar;
const Section = styled.section`
  //.react-calendar is class used inside react-calendar
  .react-calendar {
    width: 100%;
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    border-color: transparent;
    background: var(--baseColor-Light);
  }
  .react-calendar__month-view__weekdays__weekday {
    font-size: 1.1rem;
    text-transform: uppercase;
  }
  .react-calendar__tile:hover {
    background: var(--baseColor-Dark);
    color: var(--baseColor-Light);
  }

  .react-calendar__tile,
  .react-calendar__month-view__days__day {
    font-size: 1.5rem;
  }
  .react-calendar__tile {
    height: 7rem;
    color: var(--baseColor-Dark);
  }
  .react-calendar__month-view__weekdays {
    color: var(--baseColor-Dark);
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: var(--baseColor-Dark);
    color: var(--baseColor-Light);
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background: var(--baseColor-Dark);
    color: var(--baseColor-Light);
  }
  .react-calendar__navigation button[disabled] {
    background: var(--baseColor-Dark);
    color: var(--baseColor-Light);
  }
  .react-calendar__navigation__label {
    color: var(--baseColor-Dark);
    font-size: 2rem;
  }
  .react-calendar__navigation__label:hover {
    background: var(--baseColor-Dark);
    color: var(--baseColor-Light);
  }
`;
