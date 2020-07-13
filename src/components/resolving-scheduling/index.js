import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { grey } from 'constants/theme'
import MEDIA from 'helpers/mediaTemplates'
import maxWidthContainer from 'helpers/maxWidthContainer'

import { Paragraph } from 'components/ui/paragraph'
import Title from 'components/ui/title'
import Suggestion from './sugestion'

const Container = styled.section`
  padding: 0 2rem;
  margin-bottom: 12rem;
  display: flex;
  flex-direction: column;
  ${MEDIA.MIN_TABLET`
    flex-direction: row;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    margin-top: 8rem;
    justify-content: flex-start;
    padding: 0 10rem 0 10rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    padding: 0 16rem;
  `};
  ${MEDIA.MIN_DESKTOP_XG`
    ${maxWidthContainer('160rem')}
  `};
`

const Header = styled.header`
  font-size: 1.3rem;
  ${MEDIA.MIN_PHONE`
   line-height: 2.7rem;
   font-size: 1.5rem
  `};
`

const List = styled.ul``

const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const ContentBlock = styled.div`
  ${MEDIA.MIN_PHONE`
    margin-right: 2rem;
  `};
  ${MEDIA.MIN_TABLET`
    padding-top: 10rem;
    max-width: 40rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    min-width: 38rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    max-width: 53rem;
    margin-right: 8rem;
    padding-top: 10rem;
  `};
  ${MEDIA.MIN_DESKTOP_XG`
    max-width: 53rem;
    margin-right: 14rem;
    padding-top: 10rem;
  `};
`

const SugestionsBlock = styled.div`
  padding-top: 2.5rem;
`

const SugestionsTitle = styled.h4`
  line-height: 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${grey};
  opacity: 0.6;
  margin-bottom: 1.5rem;
  margin-left: 2rem;
  ${MEDIA.MIN_PHONE`
   line-height: 21px;
   font-size: 12px;
   letter-spacing: 0.06em;
  `};
`

const CustomTitle = styled.span`
  line-height: 1.3;
  letter-spacing: -0.02em;
`

const ResolvingScheduling = props => {
  const {
    resolvingSchedulingList,
    selectedScheduling,
    handleSelectScheduling,
  } = props
  return (
    <Container>
      <ContentBlock>
        <Header>
          <Title>
            <CustomTitle>Resolving scheduling issues quickly</CustomTitle>
          </Title>
        </Header>
        <Paragraph>
          When issues come up on a project, ALICE can help your team to find an
          alternative schedule effortless; significantly reducing the cost and
          schedule impact the issue has on your project.
        </Paragraph>
      </ContentBlock>
      <SugestionsBlock>
        <Suggestion schedulingItem={selectedScheduling} />
        <SugestionsTitle>Suggestions for new schedules</SugestionsTitle>
        <List>
          {resolvingSchedulingList
            .filter(item => item.id !== selectedScheduling.id)
            .map(item => (
              <ListItem key={item.id}>
                <Suggestion
                  schedulingItem={item}
                  handleSelectScheduling={handleSelectScheduling}
                />
              </ListItem>
            ))}
        </List>
      </SugestionsBlock>
    </Container>
  )
}

ResolvingScheduling.propTypes = {
  resolvingSchedulingList: PropTypes.array,
  selectedScheduling: PropTypes.object,
  handleSelectScheduling: PropTypes.func,
}

export default ResolvingScheduling
