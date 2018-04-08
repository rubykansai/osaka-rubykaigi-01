import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>About</h2>
              </header>
              <p>
                大阪で<a href="http://regional.rubykaigi.org/">地域Ruby会議</a>の大阪Ruby会議01を開催します。
              </p>

              <p>「 みなさんと一緒にRubyを楽しみましょう！ 」</p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style1 major fa-code" />
                </li>
                <li>
                  <span className="icon style2 major fa-code-fork" />
                </li>
                <li>
                  <span className="icon style3 major fa-road" />
                </li>
                <li>
                  <span className="icon style4 major fa-cogs" />
                </li>
                <li>
                  <span className="icon style5 major fa-mobile" />
                </li>
                <li>
                  <span className="icon style6 major fa-diamond" />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Timetable</h2>
              </header>

              <p>予告なく変更する場合がございます。</p>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th />
                      <th>Description</th>
                      <th>Speaker</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>09:30</td>
                      <td colSpan="2">Door Open</td>
                    </tr>
                    <tr>
                      <td>10:00</td>
                      <td colSpan="2">Opening</td>
                    </tr>
                    <tr>
                      <td>10:30</td>
                      <td>Keynote</td>
                      <td>
                        <a href="https://github.com/matz">まつもとゆきひろ</a>
                      </td>
                    </tr>
                    <tr>
                      <td>11:30</td>
                      <td colSpan="2">Lunch</td>
                    </tr>
                    <tr>
                      <td>13:00</td>
                      <td>Coming Soon.</td>
                      <td>
                        <a href="https://github.com/yuki24">yuki24</a>
                      </td>
                    </tr>
                    <tr>
                      <td>14:00</td>
                      <td>Coming Soon.</td>
                      <td>
                        <a href="https://github.com/tarosay">たろサ</a>
                      </td>
                    </tr>
                    <tr>
                      <td>15:00</td>
                      <td colSpan="2">Afternoon Break</td>
                    </tr>
                    <tr>
                      <td>15:30</td>
                      <td>Coming Soon.</td>
                      <td>
                        <td>Coming Soon.</td>
                      </td>
                    </tr>
                    <tr>
                      <td>17:40</td>
                      <td colSpan="2">Closing</td>
                    </tr>
                    <tr>
                      <td>18:30</td>
                      <td colSpan="2">Afterparty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Sponsors</h2>
              </header>
              <p>Coming Soon.</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Gold Sponsor</h3>
              <p>Massage...</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Gold Sponsor</h3>
              <p>Massage...</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Gold Sponsor</h3>
              <p>Massage...</p>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Team</h2>
            </header>
            <p>Coming Soon.</p>
          </div>
        </section>
      </div>
    )
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object,
}

export default Homepage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
