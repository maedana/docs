/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import AnnounceLayout from '../../components/announce-layout'

export default class AnnouncementPage extends Component {
  static title = 'Data at rest encryption is now supported'

  render() {
    const md = require('./data-at-rest-encryption-is-now-supported.md')
    return (
      <AnnounceLayout currentPageTitle={AnnouncementPage.title}>
        <h1>{AnnouncementPage.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md }} />
      </AnnounceLayout>
    )
  }
}
