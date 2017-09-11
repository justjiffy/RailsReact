import React from 'react';

import Link from 'react-toolbox/lib/link/Link';

// const actions = [
//   { label: "Home", href: "/home" },
//   { label: "Event Info", href: "/event" },
//   { label: "History" },
//   { label: "Gallery" },
//   { label: "Contestants" },
//   { label: "Vendors" },
//   { label: "Volunteers" },
//   { label: "Supporters" },
//   { label: "Store" },
//   { label: "Contact" }
// ]



export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      route: "home"
    }
  }

  render() {
    return (
      <div>
        <Link className="nav-button" label='home' href="./" />
        <Link className="nav-button" label='event' href="/event" />
        <Link className="nav-button" label='history' href="/history" />
        <Link className="nav-button" label='gallery' href="/gallery" />
        <Link className="nav-button" label='contestants' href="/contestants" />
        <Link className="nav-button" label='vendors' href="/vendors" />
        <Link className="nav-button" label='volunteers' href="/volunteers" />
        <Link className="nav-button" label='supporters' href="/supporters" />
        <Link className="nav-button" label='store' href="/store" />
        <Link className="nav-button" label='contact' href="/contact" />
      </div>
    )
  }
}