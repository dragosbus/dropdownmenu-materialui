import React from "react";
import Grid from "@material-ui/core/Grid";
import { ButtonProp } from "./ButtonProp";
import { DropDownMenu } from "./DropDown";

const items1 = ["button1.0", "button1.1", "button1.2"];
const items2 = ["button2.0", "button2.1", "button2.2"];

class App extends React.Component {
  state = {
    open: false,
    btnRef: null,
    itemsMenu: [],
    button1Text: "button1.0",
    button2Text: "button2.0"
  };

  handleToggle = event => {
    let items = items1.includes(event.target.textContent) ? items1 : items2;
    this.setState({
      open: !this.state.open,
      btnRef: event.target,
      itemsMenu: items
    });
  };

  handleClose = event => {
    this.setState({ open: false });
  };

  onChangeText = newItem => {
    if (this.state.btnRef.textContent === this.state.button1Text) {
      this.setState({ button1Text: newItem });
    } else if (this.state.btnRef.textContent === this.state.button2Text) {
      this.setState({ button2Text: newItem });
    }
    this.handleClose();
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <ButtonProp handleToggle={this.handleToggle} open={this.state.open}>
            {this.state.button1Text}
          </ButtonProp>
          <ButtonProp handleToggle={this.handleToggle} open={this.state.open}>
            {this.state.button2Text}
          </ButtonProp>
        </Grid>
        <DropDownMenu
          open={this.state.open}
          btnRef={this.state.btnRef}
          onChangeText={this.onChangeText}
          handleClose={this.handleClose}
          itemsMenu={this.state.itemsMenu}
        />
      </React.Fragment>
    );
  }
}

export default App;
