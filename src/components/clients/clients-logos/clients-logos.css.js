import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${MEDIA.MIN_PHONE_LG`
    padding: 0 2rem;
  `};
  ${MEDIA.MIN_TABLET`
    justify-content: space-evenly;
    max-width: 60rem;
    margin: 0 auto;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    justify-content: space-between;
    padding: 0;
  `};
`

export const Client = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  width: 12rem;

  &:nth-child(odd) {
    justify-content: flex-start;
    margin-right: 1rem;
  }
  &:nth-child(even) {
    justify-content: flex-end;
  }
  &:nth-child(3) {
    padding-left: 1.25rem;
  }

  ${MEDIA.MIN_TABLET`
    &:nth-child(n) {
      margin: 0;
      padding: 0;
      justify-content: center;
    }
  `};
`
