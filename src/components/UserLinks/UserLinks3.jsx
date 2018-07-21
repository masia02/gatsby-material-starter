import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import "./UserLinks.scss";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks3 } = this.props.config;
    const { labeled } = this.props;
    return userLinks3.map(link => (
      <Button
        icon={!labeled}
        flat={labeled}
        secondary
        key={link.label}
        iconClassName={link.iconClassName}
        href={link.url}
      >
        {labeled ? link.label : ""}
      </Button>
    ));
  }
  render() {
    const { userLinks3 } = this.props.config;
    if (!userLinks3) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks3;
