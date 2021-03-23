import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../activities/reducer/ActivitiesActions';
import styled from 'styled-components';
import { Background, Popup } from '../../app/layout/styles';

const ModalContainer = ({ closeModal, modal }) => {
  if (modal) {
    return (
      <Popup>
        <Background onClick={() => closeModal()} />
        <Section>{modal}</Section>
      </Popup>
    );
  } else {
    return <div />;
  }
};

const mapStateToProps = ({ activitiesState: { modal } }) => {
  return { modal };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

const Section = styled.section`
  position: absolute;
  top: 15rem;
  left: 0;
  right: 0;
  bottom: 0;
  width: 40rem;
  height: 40rem;
  margin: 0 auto;
  z-index: 999;
`;
