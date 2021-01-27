import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo1 from '../assets/logo1.png';
import { GiMoon } from 'react-icons/gi';
import { BsSun } from 'react-icons/bs';

const NavigationBar = () => {
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
          <img src={Logo1} alt='friend zone' />
          <ul className='navigation_list'>
            <li className='navigation_list-item'>Home</li>
            <li className='navigation_list-item'>Activities</li>
            <li className='navigation_list-item'>
              <button
                className='dark_mode-button'
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <BsSun /> : <GiMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Header>
  );
};

export default NavigationBar;

const Header = styled.header`
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
    width: 120rem;
    min-height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navigation_list {
    display: flex;
  }
  .navigation_list-item {
    padding: 1rem;
    font-size: 2rem;
    list-style: none;
    color: var(--baseColor);
    text-transform: uppercase;
  }
  .dark_mode-button {
    font-size: 2.2rem;
    color: var(--baseColor);
    background-color: transparent;
    outline: none;
    border: none;
    :hover {
      color: var(--baseColor-Dark-2);
    }
  }
`;
