import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>大阪Ruby会議2018</h2>
    <ul>
      <li>日付：2018年7月21日（土）</li>
      <li>場所：大阪科学技術センター</li>
    </ul>
    <h2>参加</h2>
    <ul>
      <li>
        <a href="https://rubykansai.doorkeeper.jp/events/72775">こちらから</a>
      </li>
    </ul>
    <h2>講演</h2>
    <ul>
      <li>
        <a href="https://github.com/matz">まつもとゆきひろ</a>
      </li>
      <li>
        <a href="https://github.com/yuki24">yuki24</a>
      </li>
    </ul>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
