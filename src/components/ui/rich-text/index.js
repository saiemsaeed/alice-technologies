import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import * as theme from 'constants/theme'

export const RichText = styled.div`
  h2 {
    color: ${theme.primaryColor};
    font-size: 2.5rem;
    line-height: 2.75rem;
    margin: 6rem 0 3rem;
  }

  h3 {
    color: ${theme.primaryColor};
    font-size: 1.75rem;
    line-height: 2rem;
    margin: 4rem 0 2rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  ul {
    list-style: circle;
    margin-left: 1.5em;
  }

  p,
  li {
    color: ${theme.grey};
    font-size: 1.3rem;
    line-height: 27px;
    margin: 2rem 0;
    ${MEDIA.MIN_PHONE`
      font-size: 15px;
    `}

    ${MEDIA.MIN_DESKTOP_SM`
      line-height: 2.7rem;
      font-size: 1.5  rem;
      letter-spacing: 0.01em;
    `}
    ${MEDIA.MIN_DESKTOP_LG`
      line-height: 1.5;
      font-size: 2rem;
      letter-spacing: 0.01em;
    `}
  }

`

export default RichText
