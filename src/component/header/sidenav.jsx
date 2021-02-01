import React, { useState } from "react";

import { Drawer, Hidden, List, Divider } from "@material-ui/core";
import { ListWithAvatar, ListSingleTab } from "../common/ListGroup";
import NavDrawer from "./drawer";
import { RenderDropDownTab } from "./../common/nestedList";
// import { useLocation } from "react-router-dom";

function drawer(openTab, HandleExpendControll) {
  return (
    <div>
      <List>
        <ListWithAvatar />
        <Divider />
        {NavDrawer.map((tab) => {
          return tab.dropDown ? (
            <RenderDropDownTab
              key={tab.label}
              iconLabel={tab.labelIcon}
              label={tab.label}
              dropdownData={tab.dropdownData}
              openTab={openTab}
              handleClick={HandleExpendControll}
            />
          ) : (
            <ListSingleTab
              key={tab.label}
              iconLabel={tab.labelIcon}
              label={tab.label}
              navPath={tab.link}
            />
          );
        })}
      </List>
      <Divider />
    </div>
  );
}

const Sidenav = ({ container, classes, theme, handleOpen, handleClose }) => {
  // const pathname = useLocation().pathname;

  const [openTab, setOpenTab] = useState({ name: "", open: false });
  const HandleExpendControll = (label) => {
    openTab.name === label
      ? setOpenTab({ name: label, open: !openTab.open })
      : setOpenTab({ name: label, open: true });
  };

  // Sidenav routes
  // console.log("sidenav", pathname);
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={handleOpen}
          onClose={handleClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer(openTab, HandleExpendControll)}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer(openTab, HandleExpendControll)}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidenav;
