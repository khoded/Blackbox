import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/so-sc">GitHub</a>
        </div>
        <div className="column">
          <a href="https://github.com/">Community Guidelines</a>
          <a href="https://github.com/">Code of Conduct</a>
        </div>
        <div className="column">
          <p>
            <strong>Blackbox Testing Community</strong><br/>
            <br/>
          </p>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <p>Blackbox Testing Community © { new Date().getFullYear() }</p>
    </div>
  </footer>
)

export default Footer
