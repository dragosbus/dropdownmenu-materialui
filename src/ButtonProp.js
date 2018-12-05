import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export function ButtonProp(props) {
  return (
    <Grid item xs={6} center="true">
      <Button
        onClick={node => {
          props.handleToggle(node);
        }}
        aria-owns={props.open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
      >
        {props.children}
      </Button>
    </Grid>
  );
}
