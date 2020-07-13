import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { sendEmail } from 'helpers/httpFetch'

import FindOutMoreModal from '../../components/modals/find-out-more-modal/'

const ContactUsModalContainer = ({ open, hideModal }) => {
  const [success, setSuccess] = useState(false)

  const handleSubmit = data => {
    sendEmail(data).then(() => setSuccess(true))
  }

  return (
    <React.Fragment>
      <FindOutMoreModal
        open={open}
        hideModal={hideModal}
        handleSubmit={handleSubmit}
        contactSuccess={success}
      />
    </React.Fragment>
  )
}

ContactUsModalContainer.propTypes = {
  hideModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default ContactUsModalContainer
