import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import MEDIA from '../../helpers/mediaTemplates'
import { primaryColor, purple, greenLight, blue } from '../../constants/theme'
import RecepiesIcon from '../../../static/img/product/recipes-icon.png'
import TeamBuildingIcon from '../../../static/img/product/teambuidling-icon.png'
import ScheduleIcon from '../../../static/img/product/schedules-icon.png'
import SchematicIcon from '../../../static/img/product/schematic-icon.png'
import DevelopIcon from '../../../static/img/product/develop-icon.png'
import DocumentIcon from '../../../static/img/product/documents-icon.png'

import PurpleBG from '../../../static/img/product/purple-bg.png'

const Container = styled.div`
  padding: 29rem 9rem 4rem 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA.TABLET`
    padding: 0 2rem;
    padding: 8rem 2rem 8rem 2rem;
  `}
`

export const Heading2 = styled.h2`
  font-size: 4.8rem;
  line-height: 1.2;
  font-weight: 800;
  text-align: center;
  color: ${primaryColor};
  margin: 2rem 0;

  ${MEDIA.DESKTOP_XG`
    font-size: 3rem;
  `};

  ${MEDIA.DESKTOP_MD`
    font-size: 3rem;
  `};

  ${MEDIA.DESKTOP`
    font-size: 3rem;
  `};

  ${MEDIA.TABLET`
    font-size: 2.8rem;
    text-align: center;
  `};
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

const Section = styled.section`
  /* margin: 12rem 0; */
  background-image: url(${PurpleBG});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
`

const Spacer3 = styled.div`
  height: 4rem;

  ${MEDIA.TABLET`
    display: ${({ xs }) => (xs === false ? 'none' : 'block')};
  `};
`

const CardOne = styled.div`
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  height: 40rem;
  padding: 15%;
  margin: 1rem 0;

  img {
    height: 64px;
    width: 64px;
    margin-bottom: 3rem;
  }
  h4 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
  p {
    font-weight: 1.2rem;
    font-weight: 400;
    text-align: center;
  }
`

const CardTwo = styled.div`
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* height: 40rem; */
  padding: 2%;

  img {
    height: 128px;
    width: 128px;
    margin-bottom: 3rem;
  }
  h4 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${primaryColor};

    ${MEDIA.TABLET`
        font-size: 1.6rem;
        margin-bottom: 0;
    `}
  }
  p {
    font-size: 1.4rem;
    font-weight: 800;
    color: ${({ color }) => color};
  }

  ul {
    list-style: inside;
    margin-top: 2rem;

    li {
      color: ${({ color }) => color};
      margin: 1.3rem 0;

      span {
        color: ${primaryColor};
        font-size: 1.8rem;
        line-height: 1.7;
        font-weight: 500;

        ${MEDIA.DESKTOP_XG`
    font-size: 1.6rem;
    `};

        ${MEDIA.DESKTOP_MD`
    font-size: 1.4rem;
    `};

        ${MEDIA.TABLET`
    font-size: 1.4rem;
    margin-top: 1rem;
  `};
      }
    }
  }
`

const UseAlice = () => (
  <Section>
    <Container>
      <Heading2>
        USE ALICE ON: <br /> Your next pursuit
      </Heading2>
      <Spacer3 />
      <Row>
        <Col xs={12} lg={4}>
          <CardOne bgColor={purple}>
            <img src={RecepiesIcon} alt={'Don’t start from scratch'} />
            <h4>Don’t start from scratch</h4>
            <p>Re-usable recipes help you quickly create new bid schedules</p>
          </CardOne>
        </Col>
        <Col xs={12} lg={4}>
          <CardOne bgColor={greenLight}>
            <img src={TeamBuildingIcon} alt={'Find the best way to build'} />
            <h4>Find the best way to build</h4>
            <p>
              Simulate many different plans with ALICE to find the best plan
              given your client’s needs
            </p>
          </CardOne>
        </Col>
        <Col xs={12} lg={4}>
          <CardOne bgColor={blue}>
            <img src={ScheduleIcon} alt={'Show, don’t tell'} />
            <h4>Show, don’t tell</h4>
            <p>
              Demonstrate to your client you’ve explored many different
              strategies for their project, and easily justify the one you’ve
              chosen with visual, 4D schedules
            </p>
          </CardOne>
        </Col>
      </Row>
      <Spacer3 />
      <Spacer3 />
      <Heading2>
        USE ALICE ON: <br /> Your next preconstruction project
      </Heading2>
      <P>Intelligence Preconstruction Planning</P>
      <Spacer3 />
      <Row>
        <Col xs={12} lg={4}>
          <CardTwo color={purple}>
            <img src={SchematicIcon} alt={'SCHEMATIC DESIGN'} />
            <p>Preconstruction</p>
            <h4>SCHEMATIC DESIGN</h4>
            <ul>
              <li>
                <span>
                  Automatically produce 4D schedules during early stages of
                  planning
                </span>
              </li>
              <li>
                <span>Explore strategy with clients</span>
              </li>
              <li>
                <span>Onboard new projects quickly </span>
              </li>
              <li>
                <span>
                  Rapidly evaluate the impact your high level design decisions
                  have on your construction plan
                </span>
              </li>
            </ul>
          </CardTwo>
        </Col>
        <Col xs={12} lg={4}>
          <CardTwo color={greenLight}>
            <img src={DevelopIcon} alt={'DESIGN DEVELOPMENT'} />
            <p>Preconstruction</p>
            <h4>DESIGN DEVELOPMENT</h4>
            <ul>
              <li>
                <span>Analyze cost and schedule impact of design changes</span>
              </li>
              <li>
                <span>
                  Simulate and analyze complicated constraints related to key
                  project resources (labor, equipment, materials)
                </span>
              </li>
              <li>
                <span>Explore strategies to reduce cost and build faster</span>
              </li>
            </ul>
          </CardTwo>
        </Col>
        <Col xs={12} lg={4}>
          <CardTwo color={blue}>
            <img src={DocumentIcon} alt={'CONSTRUCTION DOCUMENTS'} />
            <p>Buyout</p>
            <h4>CONSTRUCTION DOCUMENTS</h4>
            <ul>
              <li>
                <span>Virtual Lean Planning</span>
              </li>
              <li>
                <span>Develop accurate estimates on labor requirements</span>
              </li>
              <li>
                <span>
                  Buyout trades with metrics on manpower, durations, and scope
                </span>
              </li>
              <li>
                <span>Easily Export to P6 and CSV</span>
              </li>
            </ul>
          </CardTwo>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default UseAlice
