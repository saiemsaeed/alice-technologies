import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import MEDIA from '../../helpers/mediaTemplates'
import createPlan from '../../../static/img/product/recipes-images.png'
import { primaryColor, purple } from '../../constants/theme'

export const Container = styled.div`
  padding: 0 9rem;
  display: flex;

  ${MEDIA.DESKTOP_MD`
    flex-direction: column;
  `};

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

const Section = styled.section`
  background-image: url(${createPlan});
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
  min-height: 85vh;
  display: flex;

  ${MEDIA.DESKTOP_MD`
  background-size: 50%;
`}
  ${MEDIA.DESKTOP`
  background-image: none;
  min-height: max-content;
`}
`

export const Heading2 = styled.h2`
  font-size: 4.8rem;
  line-height: 1.7;
  font-weight: 800;
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

export const P = styled.div`
  color: ${primaryColor};
  font-size: 2.2rem;
  line-height: 1.7;
  font-weight: 400;
  height: max-content;

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

const List = styled.ul`
  list-style-position: inside;
  list-style: none;

  margin: 3rem 0;

  li {
    color: ${primaryColor};
    font-size: 2.2rem;
    line-height: 1.7;
    font-weight: 400;
    margin: 1.3rem 0;

    ${MEDIA.DESKTOP_XG`
    font-size: 1.6rem;
    `};

    ${MEDIA.DESKTOP_MD`
    font-size: 1.6rem;
  `};

    ${MEDIA.TABLET`
    font-size: 1.6rem;
  `};

    :before {
      content: '✔ ';
      color: ${purple};
      /* ✓  */
    }
  }
`

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProductPlanning = () => (
  <Section>
    <Container>
      <Row>
        <StyledCol xs={12} lg={{ span: 5, offset: 7 }}>
          <Heading2>A Playbook for Planning</Heading2>
          <P>
            ALICE Recipes contain the construction tasks that guide your project
            plan. Use them to digitize your companys unique methods and scope
            and transfer key learnings from project to project so you never have
            to start planning from scratch
          </P>
          <List>
            <li>Capture the set of constraints that govern your project</li>
            <li>
              Document your firm’s construction costs and production rates
            </li>
            <li>
              Digitize your firm’s building methods and share best practices
              across projects
            </li>
            <li>Eliminates the need for creating manual schedules</li>
          </List>
        </StyledCol>
      </Row>
    </Container>
  </Section>
)

export default ProductPlanning
