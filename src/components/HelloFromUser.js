import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logout, openModal } from './activities/reducer/ActivitiesActions';

const HelloFromUser = (props) => {
  return (
    <UserGreeting>
      <div className='container'>
        {props.loginUser === null ? (
          <h3 className='user_greeting'>
            Hey! come here to{' '}
            <span className='login_button' onClick={() => props.openModal()}>
              login
            </span>
          </h3>
        ) : (
          <h3 className='user_greeting'>
            Nice to see you here{' '}
            <span className='email'>{props.loginUser.displayName} </span>
            <span onClick={() => props.logout()} className='login_button'>
              Logout
            </span>
          </h3>
        )}
      </div>
    </UserGreeting>
  );
};

const mapStateToProps = ({ activitiesState: { loginUser } }) => {
  return { loginUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HelloFromUser);

const UserGreeting = styled.section`
  position: fixed;
  z-index: 99999999;
  width: 100vw;
  background-color: var(--baseColor-Dark);
  .container {
    position: relative;
    max-width: 155rem;
    margin: 0 auto;
  }
  .user_greeting {
    color: var(--baseColor-Light);
    text-align: right;
    padding: 0.3rem 1rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
    span {
      font-weight: 500;
    }
  }
  .email {
    letter-spacing: 0;
    padding-right: 0.5rem;
  }
  .login_button {
    background-color: transparent;
    font-weight: 300;
    outline: none;
    cursor: pointer;
    color: var(--baseColor-Light);
    border-bottom: solid 0.1rem var(--baseColor-Light);
    :hover {
      color: var(--baseColor-Light-2);
      border-bottom: solid 0.1rem var(--baseColor-Light-2);
    }
  }
  @media screen and (max-width: 25em) {
    .user_greeting {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;
