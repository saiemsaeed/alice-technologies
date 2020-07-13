import React from 'react'
import {
  StyledCol,
  Section,
  Container,
  Title,
  PlanDescription,
  PlanIcon,
  Spacer3,
} from './styles'

import { Row, Col } from 'react-bootstrap'

import SolveIcon from '../../../static/img/home/solve-icon.png'
import OptimizeIcon from '../../../static/img/home/optimize-icon.png'
import BaseLineIcon from '../../../static/img/home/baseline-icon.png'
import DataIcon from '../../../static/img/home/data-icon.png'

const ContructionPlan = () => (
  <Section>
    <Container>
      <Col xs={12} xl={{ span: 6, offset: 6 }}>
        <Title>How Good Is Your Contruction Plan?</Title>
        <Row>
          <StyledCol xs={12} md={6}>
            <PlanIcon>
              <img src={SolveIcon} alt="solveIcon" />
            </PlanIcon>
            <PlanDescription>
              1. Solve your project&apos;s most complex constraints
            </PlanDescription>
          </StyledCol>
          <StyledCol xs={12} md={6}>
            <PlanIcon>
              <img src={OptimizeIcon} alt="optimzeIcon" />
            </PlanIcon>
            <PlanDescription>
              2. Optimize key project resources like labor, equipment and
              materials
            </PlanDescription>
          </StyledCol>
          <StyledCol xs={12} md={6}>
            <PlanIcon>
              <img src={BaseLineIcon} alt="baselineIcon" />
            </PlanIcon>
            <PlanDescription>
              3. Validate the constructability of your baselinae schedule
            </PlanDescription>
          </StyledCol>
          <StyledCol xs={12} md={6}>
            <PlanIcon>
              <img src={DataIcon} alt="dataIcon" />
            </PlanIcon>
            <PlanDescription>
              4. Improve your project planning using data, not heuristics
            </PlanDescription>
          </StyledCol>
        </Row>
        <Spacer3 />
      </Col>
    </Container>
  </Section>
)

export default ContructionPlan
