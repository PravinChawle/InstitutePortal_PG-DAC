import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { mainListItems, secondaryListItems } from "./listItems";

import DispChart from "./DispChart";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Login";
import Cards from "./Cards";
import StartQuiz from "./StartQuiz";
import Profile from "./Profile";
import Notice from "./Notice";
import { Avatar } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import RecordingsList from "./RecordingsList";
import Webcam from "react-webcam";
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import NoticeBoard from "./NoticBoard";
import StudentStudyMaterial from "./StudentStudyMaterial";
import Congratulations from "./Congratulations";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.cdac.in/">
        CDAC Portal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  var date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  var time = new Date().toLocaleTimeString();
  var [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);

  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  /////////////
  let id;
  let user = sessionStorage.getItem("user");
  useEffect(() => {
    if (user === "null" || user === null || user === undefined) {
      toast.error("Login First!!");
      navigate("/");
    }
  }, []);

  if (user !== "null" && user !== null && user !== undefined) {
    user = JSON.parse(sessionStorage.getItem("user"));
    id = user.portalId;
  }
  if (user.role != "student") {
    navigate("/");
  }
  //////////////////
  const theme = {
    spacing: 8,
  };

  const location = useLocation();
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQH0pV14FxzqwQ/company-logo_200_200/0/1624685506949?e=2147483647&v=beta&t=L_r6P-Xusi1OYIbb2JSgE_HJozY5SWy8lQCfh-5tRsI"
              alt="Kitten"
              height="65"
              width="45"
            />
            <span
              className="multicolortext fw-bolder ml-3"
              style={{ fontSize: "35px" }}
            >
              IACSD Portal
            </span>
            <img
              height="100"
              width="100"
              src="https://i.ibb.co/cFypkmN/Daco-4066845.png"
            />
            <img
            height="100"
            width="100"
            
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROH2ItFIY3GpUZvpGO1VjTZHUGoVjlGHTZyA&usqp=CAU"
          />
            {/* <Avatar
              
              
            /> */}
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid
                item
                xs={12}
                md={12}
                lg={location.pathname == "/Student" ? 9 : 12}
                align={location.pathname === "/Student/Profile" ? "center" : ""}
              >
                {location.pathname == "/Student" ? (
                  <>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 500,
                      }}
                    >
                      <div className="display-6 text-center pb-2">
                        Score Table
                      </div>
                      <DispChart />
                      <ProfileCard idus={id} name={user.name} />
                    </Paper>
                  </>
                ) : location.pathname === "/Student/QuizList" ? (
                  <Cards />
                ) : location.pathname === "/Student/Quiz" ? (
                  <>
                    <StartQuiz />
                  </>
                ) : location.pathname === "/Student/Profile" ? (
                  <Profile />
                ) : location.pathname === "/Student/Notice" ? (
                  <NoticeBoard />
                ) : location.pathname === "/Student/StudyMaterial" ? (
                  <StudentStudyMaterial />
                ) : location.pathname == "/Student/viewRecordings" ? (
                  <RecordingsList />
                ) : location.pathname == "/Student/Congratulations" ? (
                  <Congratulations />
                ) : (
                  navigate("/")
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  );
}
export default function Dashboard() {
  return <DashboardContent />;
}
