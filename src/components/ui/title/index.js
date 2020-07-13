import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import { primaryColorLight, white, linearGradient3 } from 'constants/theme'

const colorStyle = ({ secondaryStyle }) => {
  if (secondaryStyle) {
    return `
      color: ${white}
    `
  }
  return `
    color: ${primaryColorLight};
    background: ${linearGradient3};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `
}

const Title = styled.h2`
  ${colorStyle};
  color: ${({ color }) => (color ? color : 'auto')};
  line-height: 3.3rem;
  min-height: 3.3rem;
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: ${({ modal }) => (modal ? '0rem' : '2.5rem')};
  ${MEDIA.MIN_DESKTOP_SM`
    line-height: 5rem;
    min-height: 5rem;
    font-size: 3.5rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    line-height: 5.1rem;
    min-height: 5.1rem;
    font-size: 4rem;
  `};
`

export default Title
