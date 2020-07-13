import React from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../constants/theme'
import MEDIA from '../../helpers/mediaTemplates'
import ContactForm from '../forms/contact-form'

export const Heading2 = styled.h2`
  font-size: 4.8rem;
  line-height: 1.7;
  font-weight: 800;
  text-align: center;
  color: ${primaryColor};

  ${MEDIA.DESKTOP_XG`
    font-size: 3.2rem;
    margin-bottom: 0rem;
  `};

  ${MEDIA.DESKTOP_MD`
    font-size: 3.2rem;
  `};

  ${MEDIA.DESKTOP`
    font-size: 3.2rem;
  `};

  ${MEDIA.TABLET`
    font-size: 3rem;
    text-align: center;
    margin: 2rem 0;
  `};
`

const Section = styled.section``

const Container = styled.div`
  padding: 0 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

const ContactWrapper = styled.div`
  margin: auto;
  width: 70%;

  ${MEDIA.TABLET`
    width: 100%;
  `}
`

export const P = styled.div`
  color: ${primaryColor};
  font-size: 2.2rem;
  line-height: 1.7;
  font-weight: 400;
  height: max-content;
  text-align: center;

  strong {
    font-weight: 800;
  }

  ${MEDIA.DESKTOP_XG`
    font-size: 1.6rem;
  `};

  ${MEDIA.DESKTOP_MD`
    font-size: 1.6rem;
  `};

  ${MEDIA.TABLET`
    font-size: 1.6rem;
  `};
`

const Spacer3 = styled.div`
  height: 4rem;
  width: 100%;
`

const HomeContact = () => (
  <Section>
    <Container>
      <Heading2>What Challenge do you face?</Heading2>
      <P>Use ALICE on your next project</P>
      <Spacer3 />
      <ContactWrapper>
        <ContactForm />
      </ContactWrapper>
    </Container>
  </Section>
)

export default HomeContact
