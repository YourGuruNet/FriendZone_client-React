import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo1 from '../assets/logo1.png';
import { GiMoon } from 'react-icons/gi';
import { BsSun } from 'react-icons/bs';
import { newActivity } from './activities/reducer/ActivitiesActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
  //Dark mode
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Header>
      <div className={darkMode ? 'light_mode dark_mode' : ' light_mode'}>
        <div className='navigation_container'>
          <Link to='/' className='logo_image'>
            <img src={Logo1} alt='friend zone' />
          </Link>
          <ul className='navigation_list'>
            <Link to='/' className='navigation_list-item'>
              Home
            </Link>
            <Link to='/activities' className='navigation_list-item'>
              Activities
            </Link>
            <Link to='/error' className='navigation_list-item'>
              ErrorTest
            </Link>
            <Link
              to='/activities'
              className='navigation_list-item new_activity'
              onClick={() => props.newActivity()}>
              new activity
            </Link>
            <button
              className='navigation_list-item dark_mode-button'
              onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <BsSun /> : <GiMoon />}
            </button>
          </ul>
        </div>
      </div>
    </Header>
  );
};

const mapStateToProps = ({
  activitiesState: { selectedActivity, loginUser },
}) => {
  return { selectedActivity, loginUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newActivity: () => dispatch(newActivity()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

const Header = styled.header`
  padding-top: 2.3rem;
  position: fixed;
  width: 100vw;
  z-index: 9999;

  .light_mode {
    background: var(--lightGradient);
    box-shadow: 0.2rem -3rem 3rem 3rem var(--baseColor-Dark-2);
  }
  .dark_mode {
    background: var(--darkGradient);
    box-shadow: 0.2rem -3rem 3rem 3rem var(--baseColor-Light-2);
  }
  .navigation_container {
    margin: 0 auto;
    max-width: 120rem;
    min-height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo_image :active {
    transform: scale(0.9);
  }

  .navigation_list {
    display: flex;
  }
  .navigation_list-item {
    text-decoration: none;
    background-color: transparent;
    padding: 1rem;
    font-size: 2rem;
    list-style: none;
    color: var(--baseColor);
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    border: solid 0.1rem transparent;
    :hover {
      border: solid 0.1rem var(--baseColor);
    }
    :active {
      transform: scale(0.9);
    }
  }
  .new_activity {
    font-family: inherit;
    border: solid 0.1rem var(--baseColor);
    :hover {
      background-color: var(--baseColor-Light-2);
    }
  }
  .dark_mode-button {
    font-size: 2.2rem;
    color: var(--baseColor);
    background-color: transparent;
    outline: none;

    :hover {
      color: var(--baseColor-Dark-2);
    }
  }
`;
