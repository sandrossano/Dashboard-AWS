import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Icon from "./icon";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import News from "./News";
import { DesktopWindows } from "@material-ui/icons";
const crypto = require("crypto");

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  reet: {
    flexGrow: 1,

    minHeight: "100%",
    width: "100%"
  },
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  }
});

class SimpleTabs extends React.Component {
  constructor(props) {
    super(props);
    if (window.sessionStorage.getItem("logged") !== "X") {
      //window.location.href = "/login";
      window.open("/login", "_self");
    }
    window.sessionStorage.getItem("user");
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: "#404040" }}>
          <Toolbar>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Home" />
              <Tab label="Admin" />
              {/*<Tab label="Go" href="#basic-tabs" />*/}
            </Tabs>
            <IconButton
              className="exitButton"
              color="inherit"
              onClick={() => {
                sessionStorage.clear();
                window.open("/login", "_self");
              }}
            >
              <span className="nomeUtente">Logoff&nbsp;&nbsp;&nbsp;</span>
              <PowerSettingsNewIcon />
              {/*<Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>*/}
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.reet}>
          <br />
          <br />
          <Icon />
          <br />
          {value === 0 && (
            <div>
              <TabContainer /*style={{ height: "100%" }}*/>
                <center>
                  <Container>
                    <Row>
                      <Col md="4">
                        <Card className={classes.card}>
                          <CardMedia
                            component="img"
                            className={classes.media}
                            height="140"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEH4h5H0wfMc16jzp0kBLDpxBYmpGsDUsZz6yj-BkjaPx_IUt"
                            title="Report"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="headline"
                              component="h2"
                            >
                              Report
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              size="large"
                              color="primary"
                              onClick={(e) => {
                                var d = new Date();
                                var link =
                                  "https://demogori.awskeytech.com/?US=" +
                                  window.sessionStorage.getItem("user") +
                                  "&TK=" +
                                  crypto
                                    .createHash("md5")
                                    .update(d.getHours() + d.getMinutes() + "")
                                    .digest("hex")
                                    .toString();
                                window.open(link, "_self");
                              }}
                              style={{ width: "100%" }}
                            >
                              Vai al Report
                            </Button>
                            {/*<Button
                              size="small"
                              color="primary"
                              href="https://news.google.com/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRGx3Yld0MkVnSmxiaWdBUAE?hl=en-SG&gl=SG&ceid=SG:en"
                              target="__blank"
                            >
                              Google News
                            </Button>
                            <Button
                              size="small"
                              color="primary"
                              href="https://flipboard.com/"
                              target="__blank"
                            >
                              Flipboard
                            </Button>*/}
                          </CardActions>
                        </Card>
                      </Col>
                      {/*<Col md="4">
                        <Card className={classes.card}>
                          <CardMedia
                            component="img"
                            className={classes.media}
                            height="140"
                            image="https://c1.staticflickr.com/1/4/8393370_edfe46f368_b.jpg"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="headline"
                              component="h2"
                            >
                              Google Suite
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              size="small"
                              color="primary"
                              href="https://keep.google.com/u/0/"
                              target="__blank"
                            >
                              Google Keep
                            </Button>
                            <Button
                              size="small"
                              color="primary"
                              href="https://calendar.google.com/calendar/r"
                              target="__blank"
                            >
                              Google Calendar
                            </Button>
                          </CardActions>
                        </Card>
                      </Col>
                      <Col md="4">
                        <Card className={classes.card}>
                          <CardMedia
                            component="img"
                            className={classes.media}
                            height="140"
                            image="https://picsum.photos/346/140/?random"
                            title="News"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="headline"
                              component="h2"
                            >
                              Dashboards
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              size="small"
                              color="primary"
                              href="https://codesandbox.io/dashboard/recent"
                              target="__blank"
                            >
                              Sandbox
                            </Button>
                            <Button
                              size="small"
                              color="primary"
                              href="https://zeit.co/dashboard"
                              target="__blank"
                            >
                              Zeit
                            </Button>
                            <Button
                              size="small"
                              color="primary"
                              href="https://colab.research.google.com/"
                              target="__blank"
                            >
                              Colaboratory
                            </Button>
                          </CardActions>
                        </Card>
                          </Col>*/}
                    </Row>
                    <Row>
                      <Col style={{ padding: "2%" }}>{/*<News />*/}</Col>
                    </Row>
                  </Container>
                </center>
              </TabContainer>
            </div>
          )}
          {value === 1 && (
            <div>
              <TabContainer>
                <center>
                  {/*First*/}
                  <Container>
                    <Row>
                      <Col md="4">
                        <Card className={classes.card}>
                          <CardMedia
                            component="img"
                            className={classes.media}
                            height="140"
                            image="https://www.finews.asia/images/cache/ab853c9d1c93d483d7b0003c6a37a86b_w500_h300_cp.jpg"
                            title="Office"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="headline"
                              component="h2"
                            >
                              Gestione Utenti
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              size="large"
                              color="primary"
                              onClick={(e) => {
                                var d = new Date();
                                var link =
                                  "https://demouser.awskeytech.com/login?US=" +
                                  window.sessionStorage.getItem("user") +
                                  "&TK=" +
                                  crypto
                                    .createHash("md5")
                                    .update(d.getHours() + d.getMinutes() + "")
                                    .digest("hex")
                                    .toString();
                                window.open(link, "_self");
                              }}
                              style={{ width: "100%" }}
                            >
                              Apri il Tool
                            </Button>
                            {/*  <Button
                              size="small"
                              color="primary"
                              href="https://securedteamsites.zone1.scb.net/sites/OCIR_GBS/Team/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FOCIR_GBS%2FTeam%2FShared%20Documents%2FLeave%20Planner&FolderCTID=0x0120003C1CFB47B268AB4CB11CC0A463808327&View=%7B4E7BAC08-CBD0-4E24-9ABF-957875B9F63A%7D"
                              target="__blank"
                            >
                              Leave
                            </Button>
                            <Button
                              size="small"
                              color="primary"
                              href="https://securedteamsites.zone1.scb.net/sites/OCIR_GBS/Team/_layouts/15/WopiFrame.aspx?sourcedoc=/sites/OCIR_GBS/Team/Shared%20Documents/Leave%20Planner/OCIR%20Team%20Leave%20Planner.xlsx&action=default"
                              target="__blank"
                            >
                              View
                            </Button> */}
                          </CardActions>
                        </Card>
                      </Col>
                      {/*     <Col md="4">
                        <Card className={classes.card}>
                          <CardMedia
                            component="img"
                            className={classes.media}
                            height="140"
                            image="https://cache.desktopnexus.com/thumbseg/391/391519-bigthumbnail.jpg"
                            title="Office"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="headline"
                              component="h2"
                            >
                              System Suite
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              size="small"
                              color="primary"
                              href="https://keep.google.com/u/0/#label/Work"
                              target="__blank"
                            >
                              Google Keep
                            </Button>
                            <Button
                              size="small"
                              color="primary"
                              href="https://edm.global.standardchartered.com:445/MicroStrategy/servlet/mstrWeb"
                              target="__blank"
                            >
                              MTSR
                            </Button>
                          </CardActions>
                        </Card>
                      </Col>
                      <Col md="4">
                        <Card className={classes.card}>
                          <CardMedia
                            component="img"
                            className={classes.media}
                            height="140"
                            image="https://picsum.photos/347/140/?random"
                            title="Office"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="headline"
                              component="h2"
                            >
                              Update Weekly
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              size="small"
                              color="primary"
                              href="https://securedteamsites.zone1.scb.net/sites/OCIR_GBS/Team/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FOCIR_GBS%2FTeam%2FShared%20Documents%2FProductivity%20Reports%2FMatthew&FolderCTID=0x0120003C1CFB47B268AB4CB11CC0A463808327&View=%7B4E7BAC08-CBD0-4E24-9ABF-957875B9F63A%7D"
                              target="__blank"
                            >
                              Productivity Tracker
                            </Button>
                          </CardActions>
                        </Card>
                      </Col>
                      */}
                    </Row>
                  </Container>
                </center>
              </TabContainer>
            </div>
          )}
          {/* {value === 2 && (
            <div>
              <TabContainer>
                <center>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      height="140"
                      image="https://picsum.photos/345/140/?random"
                      title="Office"
                    />
                  </Card>
                  <br />
                  
                  <ExpansionPanel className={classes.card}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>
                        Start Somewhere
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Don't Be Afraid To Fail. Be Afraid Of Not Trying
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  
                  <ExpansionPanel className={classes.card}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>
                        Move Fast & Break Things
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        {" "}
                        Unless You're Breaking Stuff, You're Not Fast Enough
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  
                  <ExpansionPanel className={classes.card}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>
                        Keep Moving
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Time Will Catch Up Before You Know It
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                 
                  <ExpansionPanel className={classes.card}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>
                        Do Something That Scares You Everyday
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        And Keep Doing It Until It Doesn't Anymore
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <br />
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      height="140"
                      image="https://picsum.photos/355/145/?random"
                      title="Office"
                    />
                  </Card>
                </center>
              </TabContainer>
            </div>
          )}
          */}
        </div>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
