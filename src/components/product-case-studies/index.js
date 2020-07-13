import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import MEDIA from '../../helpers/mediaTemplates'
import {
  primaryColor,
  grey,
  purple,
  greenLight,
  blue,
  yellow,
} from '../../constants/theme'
import infrastructurePNG from '../../../static/img/product/infrastructure.png'
import OilGasPNG from '../../../static/img/product/oil-gas.png'
import DataCenterPNG from '../../../static/img/product/data-center.png'
import CommercialProjects from '../../../static/img/product/commercial-projects.png'

export const Container = styled.div`
  padding: 0 9rem;
  display: flex;
  flex-direction: column;

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

export const Title = styled.h2`
  font-size: 4.8rem;
  line-height: 1.7;
  font-weight: 800;
  color: ${primaryColor};
  text-align: center;

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
    margin: 2rem 0;
  `};
`

export const Heading2 = styled.h2`
  font-size: 4.8rem;
  line-height: 1.7;
  font-weight: 800;
  color: ${primaryColor};
  margin-bottom: 1rem;

  ${MEDIA.DESKTOP_XG`
    font-size: 3.2rem;
  `};

  ${MEDIA.DESKTOP_MD`
    font-size: 3.2rem;
  `};

  ${MEDIA.DESKTOP`
    font-size: 3rem;
  `};

  ${MEDIA.TABLET`
    font-size: 2.4rem;
    margin: 2rem 0;
  `};
`

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 1rem;
`

const StyledRow = styled(Row)`
  margin: 6rem 0;
`

export const P = styled.div`
  color: ${primaryColor};
  font-size: 2.2rem;
  line-height: 1.7;
  font-weight: 400;
  height: max-content;
  padding: 0.5rem 0;

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

const Tag = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({ color }) => (color ? color : grey)};
`

const List = styled.ul`
  list-style: inside;
  margin-top: 2rem;

  li {
    color: ${primaryColor};
    font-size: 1.8rem;
    line-height: 1.7;
    font-weight: 400;
    margin: 1.3rem 0;

    ${MEDIA.DESKTOP_XG`
    font-size: 1.4rem;
    `};

    ${MEDIA.DESKTOP_MD`
    font-size: 1.4rem;
  `};

    ${MEDIA.TABLET`
    font-size: 1.4rem;
  `};
  }
`

const PButtonContainer = styled.div`
  max-width: 100%;
  white-space: nowrap;
  margin: 1rem 0;
`

const PButton = styled.button`
  color: ${props => (props.selected ? `${purple}` : `${grey}`)};
  border: none;
  font-size: 2.4rem;
  font-weight: 500;
  padding: 1rem 2.8rem;
  border-bottom: ${props =>
    props.selected ? `2px solid ${purple}` : `2px solid ${grey}`};
  outline: none;
  :focus,
  :active {
    outline: none;
  }

  ${MEDIA.DESKTOP_XG`
    font-size: 1.8rem;
  `};

  ${MEDIA.DESKTOP_MD`
    font-size: 1.8rem;
  `};

  ${MEDIA.DESKTOP`
    font-size: 1.8rem;
  `};

  ${MEDIA.TABLET`
    font-size: 2rem;
  `};
`

const StyledCol = styled(Col)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const ProductCaseStudies = () => {
  const [currentButton, setCurrentButton] = useState(0)

  return (
    <section>
      <Container>
        <Title>Industry Case Studies</Title>
        <StyledRow>
          <Col xs={12} lg={6}>
            <Img src={infrastructurePNG} />
          </Col>
          <StyledCol xs={12} lg={6}>
            <Tag color={greenLight}>Use Cases</Tag>
            <Heading2>$600M InfrastructureProject</Heading2>
            <P>
              <strong>P6 Schedule</strong> 1,281 days |
              <strong> ALICE Schedule:</strong> 1,212 days
            </P>
            <P>
              <strong>Days of savings with ALICE:</strong> 69
            </P>
            <P>
              <strong>Objective:</strong> Test ALICE against P6 to identify and
              validate potential duration savings
            </P>
            <P>
              <strong>Project:</strong> 20km highway including overpasses
            </P>
            <List>
              <li>
                Two teams worked separately, one working with P6 and one working
                with ALICE, with results compared at the end
              </li>
              <li>
                After 6 months of meticulous analysis – the ALICE team came out
                as the clear winner with a more optimized and significantly
                faster schedule.
              </li>
            </List>
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 0 }}>
            <Tag color={purple}>Use Cases</Tag>
            <Heading2>Commercial Projects</Heading2>
            <PButtonContainer>
              <PButton
                selected={currentButton === 0}
                onClick={() => setCurrentButton(0)}
              >
                Ariport
              </PButton>
              <PButton
                selected={currentButton === 1}
                onClick={() => setCurrentButton(1)}
              >
                Hotel
              </PButton>
            </PButtonContainer>
            <P>
              <strong>Project Value:</strong> $3B |
              <strong> ALICE Duration Savings:</strong> 47 Days
            </P>
            <P>
              ALICE solved complex crane constraint to unlock significant
              duration savings. Made the unknown, possible.
            </P>
            <List>
              <li>
                ALICE was used to explore optimal sequencing to the complex roof
                structure of a multi-billion dollar airport in Asia.
              </li>
              <li>
                Construction team used ALICE to explore various crane placements
                and directions – an analysis that was not possible to do with
                traditional planning methods.
              </li>
              <li>
                The ALICE sequence optimized crane time and usage, further
                reducing time and cost of equipment onsite.
              </li>
            </List>
          </StyledCol>
          <Col xs={{ span: 12, order: 0 }} lg={{ span: 6, order: 1 }}>
            <Img src={CommercialProjects} />
          </Col>
        </StyledRow>
        <StyledRow>
          <Col xs={12} lg={6}>
            <Img src={OilGasPNG} />
          </Col>
          <StyledCol xs={12} lg={6}>
            <Tag color={blue}>Use Cases</Tag>
            <Heading2>Oil & Gas Projects</Heading2>
            <P>
              Not only are the tools and labour required for executing a
              turnaround extremely expensive, but the revenue lost through
              shutting down elements of production can amount to a significant
              portion of an annual budget. ALICE helps refineries achieve a
              return to normal processes on time, on budget, with no harm to
              staff, and with as little unplanned work as possible
            </P>
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 0 }}>
            <Tag color={yellow}>Use Cases</Tag>
            <Heading2>Data Centers</Heading2>
            <P>
              For construction companies building data centers, speed is
              everything. Stand-out in this fast-growing segment by impressing
              tech clients with ALICE&apos;s first-of-its-kind BIM-based generative
              simulations to identify strategies for the fastest possible
              project completion times.m.
            </P>
          </StyledCol>
          <Col xs={{ span: 12, order: 0 }} lg={{ span: 6, order: 1 }}>
            <Img src={DataCenterPNG} />
          </Col>
        </StyledRow>
      </Container>
    </section>
  )
}

export default ProductCaseStudies
