import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MEDIA from '../../helpers/mediaTemplates'
import { Row, Col } from 'react-bootstrap'
import { primaryColor, grey, purple, yellow } from '../../constants/theme'
import DataCenterPNG from '../../../static/img/product/data-center.png'
import rightShape from '../../../static/img/usecases/right-shape.png'
import dataDots from '../../../static/img/usecases/data-dots.png'

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

const DataCentersUseCase = () => (
  <StyledRow id="datacenters" bgImage={dataDots}>
    <StyledCol xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 0 }}>
      <Tag color={yellow}>Use Cases</Tag>
      <Heading2>Data Centers</Heading2>
      <P>
        For construction companies building data centers, speed is everything.
        Stand-out in this fast-growing segment by impressing tech clients with
        ALICEs first-of-its-kind BIM-based generative simulations to identify
        strategies for the fastest possible project completion times.m.
      </P>
    </StyledCol>
    <Col xs={{ span: 12, order: 0 }} lg={{ span: 6, order: 1 }}>
      <Img src={DataCenterPNG} shape={rightShape} />
    </Col>
  </StyledRow>
)

export default DataCentersUseCase
