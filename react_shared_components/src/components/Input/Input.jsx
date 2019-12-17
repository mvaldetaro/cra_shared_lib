import React from "react";
import { default as WInput } from "@material-ui/core/Input";

class Input extends React.Component {
  render() {
    return <WInput {...this.props} />;
    //return <div>Teste sem material</div>;
  }
}

export default Input;
