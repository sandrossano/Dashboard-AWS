// https://github.com/javascript-playground/remote-data-react-screencasts/blob/master/src/Github.js
import React, { Component } from "react";
import Button from "reactstrap";

// const urlForUsername = username => `https://api.github.com/users/mayojich`;
const header = {
  fontFamily: "sans-serif",
  color: "white"
};

const title = {
  color: "white",
  border: "2px solid white",
  borderRadius: "8px",
  padding: "2%",
  backgroundColor: "black",
  opacity: "0.65"
};

const newsbullets = {
  color: "white",
  fontSize: "1.2em"
};

const news = {
  status: "ok",
  totalResults: 10,
  articles: [
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Flanked by nuclear missile, N.Korean leader says U.S., S.Korea threaten peace",
      description:
        "Standing beside North Korea's largest missiles, leader Kim Jong Un said his country's weapons development is necessary in the face of <a href=\"https://www.reuters.com/world/asia-pacific/north-korea-has-right-test-weapons-given-hostile-policies-un-envoy-2021-0…",
      url:
        "https://www.reuters.com/world/asia-pacific/nkoreas-kim-says-there-is-no-reason-believe-us-is-not-hostile-kcna-2021-10-11/",
      urlToImage:
        "https://www.reuters.com/resizer/czF62cvmD4bIYQB7IO4yKOaj8Yw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WQZAV4WB2JLIVJIAJ7CMMUTXD4.jpg",
      publishedAt: "2021-10-12T01:55:00+00:00",
      content:
        "SEOUL, Oct 12 (Reuters) - Standing beside North Korea's largest missiles, leader Kim Jong Un said his country's weapons development is necessary in the face of hostile policies from the United States… [+3001 chars]"
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Texas Gov. Greg Abbott orders a ban on all COVID-19 vaccine mandates in the state",
      description:
        "Monday's executive order prohibits any entity, including private business, from enforcing a COVID-19 vaccine mandate on workers. Previously, Abbott banned mandates by public employers.",
      url:
        "https://www.npr.org/2021/10/11/1045142578/texas-governor-greg-abbott-ban-covid-vaccine-mandates",
      urlToImage:
        "https://media.npr.org/assets/img/2021/10/11/ap21265797375792_wide-4b4dbeb5af49509af6dd5ebdc521eb1b7547cf83.jpg?s=1400",
      publishedAt: "2021-10-12T01:18:41+00:00",
      content:
        "Texas Gov. Greg Abbott (seen here on Sept. 22) has issued an executive order banning private companies from enforcing COVID vaccine mandates.\r\nJoel Marinez/The Monitor via AP\r\nAUSTIN, Texas Texas Gov… [+2653 chars]"
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: "Louis Casiano",
      title:
        "Miami PD chief Art Acevedo suspended after 6 months, city manager says ‘not the right fit’",
      description:
        "Miami city officials suspected police Chief Art Acevedo Monday with the intent to fire him after a contentious six months on the job in which the top cop clashed with city leaders.",
      url: "https://www.foxnews.com/us/miami-pd-chief-suspended",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2019/11/AP19324682534287.jpg",
      publishedAt: "2021-10-12T01:14:30+00:00",
      content:
        "Miami city officials suspended police Chief Art Acevedo Monday with the intent to fire him after a contentious six months on the job in which the top cop clashed with city leaders. \r\nIn a statement, … [+3530 chars]"
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: "Gregory Yee",
      title: "Alisal fire near Santa Barbara shuts down 101 Freeway",
      description:
        "Firefighters were deployed Monday afternoon to the fast-growing Alisal fire in the Los Padres National Forest near Santa Barbara.",
      url:
        "https://www.latimes.com/california/story/2021-10-11/santa-barbara-brush-fire-evacuations",
      urlToImage:
        "https://ca-times.brightspotcdn.com/dims4/default/df7b7b2/2147483647/strip/true/crop/3924x2060+0+362/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fe7%2F52%2F1e7785f64f85b118f0071c58a1a1%2Fla-photos-1staff-855043-la-me-alisal-fire-as-0001.JPG",
      publishedAt: "2021-10-12T01:07:30+00:00",
      content:
        "A brush fire north of Santa Barbara exploded in size on Monday, shutting down the 101 Freeway and prompting evacuations as gusty conditions drove flames through rough terrain that hadnt burned in dec… [+3006 chars]"
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: "Felicia Fonseca",
      title: "Indigenous Peoples Day marked with celebrations, protests",
      description:
        "FLAGSTAFF, Ariz. (AP) — Indigenous people across the United States marked Monday with celebrations of their heritage, education campaigns and a push for the Biden administration to make good on its word.",
      url:
        "https://apnews.com/article/lifestyle-united-states-travel-museums-race-and-ethnicity-d767bdac268a6523a4350f6cccd1dc2b",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/12ab659848f94b2594aedf5ff591c39d/3000.jpeg",
      publishedAt: "2021-10-12T00:12:03+00:00",
      content:
        "FLAGSTAFF, Ariz. (AP) Indigenous people across the United States marked Monday with celebrations of their heritage, education campaigns and a push for the Biden administration to make good on its wor… [+4842 chars]"
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: "Michael Wines",
      title:
        "Election Workers in Georgia Are Fired for Shredding Voter Registration Forms",
      description:
        "The office was already under fire from Trump supporters, who passed sweeping legislation that could lead to a takeover by the Republican-controlled State Legislature.",
      url:
        "https://www.nytimes.com/2021/10/11/us/fulton-county-election-workers-fired.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/10/11/nyregion/11atlanta-1/11atlanta-1-facebookJumbo.jpg",
      publishedAt: "2021-10-11T23:54:19+00:00",
      content:
        "Voting rights advocates and Democrats statewide have cast the inquiry as a first step toward a pro-Trump takeover of election machinery in the county most crucial to Democratic hopes in future electi… [+1328 chars]"
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: "Audrey Conklin",
      title: "Gabby Petito autopsy: Wyoming coroner to give update Tuesday",
      description:
        "Teton County, Wyoming, coroner Brent Blue on Tuesday will hold a virtual press conference regarding the final autopsy report for deceased Gabby Petito.",
      url:
        "https://www.foxnews.com/us/gabby-petito-autopsy-wyoming-coroner-hold-press-conference-tuesday",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2021/09/gabspetito-cropped.jpg",
      publishedAt: "2021-10-11T23:36:25+00:00",
      content:
        "NORTH PORT, Fla.- Teton County, Wyoming, coroner Brent Blue on Tuesday will hold a virtual press conference regarding the final autopsy report for deceased Gabby Petito, officials said Monday.\r\nThe F… [+2392 chars]"
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: "COLLEEN LONG and ZEKE MILLER",
      title: "Risky move: Biden undercuts WH executive privilege shield",
      description:
        "It’s a risky move by President Joe Biden that could come back to haunt him — and future presidents — in the hyperpartisan world of Washington politics...",
      url:
        "https://news.yahoo.com/risky-move-biden-undercuts-wh-210521477.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/5hxr.2op8zYR1iIk7r6eqg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/cc0y5vavftYVAIUaeMRAQQ--~B/aD0yOTY0O3c9NDQ0NTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/ap.org/82b1be586bebba456852f5fe18ca5777",
      publishedAt: "2021-10-11T21:05:21+00:00",
      content:
        "WASHINGTON (AP) Its a risky move by President Joe Biden that could come back to haunt him and future presidents in the hyperpartisan world of Washington politics.\r\nDemocrat Biden has agreed to a requ… [+5952 chars]"
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: "Maya Yang",
      title:
        "Indigenous protesters urge Biden to stop approving fossil fuel projects",
      description:
        "Demonstrators at Washington event want the president to declare the climate crisis a national emergency",
      url:
        "https://amp.theguardian.com/world/2021/oct/11/indigenous-protesters-rally-end-fossil-fuel-projects",
      urlToImage:
        "https://i.guim.co.uk/img/media/96a9ebc2d048ed95b13d9ad74fe1f5f3d5ff2ed0/0_220_6632_3982/master/6632.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1d5674f1986682e15b1983b62346dd94",
      publishedAt: "2021-10-11T21:00:02+00:00",
      content:
        "Hundreds of protesters led by Indigenous activists from across the country demonstrated in front of the White House on Monday to demand that Joe Biden stop approving fossil fuel projects and declare … [+3215 chars]"
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: "Clare Duffy, CNN Business",
      title:
        "Whistleblower Frances Haugen will meet with Facebook Oversight Board",
      description:
        "Facebook whistleblower Frances Haugen will meet with the social network's independent court-like oversight board in the coming weeks to discuss her concerns about the company, the Facebook Oversight Board said Monday.",
      url:
        "https://www.cnn.com/2021/10/11/tech/facebook-whistleblower-oversight-board/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/211005112532-12-frances-haugen-facebook-senate-hearing-1005-super-tease.jpg",
      publishedAt: "2021-10-11T18:22:00+00:00",
      content:
        "Facebook whistleblower Frances Haugen will meet with the social network's independent court-like oversight board in the coming weeks to discuss her concerns about the company, the Facebook Oversight … [+17 chars]"
    }
  ]
};
class NewsAPI extends Component {
  constructor(props) {
    super(props);
    this.state = news;
    console.log("news", Object.keys(news));
  }
  /*
  componentDidMount() {
    fetch(news(this.props))
      .then((d) => d.json())
      .then((d) => {
        this.setState({
          data: d
        });
      });
  }
  */

