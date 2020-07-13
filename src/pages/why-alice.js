import React, { useState } from 'react'
import Layout from 'components/layout'
import Hero from 'components/why-alice-hero'

import ExplorePossibilitiesContainer from 'containers/explore-possibilities'
import ContactUsModalContainer from 'containers/contact-us-modal'

import Header from 'components/header'
import Footer from 'components/footer'
import CallToAction from 'components/call-to-action'
import CaptureConsolidate from 'components/capture-consolidate'
import ManageYourProject from 'components/sections/manage-your-project'
import TeamInSync from 'components/sections/team-sync'
import ResolvingSchedulingContainer from '../containers/resolving-scheduling'

const WhyAlice = () => {
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      <ContactUsModalContainer open={open} hideModal={() => setOpen(false)} />
      <Header showModal={() => setOpen(true)} />
      <Hero showModal={() => setOpen(true)} />
      <CaptureConsolidate />
      <ExplorePossibilitiesContainer />
      <ManageYourProject />
      <TeamInSync />
      <ResolvingSchedulingContainer />
      <CallToAction showModal={() => setOpen(true)} />
      <Footer />
    </Layout>
  )
}

export default WhyAlice
