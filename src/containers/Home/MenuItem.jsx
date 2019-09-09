import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Media from 'react-media'

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    //style={{"background": bgcolor}}url router
    const {data, bgcolor} = this.props;
    const MenuItemPc = () => (
      <div className="menu-pc">

        <Link to={data.url}>
          <div className='menu-pc-header'>{data.name}</div>
          <div className="menu-pc-body">{data.description}</div>
        </Link>
      </div>
    )

    const MenuItemMobile = () => (
      <div className="menu-mobile">
        <Link to={data.url}>
          <img src={require(`./icon/${data.icon}.png`)} alt="icon"/>
          <div className="menu-mobile-body">{data.name}</div>
        </Link>
      </div>
    )
    return (
      <Media query="(max-width: 750px)">
        {matches =>
          matches ? (
            <MenuItemMobile/>
          ) : (

            <MenuItemPc/>
          )
        }
      </Media>
    )
  }
}

export default MenuItem
