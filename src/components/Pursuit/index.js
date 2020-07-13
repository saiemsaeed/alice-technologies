import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import scrollTo from 'gatsby-plugin-smoothscroll'
import LaptopRight from '../../../static/img/home/laptop-right.png'
import { primaryColor, purple, grey } from '../../constants/theme'
import MEDIA from '../../helpers/mediaTemplates'
import PrimaryButton from '../ui/buttons/primary-button'

const Section = styled.section`
  ${MEDIA.MIN_DESKTOP_MD`
    background: url(${LaptopRight});
    background-position: right top;
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 70vh;
    width: 100vw;
    margin-left: -50vw;
    left: 50%;
    position: relative;
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
    text-align: left;
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

const Container = styled.div`
  padding: 0 9rem;

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

const Spacer3 = styled.div`
  height: 4rem;
`

const PButton = styled.button`
  color: ${props => (props.selected ? `${purple}` : `${primaryColor}`)};
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

export const P = styled.div`
  color: ${primaryColor};
  font-size: 2.2rem;
  line-height: 1.7;
  font-weight: 400;
  height: max-content;
  max-width: 55rem;

  strong {
    font-weight: 800;
  }

  ${MEDIA.DESKTOP_XG`
    font-size: 1.6rem;
    max-width: 45rem;
  `};

  ${MEDIA.DESKTOP_MD`
    font-size: 1.6rem;
    max-width: 45rem;
  `};

  ${MEDIA.TABLET`
    font-size: 1.6rem;
    max-width: 100%;
  `};
`

const PButtonContainer = styled.div`
  max-width: 100%;
  white-space: nowrap;
`

const Pursuit = ({ from }) => {
  const [currentButton, setCurrentButton] = useState(0)
  
  // useEffect(() => {
  //   if (from) {
  //     scrollTo('#persuits')
  //   }
  // })

  return (
    <Section id="persuits">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Heading2>Pursuits or Preconstruction?</Heading2>
            <Spacer3 />
            <PButtonContainer>
              <PButton
                selected={currentButton === 0}
                onClick={() => setCurrentButton(0)}
              >
                Pursuits
              </PButton>
              <PButton
                selected={currentButton === 1}
                onClick={() => setCurrentButton(1)}
              >
                Preconstruction
              </PButton>
            </PButtonContainer>
            <Spacer3 />
            {currentButton === 0 ? (
              <P>
                Simulate different plans with ALICE to find the best option
                given your client’s needs
              </P>
            ) : (
              <P>
                Explore strategies to solve your most pressing project
                challenges so you can minimize risk, cost and duration
              </P>
            )}
            <Spacer3 />
            <PrimaryButton linkTo="/products" label="Learn More" kind="xg" />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Pursuit
