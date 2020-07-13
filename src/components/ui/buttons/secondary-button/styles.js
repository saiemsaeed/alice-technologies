import styled from 'styled-components'
import { blue, white } from 'constants/theme'

const buttonStyle = ({ kind }) => {
  if (kind == 'small') {
    return smallStyle()
  } else if (kind == 'large') {
    return largeStyle()
  }
  return mdStyle()
}

const smallStyle = () => `
  padding: 1.2rem 0;
  width: 18.3rem;
`

const mdStyle = () => `
padding: 1.2rem 0;
width: 18.3rem;
`

const largeStyle = () => `
  padding: 1.2rem 0;
  width: 18.3rem;
`

export const Container = styled.button`
  border: none;
  border: 1px solid ${({ secondary }) => (secondary ? blue : white)};
  border-radius: 200rem;
  background: transparent;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  color: ${({ secondary }) => (secondary ? blue : white)};
  cursor: pointer;
  font-size: 1.2rem;
  font-family: 'Manrope';
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.06em;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  text-align: center;
  transition: all 0.3s;

  ${buttonStyle}
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }
`
