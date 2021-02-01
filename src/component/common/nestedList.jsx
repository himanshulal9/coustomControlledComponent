import React from "react";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@material-ui/core";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { ListSingleTab } from "./ListGroup";

export function RenderDropDownTab({
  iconLabel,
  label,
  dropdownData,
  openTab,
  handleClick,
}) {
  const open = label === openTab.name ? openTab.open : false;
  // if (activated) setOpen(true);
  return (
    <div>
      <ListItem button onClick={() => handleClick(label)}>
        <ListItemIcon>
          <i className={iconLabel}></i>
        </ListItemIcon>
        <ListItemText>{label}</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {dropdownData.map((tab) => {
            return (
              <ListSingleTab
                nested={true}
                key={tab.label}
                iconLabel={tab.labelIcon}
                label={tab.label}
                navPath={tab.link}
              />
            );
          })}
        </List>
      </Collapse>
    </div>
  );
}
