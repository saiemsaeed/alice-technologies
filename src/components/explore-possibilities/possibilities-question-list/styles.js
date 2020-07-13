import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.ul`
  margin-bottom: 3rem;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-left: 2rem;
  ${MEDIA.MIN_DESKTOP_SM`
    padding-left: 8rem;
    padding-right: 8rem;
  `};
  ${MEDIA.MIN_DESKTOP_MD`
    padding-left: 10rem;
  `};
  ${MEDIA.MIN_DESKTOP_XG`
    max-width: 132rem;
    margin: 0 auto;
    padding-left: 0;
  `};
`
