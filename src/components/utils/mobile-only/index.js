import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

const MobileOnly = styled.div`
  ${MEDIA.MIN_DESKTOP`
    visibility: hidden;
    display: none;
  `};
`

export default MobileOnly
