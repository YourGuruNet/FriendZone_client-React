import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo1 from '../assets/logo1.png';
import { openModal } from '../components/activities/reducer/ActivitiesActions';
import { connect } from 'react-redux';
const Home = ({ openModal }) => {
  const localToken = window.localStorage.getItem('login');
  return (
    <Container>
      <img src={Logo1} alt='friend zone' />
      <h1 className='home_title'>Welcome at FriendZone!</h1>
      <div className='button_container'>
        {localToken ? (
          <Link className='home_button' to='/activities'>
            Go to activities
          </Link>
        ) : (
          <Fragment>
            <button className='home_button' onClick={() => openModal()}>
              Register
            </button>
            <button className='home_button' onClick={() => openModal()}>
              Login
            </button>
          </Fragment>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = ({ activitiesState: { modal } }) => {
  return { modal };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--lightGradient);
  text-align: center;
  font-size: 2rem;

  .home_title {
    color: var(--baseColor-Light);
  }
  .home_button {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    background-color: var(--baseColor-Dark-2);
    border: solid 0.1rem var(--baseColor-Dark-2);
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    text-transform: uppercase;
    color: var(--baseColor);
    font-size: 2.5rem;
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
  .button_container {
    padding: 0.5rem;
  }
`;
