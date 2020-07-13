import styled from 'styled-components'

import { primaryColor } from 'constants/theme'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.div`
  padding: 0 9rem;
  text-align: center;

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

export const Title = styled.h2`
  text-align: center;
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.7;
  margin: 3rem 0;
  color: ${primaryColor};
  ${MEDIA.TABLET`
    font-size: 2.4rem;
    margin: 2rem 0;
  `}
`

export const CaseWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Case = styled.div`
  flex: 0 0 32%;
  max-width: 32%;
  padding: 0;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  img:hover {
    content: url(${props => props.hoverImage});
  }
  ${MEDIA.TABLET`
    flex: 0 0 48.5%;
    max-width: 48.5%; 
  `}
`
