import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as Icon from 'react-feather';

export const ContactPageTemplate = ({ name, address, city_state_zip, phone, alt_phone, hours }) => {
  return (
    <div>
      <div className="container grid-md">
        <div className="card">
          <div className="card-header">
            Address
          </div>
          <div className="card-body">
            {name}<br />
            {address}<br />
            {city_state_zip}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Phone
          </div>
          <div className="card-body">
            <a href={ "tel:+" + phone.replace(/[^0-9.]/g, "") }>{phone}</a><br />
            {alt_phone}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Hours
          </div>
          <div className="card-body">
            {hours}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="d-inline-block mt-1">© 2019 Winchester Municipal Utilities</div>
        <div className="d-inline-block float-right mt-1">
          <a className="btn btn-sm btn-link tooltip tooltip-left" data-tooltip="Settings" rel="noopener noreferrer" href="https://wmu.geosync.cloud/admin" target="_blank">
            <Icon.Settings size={16}/>
          </a>
        </div>
      </div>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
  hours: PropTypes.string,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        name={frontmatter.name} 
        address={frontmatter.address}
        city_state_zip={frontmatter.city_state_zip}
        phone={frontmatter.phone}
        alt_phone={frontmatter.alt_phone}
        hours={frontmatter.hours}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name,
        address,
        city_state_zip,
        phone,
        alt_phone,
        hours
      }
    }
  }
`