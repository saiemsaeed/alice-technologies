import React, { useState } from 'react'
import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

import Layout from 'components/layout'
import ContactUsModalContainer from 'containers/contact-us-modal'

import Header from 'components/header'
import Support from 'components/support'
import Footer from 'components/footer'

const StyledHeader = styled(Header)`
  position: relative;
  ${MEDIA.MIN_DESKTOP_SM`
    padding-bottom: 4rem;
  `};
`

const Legal = () => {
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      <ContactUsModalContainer open={open} hideModal={() => setOpen(false)} />
      <StyledHeader showModal={() => setOpen(true)} />
      <Support />
      <Footer />
    </Layout>
  )
}

export default Legal
