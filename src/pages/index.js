import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic01 from '../assets/images/pic01.jpg'
import ateam from '../assets/images/sponsor/ateam.png'
import aiming from '../assets/images/sponsor/aiming.png'
import enechange from '../assets/images/sponsor/enechange.png'
import pic04 from '../assets/images/pic04.jpg'

import ruby from '../assets/images/team/ruby.jpg'
import steps from '../assets/images/team/steps.png'
import higaki from '../assets/images/team/higaki.png'
import honeniq from '../assets/images/team/honeniq.png'
import islands5 from '../assets/images/team/islands5.jpg'
import n11sh1 from '../assets/images/team/n11sh1.jpg'
import ogom from '../assets/images/team/ogom.jpg'
import rito from '../assets/images/team/rito.png'
import yucky from '../assets/images/team/yucky.jpg'
import znz from '../assets/images/team/znz.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const siteKeywords = this.props.data.site.siteMetadata.keywords

    return (
      <div>
        <Helmet
          title={siteTitle}
          meta={[
            { name: 'description', content: siteDescription },
            { name: 'keywords', content: siteKeywords },
          ]}
        />

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
                      <td>TechTalk</td>
                      <td>
                        <a href="https://github.com/yuki24">yuki24</a>
                      </td>
                    </tr>
                    <tr>
                      <td>14:00</td>
                      <td>TechTalk</td>
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
                      <td>Lightning Talks</td>
                      <td>
                        <a href="https://twitter.com/joker1007">joker1007</a>
                        <br />
                        <a href="https://twitter.com/anzu_mmm">kiryuanzu</a>
                        <br />
                        <a href="https://twitter.com/satomicchy">satomicchy</a>
                        <br />
                        <a href="https://twitter.com/yalab">yalab</a>
                        <br />
                        <a href="https://twitter.com/zaru">zaru</a>
                        <br />
                        ... Coming Soon.
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
            </div>
            <div className="col-4">
              <span className="image fit">
                <a href="http://www.a-tm.co.jp/" target="_blank">
                  <img src={ateam} alt="" />
                </a>
              </span>
              <h3>株式会社エイチーム</h3>
              <p className="align-left">
                エイチームは、ゲーム/アプリ・WebサービスやECサービスを手掛ける総合ITベンチャー企業。Ruby
                on
                Railsを用いたバックエンド開発やReactjsやVuejsといったフロントエンド開発を自社内で100%開発し、様々なサービスを運用しております。
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <a href="https://aiming-inc.com/ja/" target="_blank">
                  <img src={aiming} alt="" />
                </a>
              </span>
              <h3>株式会社 Aiming</h3>
              <p className="align-left">
                Aimingは、オンラインゲームの企画・プロデュース・開発・運営を行う会社です。リアルタイム通信技術と共に、オンラインゲームのサーバーを支えるweb技術としてRubyを使った開発を行っています。
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <a href="http://enechange.co.jp/" target="_blank">
                  <img src={enechange} alt="" />
                </a>
              </span>
              <h3>エネチェンジ株式会社</h3>
              <p className="align-left">
                エネチェンジは、電力・ガス料金の比較サイト「エネチェンジ」を基軸に電力データの解析など「エネルギーの未来をつくる」会社です。エネルギー革命が加速する今、Rubyを用いたシステム開発はかかせません。
              </p>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Team</h2>
              </header>
            </div>
            <div className="col-2">
              <a
                href="https://twitter.com/107steps"
                className="image avatar"
                target="_blank"
              >
                <img src={steps} alt="" />
              </a>
              <p>107steps</p>
            </div>
            <div className="col-2">
              <a href="" className="image avatar" target="_blank">
                <img src={ruby} alt="" />
              </a>
              <p>cuzic</p>
            </div>
            <div className="col-2">
              <a
                href="https://twitter.com/higaki"
                className="image avatar"
                target="_blank"
              >
                <img src={higaki} alt="" />
              </a>
              <p>higaki</p>
            </div>
            <div className="col-2">
              <a
                href="https://twitter.com/honeniq"
                className="image avatar"
                target="_blank"
              >
                <img src={honeniq} alt="" />
              </a>
              <p>honeniq</p>
            </div>
            <div className="col-2">
              <a
                href="https://github.com/Islands5"
                className="image avatar"
                target="_blank"
              >
                <img src={islands5} alt="" />
              </a>
              <p>islands5</p>
            </div>
            <div className="col-2">
              <a
                href="https://github.com/n11sh1"
                className="image avatar"
                target="_blank"
              >
                <img src={n11sh1} alt="" />
              </a>
              <p>n11sh1</p>
            </div>
            <div className="col-2">
              <a
                href="https://twitter.com/ogomr"
                className="image avatar"
                target="_blank"
              >
                <img src={ogom} alt="" />
              </a>
              <p>ogom</p>
            </div>
            <div className="col-2">
              <a
                href="https://twitter.com/chimame_rt"
                className="image avatar"
                target="_blank"
              >
                <img src={rito} alt="" />
              </a>
              <p>rito</p>
            </div>
            <div className="col-2">
              <a
                href="https://twitter.com/yucky_sun"
                className="image avatar"
                target="_blank"
              >
                <img src={yucky} alt="" />
              </a>
              <p>yucky</p>
            </div>
            <div className="col-2">
              <a
                href="https://github.com/znz"
                className="image avatar"
                target="_blank"
              >
                <img src={znz} alt="" />
              </a>
              <p>znz</p>
            </div>
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
        description
        keywords
      }
    }
  }
`
