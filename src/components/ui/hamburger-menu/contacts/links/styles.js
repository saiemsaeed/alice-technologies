import styled from 'styled-components'
import { blue } from 'constants/theme'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const LinkItem = styled.li`
  align-items: baseline;
  margin-bottom: 1.5rem;
  border-bottom: 1.5px solid transparent;
  display: flex;
  justify-content: flex-start;
  &:hover {
    border-color: ${blue};
  }
`

export const Text = styled.div`
  color: ${blue};
  font-weight: 700;
  font-size: 1.5rem;
  line-height: normal;
  margin-left: 2.35rem;
`
