import React from 'react'
import PropTypes from 'prop-types'

import { IconSVG } from './styles'

const IconLogo = ({ small }) => (
  <IconSVG
    small={small}
    width="84"
    height="83"
    viewBox="0 0 84 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <rect
        opacity="0.45"
        width="24.5026"
        height="80.6607"
        rx="12.2513"
        transform="matrix(-0.890765 -0.454464 -0.453517 0.891247 58.407 11.1354)"
        fill="#F1C40F"
      />
      <rect
        opacity="0.45"
        width="24.5026"
        height="80.6607"
        rx="12.2513"
        transform="matrix(0.890765 -0.454464 0.453517 0.891247 25.6051 11.1354)"
        fill="#358EFE"
      />
      <ellipse
        cx="41.9909"
        cy="16.4737"
        rx="12.2942"
        ry="12.3104"
        fill="#3CBA7A"
      />
      <ellipse
        cx="67.5036"
        cy="66.4557"
        rx="12.2942"
        ry="12.3104"
        fill="#AB49C9"
      />
      <ellipse
        cx="16.4783"
        cy="66.4557"
        rx="12.2942"
        ry="12.3104"
        fill="#F1C40F"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="84" height="83" fill="white" />
      </clipPath>
    </defs>
  </IconSVG>
)

IconLogo.propTypes = {
  small: PropTypes.bool,
}

export default IconLogo
