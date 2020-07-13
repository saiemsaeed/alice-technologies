import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Accordion, Card, Button } from 'react-bootstrap'
import MEDIA from 'helpers/mediaTemplates'
import PrimaryButton from 'components/ui/buttons/primary-button'
import RichText from 'components/ui/rich-text'
import { primaryColor, purple } from '../../constants/theme'

const getMailLink = title =>
  `mailto:careers@alicetechnologies.com?subject=${title}`

const FlexBox = styled.div`
  display: flex;
`

const StyledCard = styled(Card)`
  padding: 2rem 4rem;
  ${MEDIA.PHONE_LG`
    padding: 1rem 2rem;
  `};
`

const StyledCardHeader = styled(Card.Header)`
  background-color: #fff;
  border-bottom: none;
`

const CardActionOpen = styled.div`
  &:after {
    content: '+';
    font-size: 3.6rem;
    color: ${primaryColor};
  }
`

const CardActionClose = styled.div`
  &:after {
    content: '-';
    font-size: 5.6rem;
    color: ${purple};
  }
`

const StyledCardBody = styled(Card.Body)`
  width: 90%;
`

const ApplyButtonContainer = styled.div`
  margin: 3rem 0;
`

export const P = styled.p`
  color: ${primaryColor};
  font-size: 1.2rem;
  line-height: 2;
  font-weight: 400;
  text-align: left;

  ${MEDIA.MIN_PHONE`
    font-size: 1.4rem;
  `};
  ${MEDIA.MIN_PHONE_LG`
    font-size: 1.75rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    font-size: 1.6rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    font-size: 2.25rem;
  `};
`

export const PBold = styled.p`
  color: ${({ open }) => (open ? purple : primaryColor)};
  font-size: 1.2rem;
  line-height: 2;
  font-weight: 800;
  text-align: left;

  ${MEDIA.MIN_PHONE`
    font-size: 1.4rem;
  `};
  ${MEDIA.MIN_PHONE_LG`
    font-size: 1.75rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    font-size: 1.6rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    font-size: 2.25rem;
  `};
`

const CareerContent = ({ title, location, body }) => {
  const [accordion, setAccordion] = useState(false)

  return (
    <Accordion>
      <StyledCard>
        <StyledCardHeader>
          <FlexBox>
            <div className="flex-grow-1">
              <PBold open={accordion}>{title}</PBold>
              <P>{location}</P>
            </div>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              onClick={() => setAccordion(!accordion)}
              style={{ textDecoration: 'none' }}
            >
              {accordion ? <CardActionClose /> : <CardActionOpen />}
            </Accordion.Toggle>
          </FlexBox>
        </StyledCardHeader>
        <Accordion.Collapse eventKey="0">
          <StyledCardBody>
            <RichText
              as="div"
              dangerouslySetInnerHTML={{ __html: body.html }}
            />
            <ApplyButtonContainer>
              <PrimaryButton
                outlink={true}
                linkTo={getMailLink(title)}
                label="Apply Now"
                kind="xg"
              />
            </ApplyButtonContainer>
          </StyledCardBody>
        </Accordion.Collapse>
      </StyledCard>
    </Accordion>
  )
}

CareerContent.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  salary: PropTypes.string,
  equity: PropTypes.string,
  visa: PropTypes.number,
  remote: PropTypes.number,
  content: PropTypes.string,
  body: PropTypes.object,
}

export default CareerContent
