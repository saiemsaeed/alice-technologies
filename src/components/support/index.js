import React from 'react'
import styled from 'styled-components'

import Title from 'components/ui/title'
import MEDIA from 'helpers/mediaTemplates'
import { greyDark } from 'constants/theme'
import ornament from '../../../static/svg/bg-triangle-particles-left.svg'

const Container = styled.section`
  padding-top: 6rem;
  background: linear-gradient(180deg, #f1f5f7 47.86%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  ${MEDIA.MIN_DESKTOP_XG`
    &::before, &::after {
      background-image: url('${ornament}');
      background-repeat: no-repeat;
      height: 40rem;
      width: 40rem;
      position: absolute;
    }
    &::before {
      content:'';
      left: calc(0% - 30rem);
      top: 78rem;
      ${MEDIA.MIN_DESKTOP_SM`
      `};
    }
    &::after {
      content:'';
      top: 20rem;
      left: calc(100% - 15rem);
      ${MEDIA.MIN_DESKTOP_SM`
      `};
    }
  `};
`

const Header = styled.header`
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 4rem;
  ${MEDIA.MIN_TABLET`
    padding: 0 9rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    padding: 0 14rem;
    margin-top: 15rem;
    margin-bottom: 10rem;
  `};
  ${MEDIA.MIN_DESKTOP_XG`
    max-width: 160rem;
    margin-left: auto;
    margin-right: auto;
  `};
`

const Main = styled.div`
  padding: 0 2rem;
  ${MEDIA.MIN_TABLET`
    padding: 0 9rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    padding: 0 14rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    padding: 0 16rem 0 14rem;
  `};

  ${MEDIA.MIN_DESKTOP_XG`
    max-width: 160rem;
    margin-left: auto;
    margin-right: auto;
  `};
`

const Subtitle = styled.h3`
  color: ${greyDark};
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.01em;
  margin-bottom: 5rem;
  font-weight: 700;
  ${MEDIA.MIN_TABLET`
    font-size: 20px;
    line-height: 1.5;;
  `};
`

const Paragraph = styled.p`
  color: ${greyDark};
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.01em;
  margin-bottom: ${({ first }) => (first ? '9rem' : '5rem')};
  ${MEDIA.MIN_TABLET`
    font-size: 20px;
    line-height: 1.5;;
  `};
`

const Support = () => (
  <Container>
    <Header>
      <Title>Support</Title>
    </Header>
    <Main>
      <Paragraph first>
        By using ALICE, you agree to this policy. We reserve the right to change
        this policy at any time without notice, so please check it regularly.
        Your continued use of ALICE constitutes acceptance of any changes. You
        also agree to and are responsible for ensuring that you comply with
        ALICE Terms of Use.
      </Paragraph>

      <Subtitle>1. Personal Data Protection System</Subtitle>
      <Paragraph>
        ALICE shall assign managers to oversee the protection and management of
        personal data. Roles and responsibilities regarding personal data will
        be clearly defined for all employees. Employees will receive guidance on
        best procedures when handling personal data.
      </Paragraph>

      <Subtitle> 2. Protection of Personal Data</Subtitle>
      <Paragraph>
        In order to ensure the security of personal data ALICE shall implement
        and oversee security measures necessary for prevention of leakage, loss
        or damage of personal data. Should any the handling of any personal data
        be outsourced to a third party, an agreement with that third party
        requiring the protection of personal data will be created. ALICE will
        provide instructions and supervision to the third party regarding the
        correct handling of personal data.
      </Paragraph>

      <Subtitle>
        3. Continuous Improvements to the Personal Data Protection Policy
      </Subtitle>
      <Paragraph>
        ALICE shall continuously review and look for improvements in its
        Personal Data Protection Policy to match with changes in business,
        social, legal or IT environments.
      </Paragraph>
    </Main>
  </Container>
)

export default Support
