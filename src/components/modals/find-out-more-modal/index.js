import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { greyLight } from 'constants/theme'
import Modal from 'components/modals/modal'
import Title from 'components/ui/title'
import IconCrossBlue from 'components/ui/icons/cross-blue'
import ContactForm from '../../forms/contact-form'

import ContactSuccess from './contact-success'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2em;
`

const CloseButton = styled.button`
  align-self: stretch;
  margin-bottom: 2.5rem;
  border: none;
  display: inline-block;
  width: 4.5rem;
  height: 4.5rem;
  text-align: center;
  background-color: transparent;
  outline: none;
  border-radius: 100rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${greyLight};
  }

  &:active {
    background-color: ${greyLight};
  }
`

const FindOutMoreModal = ({
  open,
  handleSubmit,
  hideModal,
  contactSuccess,
}) => (
  <Modal open={open} hideModal={hideModal}>
    <Header>
      <Title modal={true}>
        {!contactSuccess && 'Contact us to get started'}
      </Title>
      <CloseButton type="button" onClick={hideModal}>
        <IconCrossBlue />
      </CloseButton>
    </Header>
    {contactSuccess ? (
      <ContactSuccess hideModal={hideModal} />
    ) : (
      <ContactForm handleSubmit={handleSubmit} />
    )}
  </Modal>
)

FindOutMoreModal.propTypes = {
  open: PropTypes.bool.isRequired,
  contactSuccess: PropTypes.bool,
  hideModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
}

export default FindOutMoreModal
