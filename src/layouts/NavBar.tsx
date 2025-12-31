import {
  AppBar,
  Button,
  Icon,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { useColorScheme } from "../context/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { NavBarRoutes } from "../enums/NavBar";
import { Drawer, IconButton, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { changeRoute } from "./NavBarRouteSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

function NavBar() {
  const { mode, setMode } = useColorScheme();
  const dispatch = useAppDispatch();
  const activeRoute = useAppSelector((state: { currentRoute: { currentRoute: NavBarRoutes } }) => state.currentRoute.currentRoute);

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleRouteChange = (route: NavBarRoutes) => {
    dispatch(changeRoute(route));
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(v => !v);
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon>
            <BusinessCenterIcon />
          </Icon>
          <Typography sx={{ ml: 1 }}>Youssef Aboelela</Typography>
        </Box>
        <Box sx={{ position: 'absolute', left: 0, right: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 1 }}>
          <Button
            component={NavLink}
            to="/"
            color="inherit"
            style={{
              borderBottom: activeRoute === NavBarRoutes.HOME ? '2px solid' : 'none',
            }}
            onClick={() => handleRouteChange(NavBarRoutes.HOME)}
          >
            {NavBarRoutes.HOME}
          </Button>
          <Button
            component={NavLink}
            to="/about"
            color="inherit"
            style={{
              borderBottom: activeRoute === NavBarRoutes.ABOUT ? '2px solid' : 'none',
            }}
            onClick={() => handleRouteChange(NavBarRoutes.ABOUT)}
          >
            {NavBarRoutes.ABOUT}
          </Button>
          <Button
            component={NavLink}
            to="/projects"
            color="inherit"
            style={{
              borderBottom: activeRoute === NavBarRoutes.PROJECTS ? '2px solid' : 'none',
            }}
            onClick={() => handleRouteChange(NavBarRoutes.PROJECTS)}
          >
            {NavBarRoutes.PROJECTS}
          </Button>
          <Button
            component={NavLink}
            to="/blog"
            color="inherit"
            style={{
              borderBottom: activeRoute === NavBarRoutes.BLOG ? '2px solid' : 'none',
            }}
            onClick={() => handleRouteChange(NavBarRoutes.BLOG)}
          >
            {NavBarRoutes.BLOG}
          </Button>
          <Button
            component={NavLink}
            to="/contact"
            color="inherit"
            style={{
              borderBottom: activeRoute === NavBarRoutes.CONTACT ? '2px solid' : 'none',
            }}
            onClick={() => handleRouteChange(NavBarRoutes.CONTACT)}
          >
            {NavBarRoutes.CONTACT}
          </Button>
        </Box>

        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={toggleMobile}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            variant="contained"
            onClick={toggleTheme}
            startIcon={mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </Box>

        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={toggleMobile}
          ModalProps={{ keepMounted: true }}
        >
          <Box sx={{ width: 250 }} role="presentation" onKeyDown={(e) => { if (e.key === 'Escape') setMobileOpen(false); }}>
            <List>
              <ListItemButton component={NavLink} to="/" onClick={() => { handleRouteChange(NavBarRoutes.HOME); setMobileOpen(false); }}>
                <ListItemText primary={NavBarRoutes.HOME} />
              </ListItemButton>
              <ListItemButton component={NavLink} to="/about" onClick={() => { handleRouteChange(NavBarRoutes.ABOUT); setMobileOpen(false); }}>
                <ListItemText primary={NavBarRoutes.ABOUT} />
              </ListItemButton>
              <ListItemButton component={NavLink} to="/projects" onClick={() => { handleRouteChange(NavBarRoutes.PROJECTS); setMobileOpen(false); }}>
                <ListItemText primary={NavBarRoutes.PROJECTS} />
              </ListItemButton>
              <ListItemButton component={NavLink} to="/blog" onClick={() => { handleRouteChange(NavBarRoutes.BLOG); setMobileOpen(false); }}>
                <ListItemText primary={NavBarRoutes.BLOG} />
              </ListItemButton>
              <ListItemButton component={NavLink} to="/contact" onClick={() => { handleRouteChange(NavBarRoutes.CONTACT); setMobileOpen(false); }}>
                <ListItemText primary={NavBarRoutes.CONTACT} />
              </ListItemButton>
              <ListItemButton onClick={() => { toggleTheme(); setMobileOpen(false); }}>
                <ListItemIcon>{mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}</ListItemIcon>
                <ListItemText primary={mode === 'light' ? 'Dark Mode' : 'Light Mode'} />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
