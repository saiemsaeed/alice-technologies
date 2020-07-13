import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

/* eslint-disable jsx-a11y/anchor-has-content */
const Link = ({ to, children, className, style, target, ...p }) => {
  const href = (to || {}).pathname || typeof to === 'string' ? to : null
  const props = { className, style, children, target }
  if (p.onClick) return <button {...p} {...props} />
  if (/^[./]/.test(href)) return <GatsbyLink {...props} {...p} to={href} />
  if (/^[.#]/.test(href)) return <a {...p} {...props} href={href} />
  if (/^[.http]/.test(href))
    return (
      <a
        {...p}
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      />
    )
  return <a {...p} {...props} href={href} />
}
/* eslint-enable jsx-a11y/anchor-has-content */

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  target: PropTypes.string,
}

export default Link
