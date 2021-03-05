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
  //Calendar is class used inside react-calendar
  .react-calendar {
    width: 100%;
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    border-color: transparent;
    background: var(--baseColor-Light);
  }
  .react-calendar__month-view__weekdays__weekday {
    font-size: 1.1rem;
  }
  .react-calendar__tile:hover {
    background: var(--baseColor-Dark);
    color: var(--baseColor-Light);
  }
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: var(--baseColor-Dark);
    color: var(--baseColor-Light);
  }
  .react-calendar__tile,
  .react-calendar__month-view__days__day {
    font-size: 1.5rem;
  }
`;
