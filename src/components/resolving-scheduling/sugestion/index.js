import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Bullet,
  Content,
  Title,
  Amounts,
  Amount,
  Header,
  Outdated,
} from './styles'

const SchedulingSugestion = ({ schedulingItem, handleSelectScheduling }) => (
  <Container selected={schedulingItem.selected}>
    <Content
      onClick={() =>
        schedulingItem.selected
          ? null
          : handleSelectScheduling(schedulingItem.id)
      }
    >
      <Header>
        <Title selected={schedulingItem.selected}>{schedulingItem.label}</Title>
        {schedulingItem.isOutdated && <Outdated>Out of schedule</Outdated>}
      </Header>
      <Amounts>
        <Amount>{schedulingItem.days} Days</Amount>
        <Amount>${schedulingItem.amount}</Amount>
      </Amounts>
    </Content>
    <div>
      <Bullet color={schedulingItem.color} />
    </div>
  </Container>
)

SchedulingSugestion.propTypes = {
  schedulingItem: PropTypes.object.isRequired,
  handleSelectScheduling: PropTypes.func,
}

export default SchedulingSugestion
