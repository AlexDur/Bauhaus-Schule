import * as React from "react";
/* import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton"; */
/* import Typography from "@mui/material/Typography"; */
/* import Tooltip from "@mui/material/Tooltip"; */
/* import PersonAdd from "@mui/icons-material/PersonAdd"; */
/* import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Terrain from "@mui/icons-material/Terrain";
import { Button } from "@material-ui/core";
import profil_A from "../img/profile_Alex.png"; */
import boxing_ibf from "../img/boxing_ibf.png";

export default function Nav() {
  return (
    <React.Fragment>
      <h1
        style={{
          fontFamily: "Graduate, cursive",
          fontWeight: 100,
          color: "white",
        }}
      >
        {" "}
        Who will be the <u>G</u>reatest <u>O</u>f <u>A</u>ll <u>T</u>ime?
      </h1>
      <img
        style={{ width: 100, marginTop: 50 }}
        src={boxing_ibf}
        alt="IBF icon"
      />
    </React.Fragment>
  );
}
