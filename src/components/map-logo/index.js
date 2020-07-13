import React from 'react'
import styled from 'styled-components'
import MapImage from '../../../static/img/home/map.png'
import { Row, Col } from 'react-bootstrap'
import ParsonsPNG from '../../../static/img/home/Parsons.png'
import TakenakaPNG from '../../../static/img/home/Takenaka.png'
import MultiplexPNG from '../../../static/img/home/Multiplex.png'
import HDCCPNG from '../../../static/img/home/HDCC.png'
import DprLogo from '../clients/logos/dprLogo'
import { primaryColor } from '../../constants/theme'
import MEDIA from '../../helpers/mediaTemplates'

const Section = styled.section`
  background-color: rgb(247, 248, 255);
  min-height: 40vh;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  background-image: url(${MapImage});
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  padding: 0 9rem;

  ${MEDIA.TABLET`
  padding: 0 2rem;
  `}
`

export const P = styled.div`
  color: ${primaryColor};
  font-size: 2.2rem;
  line-height: 1.7;
  font-weight: 500;
  height: max-content;

  strong {
    font-weight: 800;
    display: block;
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

const Img = styled.img`
  width: 75%;
  display: block;
  margin: auto;

  /* ${MEDIA.TABLET`
    width: 100%;
  `} */
`

const StyledCol = styled(Col)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const StyledDprLogo = styled.div`
  display: block;
  margin: auto;
  width: max-content;
`

const MapLogo = () => (
  <Section>
    <Container>
      <Row>
        <Col xs={12} md={4} className="my-4">
          <P className="m-auto text-center text-md-left py-4">
            Utilized by Some of the Most
            <strong>Innovative Construction Firms</strong> in the World
          </P>
        </Col>
        <Col xs={12} md={8}>
          <Row>
            <StyledCol xs={4}>
              <StyledDprLogo>
                <DprLogo />
              </StyledDprLogo>
            </StyledCol>
            <StyledCol xs={4}>
              <Img src={HDCCPNG} alt="HDCC" />
            </StyledCol>
            <StyledCol xs={4}>
              <Img src={MultiplexPNG} alt="Multiplex" />
            </StyledCol>
            <StyledCol xs={{ span: 4, offset: 2 }}>
              <Img src={ParsonsPNG} alt="Parsons" />
            </StyledCol>
            <StyledCol xs={{ span: 4 }}>
              <Img src={TakenakaPNG} alt="Takeana" />
            </StyledCol>
          </Row>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default MapLogo
