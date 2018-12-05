import React from "react";
import Grid from "@material-ui/core/Grid";
import { ButtonProp } from "./ButtonProp";
import { DropDownMenu } from "./DropDown";

class App extends React.Component {
  state = {
    open: false,
    btnRef: null,
    itemMenu: ""
  };

  handleToggle = event => {
    console.log(event.target);
    this.setState({ open: !this.state.open, btnRef: event.target });
  };

  handleClose = event => {
    this.setState({ open: false });
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <ButtonProp handleToggle={this.handleToggle} open={this.state.open}>
            Button 1
          </ButtonProp>
          <ButtonProp handleToggle={this.handleToggle}>Button 2</ButtonProp>
        </Grid>
        <DropDownMenu
          open={this.state.open}
          btnRef={this.state.btnRef}
          handleClose={this.handleClose}
        />
      </React.Fragment>
    );
  }
}

export default App;
