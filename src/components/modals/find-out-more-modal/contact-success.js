import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from 'components/ui/title'
import { Paragraph } from 'components/ui/paragraph'
import PrimaryButton from 'components/ui/buttons/primary-button'

const CenterText = styled.div`
  text-align: center;
  max-width: 61rem;
  margin: 1.5rem auto 4rem;
`

const ContactContainer = styled.div`
  position: relative;
`

const ContactFooter = styled.div`
  position: relative;
`

const ContactSuccess = ({ hideModal }) => (
  <ContactContainer>
    <CenterText>
      <header>
        <Title>Thank you for the contact!</Title>
      </header>

      <Paragraph>
        Thank you. your inquiry was received. Our team will reach back out to
        you shortly.
      </Paragraph>

      <ContactFooter>
        <PrimaryButton
          onClick={hideModal}
          kind="xg"
          label="Return to the page"
        />
      </ContactFooter>
    </CenterText>
  </ContactContainer>
)

ContactSuccess.propTypes = {
  hideModal: PropTypes.func.isRequired,
}

export default ContactSuccess
