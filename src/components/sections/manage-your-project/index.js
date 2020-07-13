import React from 'react'

import timelapsVideo from '../../../../static/video/alice-timelaps.mp4'

import Title from 'components/ui/title'
import { Container, Header, Paragraph, VideoWrap, TitleCustom } from './styles'

const ManageYourProject = () => (
  <Container>
    <Header>
      <Title>
        <TitleCustom>Manage your project intelligently</TitleCustom>
      </Title>
      <Paragraph>
        ALICE automates the process of keeping your plan&apos;s scope, cost, and
        schedule in sync by rippling through changes across the entire project
        as you make them; ensuring you always have a precise measurement of the
        cost and time impact.
      </Paragraph>
    </Header>
    <VideoWrap>
      <video autoPlay>
        <source src={timelapsVideo} type="video/mp4" />
        <track kind="captions" />
        Your browser does not support HTML5 video.
      </video>
    </VideoWrap>
  </Container>
)

export default ManageYourProject
