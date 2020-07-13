import styled from 'styled-components'
import MEDIA from '../../../../helpers/mediaTemplates'
import { accent, primaryColor } from '../../../../constants/theme'
import { Link } from 'gatsby'

export const Container = styled.div`
  position: relative;
  border: none;
  border: 1px solid #fbf0fe;
  background: #fbf0fe;
  color: ${accent};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  outline: none;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  text-align: center;
  transition: all 0.3s;
  min-width: 20rem;
  height: 6rem;
  display: flex;
  &:hover {
    cursor: pointer;
    background: ${primaryColor};
    border: 1px solid ${primaryColor};
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  }

  ${MEDIA.MIN_PHONE_LG`
  `};
`

export const ButtonContainer = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  &:hover {
    cursor: pointer;
    ${Container} {
      background: ${primaryColor};
      border: 1px solid ${primaryColor};
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
    }
  }
`

export const Label = styled.div`
  color: ${accent}
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-weight: bold;
`

export const StyledLink = styled(Link)`
  display: inline-block;
  &:hover {
    text-decoration: none;
  }
`

export const StyledAnchor = styled.a`
  display: inline-block;
  &:hover {
    text-decoration: none;
  }
`
