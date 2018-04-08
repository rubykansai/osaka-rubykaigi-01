import React from 'react'

const Footer = () => (
  <section id="footer">
    <ul className="icons">
      <li>
        <a
          href="https://twitter.com/rubykansai"
          className="icon alt fa-twitter"
          target="_blank"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/RubyKansai/"
          className="icon alt fa-facebook"
          target="_blank"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/rubykansai"
          className="icon alt fa-github"
          target="_blank"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://rubykansai.doorkeeper.jp/contact/new"
          className="icon alt fa-envelope"
          target="_blank"
        >
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>Osaka RubyKaigi 01 &copy; 2018</li>
      <li>Design: RubyKansai</li>
    </ul>
  </section>
)

export default Footer
