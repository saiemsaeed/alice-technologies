import React from 'react'
import { Link } from 'gatsby'

import { Container, Title, CaseWrapper, Case } from './styles'

import Infrastructure from '../../../static/img/home/infrastructure.png'
import InfrastructureHover from '../../../static/img/home/infrastructure-mo.png'
import Industrial from '../../../static/img/home/industrial.png'
import IndustrialHover from '../../../static/img/home/industrial-mo.png'
import Commercial from '../../../static/img/home/commercial.png'
import CommercialHover from '../../../static/img/home/commercial-mo.png'
import Mining from '../../../static/img/home/mining.png'
import MiningHover from '../../../static/img/home/mining-mo.png'
import OilAndGas from '../../../static/img/home/oil-and-gas.png'
import OilAndGasHover from '../../../static/img/home/oil-and-gas-mo.png'
import DataCenters from '../../../static/img/home/data-centers.png'
import DataCentersHover from '../../../static/img/home/data-centers-mo.png'

const CaseStudies = () => (
  <Container>
    <Title className="spacer-2">Industry Case Studies</Title>
    <CaseWrapper>
      <Case hoverImage={InfrastructureHover}>
        <Link to="/use-cases" state={{ from: 'infrastructure' }}>
          <img src={Infrastructure} alt="infrastructure" />
        </Link>
      </Case>
      <Case hoverImage={IndustrialHover}>
        <Link to="/use-cases" state={{ from: 'industrial' }}>
          <img src={Industrial} alt="industrial" />
        </Link>
      </Case>
      <Case hoverImage={CommercialHover}>
        <Link to="/use-cases" state={{ from: 'commercial' }}>
          <img src={Commercial} alt="commercial" />
        </Link>
      </Case>
      <Case hoverImage={MiningHover}>
        <Link to="/use-cases" state={{ from: 'mining' }}>
          <img src={Mining} alt="mining" />
        </Link>
      </Case>
      <Case hoverImage={OilAndGasHover}>
        <Link to="/use-cases" state={{ from: 'oilandgas' }}>
          <img src={OilAndGas} alt="oilandgas" />
        </Link>
      </Case>
      <Case hoverImage={DataCentersHover}>
        <Link to="/use-cases" state={{ from: 'datacenters' }}>
          <img src={DataCenters} alt="datacenters" />
        </Link>
      </Case>
    </CaseWrapper>
  </Container>
)

export default CaseStudies
