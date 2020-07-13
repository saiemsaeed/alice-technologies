import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import { grey } from 'constants/theme'

export const Paragraph = styled.p`
  color: ${grey};
  font-size: 1.3rem;
  line-height: 27px;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  ${MEDIA.MIN_PHONE`
    font-size: 15px;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    line-height: 2.7rem;
    font-size: 1.5  rem;
    letter-spacing: 0.01em;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    line-height: 1.5;
    font-size: 2rem;
    letter-spacing: 0.01em;
  `};
`

export default Paragraph
