import React from 'react'
import { Container, HeroTitle, Spacer3, P } from './styles'

import meetingPNG from '../../../static/img/about/meeting.png'

const Hero = () => (
  <Container>
    <HeroTitle>The Journey</HeroTitle>
    <Spacer3 />
    <P>
      Founder and CEO, René Morkos, grew up in the construction business. The
      son of a civil engineer, his first job was as a draftsman. He later
      managed projects large and small, from Beirut to Dubai to Afghanistan to
      Athens. On every job he had heard the same questions. How can we build
      faster? What can we do to speed up the job? Why are my crews waiting?
    </P>
    <Spacer3 />
    <img src={meetingPNG} alt="meeting" />
    <Spacer3 />
    <P>
      Its when he attended Stanford University for a PhD in Construction
      Management where Morkos gained better insights into how modern computer
      technology and artificial intelligence could be applied to the
      construction industry.
    </P>
    <Spacer3 />
    <P>
      ALICE Technologies is working with some of the largest construction
      companies in the world to help them build faster and more cheaply. We
      integrate directly with leading Building Information Management systems
      and generate sophisticated 4D (with time as the fourth dimension) planning
      routines and recipes that make it drop-dead simple to optimize the most
      complex projects. As a customer of ours who’s a 35-year veteran scheduler
      likes to say, anyone can become an ALICE expert in half a day.
    </P>
    <br />
    <P>
      Our growing team is made up industry experts, construction doers, and a
      team of engineers that is out to solve constructions biggest problems.
    </P>
  </Container>
)

export default Hero