  render() {
    if (!this.state.data) return <p style={title}>Loading News...</p>;
    return (
      <div>
        <div>
          <h4 style={header}>Google News</h4>
          <div style={title}>
            <ul style={{ textAlign: "left" }}>
              <li>
                <a
                  style={newsbullets}
                  href={this.state.data.articles[0].url}
                  target="_blank"
                >
                  {this.state.data.articles[0].title}
                </a>
              </li>
              <li>
                <a
                  style={newsbullets}
                  href={this.state.data.articles[1].url}
                  target="_blank"
                >
                  {this.state.data.articles[1].title}
                </a>
              </li>
              <li>
                <a
                  style={newsbullets}
                  href={this.state.data.articles[2].url}
                  target="_blank"
                >
                  {this.state.data.articles[2].title}
                </a>
              </li>
              <li>
                <a
                  style={newsbullets}
                  href={this.state.data.articles[3].url}
                  target="_blank"
                >
                  {this.state.data.articles[3].title}
                </a>
              </li>
              <li>
                <a
                  style={newsbullets}
                  href={this.state.data.articles[4].url}
                  target="_blank"
                >
                  {this.state.data.articles[4].title}
                </a>
              </li>
              <li>
                <a
                  style={newsbullets}
                  href={this.state.data.articles[5].url}
                  target="_blank"
                >
                  {this.state.data.articles[5].title}
                </a>
              </li>
              <li>
                <a
                  style={newsbullets}
                  href={this.state.data.articles[6].url}
                  target="_blank"
                >
                  {this.state.data.articles[6].title}
                </a>
              </li>
              <li>
                <a
                  style={newsbullets}
                  href={this.state.data.articles[7].url}
                  target="_blank"
                >
                  {this.state.data.articles[7].title}
                </a>
              </li>
              <li>
                <a
                  style={newsbullets}
                  href={this.state.data.articles[8].url}
                  target="_blank"
                >
                  {this.state.data.articles[8].title}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsAPI;
