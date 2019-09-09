import React, {Component, Fragment} from 'react'
import Loadable from 'react-loadable'
import {Switch, Route} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import Media from 'react-media'
import PageHeader from './PageHeader'
import MobileHeader from './Mobile/MobileHeader'
import MobileFooter from './Mobile/MobileFooterV2'
import DefaultFooter from '../../components/DefaultFooter'


import './style.scss'


@inject('defaultStore')
@observer
class Manage extends Component {


  render() {

    return (
      <div className="manage">
        <Media query="(max-width: 750px)">
          {matches =>
            matches ? (
              <MobileHeader/>
            ) : (
              <PageHeader/>
            )
          }
        </Media>
        <main>
          <Switch>



          </Switch>
        </main>
        <Media query="(max-width: 750px)">
          {matches =>
            matches ? (
              <Fragment>
                <div style={{height: '50px'}}></div>
                <MobileFooter/>
              </Fragment>
            ) : <DefaultFooter/>
          }
        </Media>
      </div>
    )
  }
}

export default Manage
