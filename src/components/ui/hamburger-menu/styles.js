import styled from 'styled-components'
import { primaryColor } from 'constants/theme'

import MEDIA from '../../../helpers/mediaTemplates'

export const Container = styled.div`
  z-index: -1;
  ${MEDIA.MIN_DESKTOP`
    display: none;
 `};
`

export const Navigation = styled.div`
  background-color: ${primaryColor};
  box-shadow: rgba(0, 0, 0, 0.22) 0px 3rem 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  left: 0;
  z-index: -1;
  /* margin-top: 6rem; */
  overflow-y: auto;
  position: absolute;
  top: 0;
  width: 100%;
  ${MEDIA.MIN_TABLET`
    margin-top: 8rem;
  `};
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
`
