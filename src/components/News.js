import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Button, Spinner } from "react-bootstrap";
import Spin from "./Spin";
import PropTypes from "prop-types";
export class News extends Component {
  articles = [
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "CDC Asks People To Step Up Monkeypox Surveillance: India Also On Alert | TheHealthSite.com - TheHealthSite",
      description: null,
      url:
        "https://news.google.com/__i/rss/rd/articles/CBMicGh0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL25ld3MvY2RjLWFza3MtcGVvcGxlLXRvLXN0ZXAtdXAtbW9ua2V5cG94LXN1cnZlaWxsYW5jZS1pbmRpYS1hbHNvLW9uLWFsZXJ0LTg4NTI4My_SAXRodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9uZXdzL2NkYy1hc2tzLXBlb3BsZS10by1zdGVwLXVwLW1vbmtleXBveC1zdXJ2ZWlsbGFuY2UtaW5kaWEtYWxzby1vbi1hbGVydC04ODUyODMvYW1wLw?oc=5",
      urlToImage: null,
      publishedAt: "2022-06-07T08:31:00Z",
      content: null,
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Monit Khanna",
      title:
        "World’s First Liquid Mirror Telescope For Astronomy Set Up At Uttarakhand - Indiatimes.com",
      description:
        "India has set up the nation’s first-ever ‘liquid mirror telescope’ at Uttarakhand’s Devasthal Observatory, which also happens to be Asia’s largest International Liquid Mirror Telescope.                         ARIESSitting at a height of 2,450 metres, the liq…",
      url:
        "https://www.indiatimes.com/technology/science-and-future/worlds-first-liquid-mirror-telescope-for-astronomy-set-up-at-uttarakhand-571533.html",
      urlToImage:
        "https://im.indiatimes.in/content/2022/Jun/Facebook-Image-28_629ef7bcde36c.jpg",
      publishedAt: "2022-06-07T08:20:58Z",
      content:
        "India has set up the nations first-ever liquid mirror telescope at Uttarakhands Devasthal Observatory, which also happens to be Asias largest International Liquid Mirror Telescope. \r\nARIES\r\nSitting a… [+1586 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Prizes winners 2022 #RSCPrizes – group 7 - Royal Society Of Chemistry",
      description: "",
      url: "https://www.youtube.com/watch?v=_JmYid1L4tQ",
      urlToImage: "https://i.ytimg.com/vi/_JmYid1L4tQ/maxresdefault.jpg",
      publishedAt: "2022-06-07T08:06:36Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Rahul Gandhi Meets Murdered Singer Sidhu Moose Wala's Family In Punjab - NDTV",
      description:
        "Congress leader Rahul Gandhi visited the family of Punjabi singer Sidhu Moose Wala in Punjab's Mansa district today to express his condolences over the singer's killing.",
      url:
        "https://www.ndtv.com/india-news/rahul-gandhi-visits-sidhu-moose-walas-village-meets-family-at-home-3044852",
      urlToImage:
        "https://c.ndtvimg.com/2022-06/iih626ro_rahul-gandhi-visits-sidhu-moosewalas-house_625x300_07_June_22.jpg",
      publishedAt: "2022-06-07T08:04:39Z",
      content:
        "Rahul Gandhi today met Sidhu Moose Wala's family at their residence in Punjab's Mansa district\r\nMansa, Punjab: Congress leader Rahul Gandhi visited the family of Punjabi singer Sidhu Moose Wala in Pu… [+1428 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Share Market LIVE: Sensex tanks 700 pts, Nifty tumbles below 16400; HDFC, HDFC Bank, Infosys top drags - The Financial Express",
      description: null,
      url:
        "https://news.google.com/__i/rss/rd/articles/CBMi2gFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9tYXJrZXQvc2hhcmUtbWFya2V0LXRvZGF5LWxpdmUtdXBkYXRlcy1zZW5zZXgtbmlmdHktcnVwZWUtdnMtZG9sbGFyLXNneC1uaWZ0eS1yYmktbXBjLXJlcG8tcmF0ZS1oaWtlLWluZmxhdGlvbi1wb2xpY3ktbWVldC1vdXRjb21lLWFzaWFuLW1hcmtldHMtd2FsbC1zdHJlZXQtNy1qdW5lLTIwMjItdHVlc2RheS8yNTUwODY2L9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-06-07T07:56:06Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Anuj Bhatia",
      title:
        "5 biggest surprises from Apple's WWDC 2022 event | Technology News - The Indian Express",
      description:
        "From the debut of the next-generation CarPlay to the ability to use your iPhone as a Mac webcam, these are the most unexpected announcements at Apple's WWDC 2022.",
      url:
        "https://indianexpress.com/article/technology/tech-news-technology/5-biggest-surprises-from-apples-wwdc-2022-event/",
      urlToImage:
        "https://images.indianexpress.com/2022/06/Apple_iPhone_webcame1.jpg",
      publishedAt: "2022-06-07T07:54:46Z",
      content:
        "The first day of Apples annual WWDC developer conference is over, with the company announcing iOS 16 for the iPhone, as well as software updates for the Apple Watch, Mac and iPad. The developer confe… [+5383 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title: "Giloy: Here's Why You Need This Ayurvedic Herb - NDTV",
      description:
        "Giloy is an ayurvedic herb that is highly underrated. It has various benefits on the body. Here are some benefits of giloy.",
      url:
        "https://www.ndtv.com/health/giloy-heres-why-you-need-this-ayurvedic-herb-3036121",
      urlToImage:
        "https://c.ndtvimg.com/2022-05/kek5pdhg_skincare650_625x300_18_May_22.jpg",
      publishedAt: "2022-06-07T07:41:15Z",
      content:
        "Giloy promote better health of your skin and slowdowns skin-ageing\r\nAyurveda is a type of medicinal methodology that originated in India. Ayurvedic herbs have been recognised for their exceptional be… [+3350 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Entertainment Desk",
      title:
        "Sonakshi Sinha and Zaheer Iqbal say 'I Love You' to each other. Watch video - Hindustan Times",
      description:
        "Wishing her on her birthday, Zaheer Iqbal shared a fun video of Sonakshi Sinha and wrote ‘I Love You’. The Bollywood star also responded with ‘love you’.",
      url:
        "https://www.hindustantimes.com/entertainment/bollywood/sonakshi-sinha-and-zaheer-iqbal-make-relationship-insta-official-say-i-love-you-to-each-other-watch-video-101654583112653.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/06/07/1600x900/SONAKSHI_1654583599915_1654583617250.JPG",
      publishedAt: "2022-06-07T07:00:38Z",
      content:
        "Sonakshi Sinha and Zaheer Iqbal seem to have confirmed their relationship on Instagram as they said 'I love you' to each other on a social media post. Zaheer had shared a video for her birthday and w… [+1527 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "NASA Hubble Space Telescope captures this largest image EVER; will reveal many secrets - HT Tech",
      description:
        "A team of scientists has released the largest near-infrared image taken by NASA Hubble Space Telescope. They believe that the image will enable astronomers in learning the origin of galaxies",
      url:
        "https://tech.hindustantimes.com/tech/news/nasa-hubble-space-telescope-captures-this-largest-image-ever-will-reveal-many-secrets-71654583826133.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2022/06/07/1600x900/STScI-01EVSZTN3NZPWHHKNV7YGKYTRP_1654584076791_1654584089482.png",
      publishedAt: "2022-06-07T06:45:19Z",
      content:
        "Even 3 decades after its initial deployment, the NASA Hubble Space Telescope has not ceased to make new records. The space telescope is a big reason behind astronomers making some big discoveries and… [+2342 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "India vs South Africa: South African Cricketer Feels The Delhi Heat Ahead Of T20I Series Opener, Put.. - NDTV Sports",
      description:
        "IND vs SA: The first match of the five-match T20I series between India and South Africa will be played at the Arun Jaitley Stadium in Delhi on Thursday.",
      url:
        "https://sports.ndtv.com/india-vs-south-africa-2022/ind-vs-sa-south-african-cricketer-feels-the-delhi-heat-ahead-of-t20i-series-opener-puts-out-a-cool-tweet-3044786",
      urlToImage:
        "https://c.ndtvimg.com/2022-06/gp3imrh8_tabraiz-shamsi-instagram_625x300_07_June_22.jpg",
      publishedAt: "2022-06-07T06:38:50Z",
      content:
        "India host South Africa for a five-match Twenty20 International (T20I) series, starting on Thursday. The first match of the series will be played at the Arun Jaitley Stadium in Delhi. Both teams have… [+1592 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk",
      title:
        "Prophet remark: Ex-BJP spokesperson Nupur Sharma gets security amid ‘threats’ - Hindustan Times",
      description:
        "Nupur Sharma had sought security citing harassment and threats she had been receiving following which the Delhi Police registered a case against unidentified people. | Latest News Delhi",
      url:
        "https://www.hindustantimes.com/cities/delhi-news/nupur-sharma-given-security-amid-threats-over-prophet-remark-delhi-police-101654583225751.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/06/07/1600x900/Nupur_Sharma_1654564584079_1654583550377.jpg",
      publishedAt: "2022-06-07T06:33:12Z",
      content:
        "The Delhi Police on Tuesday said security was being provided to suspended BJP spokesperson Nupur Sharma and her family after an FIR was registered on a complaint that she was getting death threats ov… [+2188 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Shankhyaneel Sarkar",
      title:
        "Who Are The Gupta Brothers And How Attempting To Bribe The Wrong Man Led To Their Fall? - News18",
      description:
        "The Guptas, who stole more than $7 billion from South Africa during Zuma’s presidency, came into the spotlight in 2013 when they chose to bribe the wrong man, Mcebisi Jonas",
      url:
        "https://www.news18.com/news/world/south-africa-who-are-the-gupta-brothers-and-how-bribing-the-wrong-man-led-to-their-fall-5324863.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/06/gupta-brothers-bbc-gallo-images-165458300716x9.png",
      publishedAt: "2022-06-07T06:25:00Z",
      content:
        "The South African government announced that the UAE government arrested Rajesh Gupta and Atul Gupta, on charges of corruption leveled against them which were committed when Jacob Zuma was the preside… [+4996 chars]",
    },
    {
      source: {
        id: null,
        name: "Bqprime.com",
      },
      author: "Ira Dugal",
      title:
        "RBI Monetary Policy: Repo Rate Headed Towards 6% By February, Says ICICI Bank's B Prasanna - BQ Prime",
      description:
        "Some part of the market are pricing in a repo rate of 7%. This is due to the uncertainty premium, said B Prasanna of ICICI Bank.",
      url:
        "https://www.bqprime.com/business/rbi-monetary-policy-repo-rate-headed-towards-6-by-february-says-icici-banks-b-prasanna",
      urlToImage:
        "https://gumlet.assettype.com/bloombergquint%2F2022-06%2F6b7ae6bb-a666-4e90-8591-4551deedb429%2FPHOTO_2022_05_13_17_22_38.jpg?rect=0%2C429%2C1200%2C630&w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2022-06-07T06:14:27Z",
      content:
        "Against the expectation of the repo rate heading to 6-6.5%, record high supply of bonds and tighter global financial conditions, will yields on the benchmark bond head even higher? The 10-year yield … [+1126 chars]",
    },
    {
      source: {
        id: null,
        name: "Www.bgr.in",
      },
      author: "Shweta Ganjoo",
      title: "WWDC 2022: Apple increases price of MacBook Air M1 - BGR India",
      description:
        "After launching MacBook Air with its new M2 chipset last night Apple has quietly increased the price of its M1-powered MacBook Air. Here are the details.",
      url:
        "https://www.bgr.in/laptops/apple-quietly-increases-price-of-macbook-air-m1-after-launching-macbook-air-m2-1280612/",
      urlToImage:
        "https://st1.bgr.in/wp-content/uploads/2022/06/MacBook-Air.jpg",
      publishedAt: "2022-06-07T05:55:29Z",
      content:
        "Apple, at Worldwide Developers’ Conference (WWDC 2022) last night, announced its new M2 chipset. In addition to that, the also launched M2-powered MacBook Air that costs Rs 1,19,900 in India. After t… [+2358 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Tech Desk",
      title:
        "Notorious asteroid 'Apophis' used to test planetary defence system - The Indian Express",
      description:
        "Researchers used Apophis, once identified as a potentially hazardous asteroid, to test the Earth's planetary defence systems.",
      url:
        "https://indianexpress.com/article/technology/science/asteroid-apophis-test-planetary-defence-system-7956679/",
      urlToImage:
        "https://images.indianexpress.com/2022/06/Apophis-Asteroid-planetary-defence-system.jpg",
      publishedAt: "2022-06-07T05:48:25Z",
      content:
        "To test the operational readiness of planetary defence systems, researchers sometimes use a real asteroids close approach as a mock encounter with a new potentially hazardous asteroid. The lessons le… [+3510 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Rapes Of 4 More Minors Reported In Hyderabad Shaken By Teen's Gang-Rape - NDTV",
      description:
        "Even as a teen's gang-rape in Hyderabad continues to make national headlines, four more rape cases of minors have been reported in the city.",
      url:
        "https://www.ndtv.com/india-news/4-more-minor-rapes-reported-in-hyderabad-after-teens-gang-rape-rocked-city-3044551",
      urlToImage:
        "https://c.ndtvimg.com/2022-06/e4gc94no_hyderabad-bjp-workers-protest-pti-650_650x400_03_June_22.jpg",
      publishedAt: "2022-06-07T05:31:00Z",
      content:
        "The BJP, which aspires to carve out space for itself, has been attacking ruling TRS after the gang-rape.\r\nHyderabad: Even as a teen's gang-rape in Hyderabad continues to make national headlines, four… [+2748 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "Burden of diabetes increasing among young population in India, says ICMR; lists key triggers and managements - Times of India",
      description:
        "At a time when the scare of COVID pandemic is still looming, the Indian Council of Medical Research (ICMR) has released guidelines for type 1 diabetes management. The pandemic has disproportionately affected people with diabetes, exposing them to a high risk …",
      url:
        "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/burden-of-diabetes-increasing-among-young-population-in-india-says-icmr-lists-key-triggers-and-managements/photostory/92051837.cms",
      urlToImage: "https://static.toiimg.com/photo/92052019.cms",
      publishedAt: "2022-06-07T05:30:00Z",
      content:
        'ICMR recommends dividing the entire calorie consumption per day into 6-7 meals which includes 3 major meals and 3-4 snacks. "In general, represent\r\nbreakfast with 20% of total caloric needs, lunch, a… [+1206 chars]',
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: null,
      title:
        "Leading woman cyclist accuses India coach of 'inappropriate behaviour' during preparatory camp in Slovenia - India Today",
      description:
        "If reports are to be believed, the coach was appointed after recommendation from the Cycling Federation of India (CFI).",
      url:
        "https://www.indiatoday.in/sports/other-sports/story/leading-woman-cyclist-alleges-india-coach-of-inappropriate-behaviour-during-preparatory-camp-in-slovenia-1959263-2022-06-07",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/RTS88FWN-647x363.png?J.HGJHvbJ6Ubduosv1HJ4v2i2fCDaWaG",
      publishedAt: "2022-06-07T04:50:09Z",
      content:
        "A leading woman cyclist has alleged R K Sharma, the national sprint team chief coach, of inappropriate behaviour during a camp in Slovenia. The cyclist, reportedly, was a part of the preparatory camp… [+1606 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Education and Careers Desk",
      title:
        "Assam HSLC Result 2022 Declared LIVE Updates: 56.49% Pass, 65,176 Get First Division - News18",
      description:
        "Assam HSLC Result 2022 Declared LIVE Updates: Marksheet to be available at sebaonline.org, resultssebaonline.org. News18.com too is an official partner and will release the result.",
      url:
        "https://www.news18.com/news/education-career/assam-hslc-result-2022-declared-live-updates-seba-10th-marksheet-at-sebaonline-org-resultssebaonline-org-direct-link-at-news18-toppers-livenews-5323537.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/06/hslcassam-165457212616x9.jpg",
      publishedAt: "2022-06-07T04:42:44Z",
      content:
        "Jun 07, 2022 10:12 ISTBoys Perform Better Than Girls in Madrassa Result\r\nIn the Assam Madrassa result, the overall pass percentage is at 54.73 per cent. Boys have performed better than girls with as … [+5858 chars]",
    },
    {
      source: {
        id: null,
        name: "Free Press Journal",
      },
      author: "IANS",
      title:
        "Karnataka authorities on high alert after Hizbul terrorists arrest in Bengaluru - Free Press Journal",
      description: "",
      url:
        "https://www.freepressjournal.in/india/karnataka-authorities-on-high-alert-after-hizbul-terrorists-arrest-in-bengaluru",
      urlToImage:
        "https://gumlet.assettype.com/freepressjournal/import/2018/10/arrested.jpg?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2022-06-07T04:15:39Z",
      content:
        "Bengaluru: The authorities are on high alert after the detection and arrest of a Hizbul Mujahideen terrorist here, who had been living in disguise for the past two years.\r\nSince the state is passing … [+1967 chars]",
    },
  ];

  static defaultProps = {
    country: "in",
    pageSize: "18",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7a10737212d44a8da7e41ad74c770109&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  handlePreviousClick = async () => {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=7a10737212d44a8da7e41ad74c770109&page=${this.state.page -
      1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleNextClick = async () => {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=7a10737212d44a8da7e41ad74c770109&page=${this.state.page +
      1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div
          className="container my-4"
          style={{ color: "white", paddingTop: "60px" }}
        >
          <div>
            <h2 className="text-center">
              Top {" "}
              {this.props.category === "general"
                ? ""
                : this.capitalizeFirstLetter(this.props.category)} Headlines
            </h2>
          </div>

          {this.state.loading && <Spinner />}
          <div className="row my-3">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      author={element.author}
                      source={element.source.name}
                      time={
                        element.publishedAt
                          ? element.publishedAt.slice(11, 19)
                          : "Recently"
                      }
                      newsUrl={element.url}
                      date={
                        element.publishedAt
                          ? element.publishedAt.slice(0, 10)
                          : ""
                      }
                      title={
                        element.title
                          ? element.title.slice(0, 55) + "..."
                          : "From the debut of the next-generation CarPlay to the ability to use your iPhone ..."
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 70) + "..."
                          : "From the debut of the next-generation CarPlay to the ability to use your iPhone ..."
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.indianexpress.com/2022/06/Apple_iPhone_webcame1.jpg"
                      }
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div style={{ backgroundColor: "#2f3136", paddingBottom: "30px" }}>
          <div className="d-flex justify-content-around">
            <Button
              size="lg"
              variant="dark"
              onClick={this.handlePreviousClick}
              disabled={this.state.page <= 1 ? true : false}
            >
              {" "}
              &larr;
            </Button>{" "}
            <div style={{ color: "white" }}>
              <h2>{this.state.page}</h2>
            </div>
            <Button
              size="lg"
              variant="dark"
              onClick={this.handleNextClick}
              disabled={
                this.state.page >=
                Math.ceil(this.state.totalResults / this.props.pageSize)
                  ? true
                  : false
              }
            >
              &rarr;
            </Button>{" "}
          </div>

          {this.state.loading && <Spin />}
        </div>
      </>
    );
  }
}

export default News;
