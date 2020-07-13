import React from 'react'
import linksWhiteList from '../../../../../helpers/links-white-list'

import iconPhone from './../../../../../../static/svg/icon-phone-blue.svg'
import iconLinkedin from './../../../../../../static/svg/icon-linkedin-blue.svg'
import iconLocation from './../../../../../../static/svg/icon-location-blue.svg'

import { Container, LinkItem, Text } from './styles'

const [phone, address, linkedin] = linksWhiteList[2].links

const ContactsLinks = () => (
  <Container>
    <LinkItem>
      <img src={iconPhone} alt="" />
      <a href={phone.href}>
        <Text>{phone.label}</Text>
      </a>
    </LinkItem>
    <LinkItem>
      <img src={iconLinkedin} alt="" />
      <a href={linkedin.href}>
        <Text>{linkedin.label}</Text>
      </a>
    </LinkItem>
    <LinkItem>
      <img src={iconLocation} alt="" />
      <a href={address.href}>
        <Text>
          <div>1040 Noel Dr Suite 203</div>
          <div>Menlo Park, CA 94025</div>
        </Text>
      </a>
    </LinkItem>
  </Container>
)

export default ContactsLinks
