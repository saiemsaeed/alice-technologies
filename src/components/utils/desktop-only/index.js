import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

const DesktopOnly = styled.div`
  visibility: hidden;
  display: none;
  ${MEDIA.MIN_DESKTOP`
    visibility: visible;
    display: block;
`};
`

export default DesktopOnly
