import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.div`
  padding: 0 2rem;
  position: relative;
  ${MEDIA.MIN_TABLET`
    order: 2;
    flex:1;
  `};
`

export const GraphExplains = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto 4rem;
`

export const Picture = styled.picture`
  img {
    width: 100%;
  }
`
