import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const IconSVG = styled.svg`
  width: 3.2rem;
  height: 3.2rem;
  ${MEDIA.MIN_TABLET`
    ${({ small }) => {
      return !small ? 'width: 5.5rem; height: 5.5rem;' : ''
    }}
  `};
`
