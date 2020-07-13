import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Dialog, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

import MEDIA from 'helpers/mediaTemplates'

const CustomDialogContent = styled(DialogContent)`
  box-shadow: 0px 8px 3rem rgba(0, 0, 0, 0.5);
  border-radius: 1.5rem;
  width: 100% !important;

  ${MEDIA.MIN_DESKTOP_SM`
    width: 55vw !important;
    padding: 6rem 6.5rem !important;
  `};
`

export default class Modal extends PureComponent {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown = ({ key }) => {
    if (key === 'Escape') {
      this.props.open && this.props.hideModal()
    }
  }

  render() {
    const { children, open } = this.props

    return (
      <>
        <Dialog
          id="modal-contact"
          isOpen={open}
          style={{
            padding: '0 1em 0 1em',
            background: 'transparent',
            width: 'unset',
          }}
        >
          <CustomDialogContent>{children}</CustomDialogContent>
        </Dialog>
      </>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
}
