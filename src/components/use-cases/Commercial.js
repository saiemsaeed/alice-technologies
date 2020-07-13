import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MEDIA from '../../helpers/mediaTemplates'
import { Row, Col } from 'react-bootstrap'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { primaryColor, grey, purple } from '../../constants/theme'

import CommercialProjects from '../../../static/img/product/commercial-projects.png'
import rightShape from '../../../static/img/usecases/right-shape.png'

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
  height: auto;
  width: 100%;
  border-radius: 1rem;

  background-image: ${({ shape }) => `url(${shape})`};
  background-size: contain;
`

const StyledRow = styled(Row)`
  margin: 6rem 0;
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
  background-size: contain;
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

const StyledCol = styled(Col)`
  padding-top: 2rem;
  padding-bottom: 2rem;
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

const CommercialUseCase = () => {
  const [currentButton, setCurrentButton] = useState(0)

  return (
    <StyledRow id="commercial">
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
        {currentButton === 0 ? (
          <>
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
          </>
        ) : (
          <>
            <P>
              <strong>Schedules created:</strong> 60 |
              <strong> Simulations run:</strong> 260M
              <br />
              <strong>Days saved with ALICE:</strong> 21
            </P>
            <P>
              ALICE was used to validate & improve upon a schedule for tender of
              a hotel remodel project with complex contraints
            </P>
            <P>
              <strong> Complex project contraints: </strong>
              290 Rooms offline at any given time with quite floors above and
              below work area
            </P>
            <P>
              <strong> Easy set up: </strong>
              10 ALICE recipes generated 3,500 tasks
            </P>
            <P>
              <strong> Millions of simulations: </strong>
              ALICE ran 360 million simulations and generated 60 construction
              schedules
            </P>
            <P>
              <strong> Validated P6 Schedule: </strong>
              ALICE validated the GC&apos;s already aggressive schedule, giving
              them confidence in their bid
            </P>
            <P>
              <strong> Further optimization: </strong>
              ALICE schedule beat the GC schedule by 21 days
            </P>
          </>
        )}
      </StyledCol>
      <Col xs={{ span: 12, order: 0 }} lg={{ span: 6, order: 1 }}>
        <Img src={CommercialProjects} shape={rightShape} />
      </Col>
    </StyledRow>
  )
}

export default CommercialUseCase
