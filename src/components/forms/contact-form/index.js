import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby-link'
import PrimaryButton from 'components/ui/buttons/primary-button'
import { Row, Col } from 'react-bootstrap'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { primaryColor, red } from '../../../constants/theme'
import { sendEmail } from 'helpers/httpFetch'

import MEDIA from 'helpers/mediaTemplates'

const Container = styled.div`
  width: 100%;
`

const TextArea = styled.textarea`
  border: 2px solid #dedede;
  color: #777;
  padding: 1.2rem 1rem;
  width: 100%;
  font-size: 2.2rem;

  :active, :focus, :hover {
      outline: none;
      font-size: 2.2rem;
  };
  
  :focus {
  border: 2px solid ${primaryColor};
  };

  ${MEDIA.DESKTOP_XG`
    font-size: 1.6rem;

    :active, :focus, :hover {
      font-size: 1.6rem;
    };
  `}

  ${MEDIA.DESKTOP`
    font-size: 1.6rem;

    :active, :focus, :hover {
      font-size: 1.6rem;
    };
  `}

  ${MEDIA.TABLET`
    font-size: 1.6rem;

    :active, :focus, :hover {
      font-size: 1.6rem;
    };
  `}
`

const InputField = styled.input`
  border: 2px solid #dedede;
  color: #777;
  padding: 1.2rem 1.2rem;
  width: 100%;
  font-size: 2.2rem;
  margin-bottom: 2rem;

  :active, :focus {
    outline: none;
  };
  
  :focus {
    border: 2px solid ${primaryColor};
  };

  ${MEDIA.DESKTOP_XG`
    font-size: 1.6rem;
  `}

  ${MEDIA.DESKTOP`
    font-size: 1.6rem;
  `}

  ${MEDIA.TABLET`
    font-size: 1.6rem;
  `}
`

const ErrorMessage = styled.div`
  color: ${red};
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: null,
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, errorMessage: null })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const { email, name, company, phone, description } = this.state

    if (!email) {
      return this.setState({ errorMessage: 'Please input your email address' })
    }
    if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(email)) {
      // eslint-disable-line
      return this.setState({
        errorMessage: 'Please input a valid email address',
      })
    }
    if (!name) {
      return this.setState({ errorMessage: 'Please input your name' })
    }
    if (!company) {
      return this.setState({ errorMessage: 'Please input your company name' })
    }
    // if (!phone) {
    //   return this.setState({ errorMessage: 'Please input your phone number' })
    // }
    // if (!(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(phone)) {
    //   return this.setState({ errorMessage: 'Please input a valid phone number' })
    // }
    if (!description) {
      return this.setState({
        errorMessage: 'Please input your project description',
      })
    }

    const FNAME = name.split(' ')[0]
    const LNAME = name.split(' ')[1]
    const PHONE = phone;
    addToMailchimp(email, { FNAME, LNAME, PHONE })
      .then(data => {
        if (data.result === 'error') {
          return this.setState({ errorMessage: data.msg })
        }
        sendEmail(this.state)
          .then(data => {
            navigate(form.getAttribute('action'))
          })
          .catch(error => alert(error))
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  render() {
    return (
      <Container>
        <form
          name="contact"
          method="post"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          action="/thanks/"
          onSubmit={this.handleSubmit}
        >
          <Row>
            <Col xs={12} md={6} className="my-2">
              <InputField
                name="name"
                placeholder="Your Name"
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={12} md={6} className="my-2">
              <InputField
                name="email"
                placeholder="Your Email"
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="my-2">
              <InputField
                name="company"
                placeholder="Company"
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={12} md={6} className="my-2">
              <InputField
                name="phone"
                placeholder="Phone"
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="my-2">
              <TextArea
                rows={10}
                name="description"
                onChange={this.handleChange}
                placeholder="Describe your project in 1 - 2 sentences"
              />
            </Col>
            <Col xs={12} className="py-4">
              <PrimaryButton label="Submit" kind="xg" type="submit" />
            </Col>
          </Row>
          {this.state.errorMessage && (
            <ErrorMessage>*{this.state.errorMessage}</ErrorMessage>
          )}
        </form>
      </Container>
    )
  }
}
