import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import MEDIA from '../../helpers/mediaTemplates'
import {
  primaryColor,
  red,
  greenLight,
  yellow,
  grey,
} from '../../constants/theme'
import Image1 from '../../../static/img/product/image-01.png'
import Image2 from '../../../static/img/product/image-02.png'
import Image3 from '../../../static/img/product/image-03.png'
import Image4 from '../../../static/img/product/image-04.png'

const Container = styled.div`
  padding: 0 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 1;
  transform: all 0.3s ease;
  margin: 1.6rem 0;
  cursor: pointer;

  span {
    width: 64px;
    height: 64px;
    background-color: green;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    background-color: ${({ selected, selectedColor }) =>
      selected ? selectedColor : '#fbf0fe'};
    color: ${({ selected }) => (selected ? '#fff' : '#e6c8f0')};
    font-weight: 900;
    font-size: 2.8rem;
    padding: 36px;
  }

  p {
    color: ${({ selected }) => (selected ? primaryColor : grey)};
    font-size: 1.6rem;
    font-weight: 600;
    text-align: left;
  }
`

const StyledCol = styled.div`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: contain;
  background-position: left center;
  height: 500px;
  /* box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.2); */
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem;
  width: auto;
  max-width: 700px;
  margin: 1rem auto;

  /* ${MEDIA.DESKTOP_LG`
     height: 300px;
     max-width: 520px;
  `} */

  ${MEDIA.DESKTOP`
     height: 480px;
  `}

  ${MEDIA.TABLET`
     height: 300px;
  `}

    :hover {
    .hd {
      transform: all 0.3s ease;
      opacity: 0;
    }
  }
`

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
  /* margin-top */
`

const Spacer3 = styled.div`
  height: 4rem;

  ${MEDIA.TABLET`
    display: ${({ xs }) => (xs === false ? 'none' : 'block')};
  `};
`

const Strategizing = () => {
  const [selected, setSelected] = useState(0)
  return (
    <Section>
      <Container>
        <Heading2>Stop scheduling and start strategizing</Heading2>
        <Spacer3 />
        <Row>
          <Col xs={12} lg={5}>
            {/* <StyledCol bgImage={Image1}> */}
            <ButtonWrapper
              selected={selected === 0}
              className="hd"
              onClick={() => setSelected(0)}
              selectedColor={greenLight}
            >
              <span>1</span>
              <p>Simulate multiple construction strategies in minutes</p>
            </ButtonWrapper>
            <ButtonWrapper
              selected={selected === 1}
              className="hd"
              selectedColor={greenLight}
              onClick={() => setSelected(1)}
            >
              <span>2</span>
              <p>Select, review and compare dozensof schedule options</p>
            </ButtonWrapper>
            <ButtonWrapper
              selected={selected === 2}
              className="hd"
              onClick={() => setSelected(2)}
              selectedColor={red}
            >
              <span>3</span>
              <p>Visually step-through your plan and daily activities</p>
            </ButtonWrapper>
            <ButtonWrapper
              selected={selected === 3}
              className="hd"
              onClick={() => setSelected(3)}
              selectedColor={yellow}
            >
              <span>4</span>
              <p>Track and optimize the utilization of key project resources</p>
            </ButtonWrapper>
            {/* </StyledCol> */}
          </Col>
          <Col xs={12} lg={7}>
            <StyledCol
              bgImage={
                selected === 0
                  ? Image1
                  : selected === 1
                  ? Image2
                  : selected === 2
                  ? Image3
                  : Image4
              }
            ></StyledCol>
          </Col>
          {/* <Col xs={12} lg={6}>
          <StyledCol bgImage={Image3}>
            <HoverDiv iconColor={red} className="hd">
              <span>3</span>
              <p>Visually step-through your plan and daily activities</p>
            </HoverDiv>
          </StyledCol>
        </Col>
        <Col xs={12} lg={6}>
          <StyledCol bgImage={Image4}>
            <HoverDiv iconColor={yellow} className="hd">
              <span>4</span>
              <p>
                Track and optimize the utilization of key project resources{' '}
              </p>
            </HoverDiv>
          </StyledCol>
        </Col> */}
        </Row>
      </Container>
    </Section>
  )
}

export default Strategizing
