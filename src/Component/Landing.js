import React, { Component } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";
import Tooltips from "../Common/Tooltips";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getData } from "../actions/dataAction";
// import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket("wss://api-pub.bitfinex.com/ws/2");
// const msg = JSON.stringify({
//   event: "subscribe",
//   channel: "ticker",
//   symbol: "tBTCUSD",
// });
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connect: false,
    };
  }

  componentDidMount() {
    this.props.getData();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      data: nextProps.data,
    });
  }
  render() {
    const data1 = this.state.data
      ? this.state.data[1]
        ? this.state.data[1][7]
        : "--"
      : "--";
    return (
      <div>
        <Header />
        <div className="landing-page-conatiner">
          <div className="center-heading">Ticker App</div>
          <div className="remarks-alignment">
            <div className="action-center-header"></div>
            <div className="action-center"></div>
            <div className="action-center-ticker">
              <div className="action-center-ticker-top">
                <div className="action-center-ticker-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50.777"
                    height="50.777"
                    viewBox="0 0 226.777 226.777"
                  >
                    <g fill="whitesmoke">
                      <path d="M182.981 112.854c-7.3-5.498-17.699-7.697-17.699-7.697s8.8-5.102 12.396-10.199c3.6-5.099 5.399-12.999 5.7-17.098.299-4.101 1-21.296-12.399-31.193-10.364-7.658-22.241-10.698-38.19-11.687V.278h-21.396V34.57H95.096V.278H73.702V34.57H31.61v22.219h12.372c3.373 0 9.372.375 11.921 3.228 2.55 2.848 3 4.349 3 9.895l.001 88.535c0 2.099-.4 4.697-2.201 6.398-1.798 1.701-3.597 2.098-7.898 2.098H36.009l-4.399 25.698h42.092v34.195h21.395v-34.195h16.297v34.195h21.396v-34.759c5.531-.323 10.688-.742 13.696-1.136 6.1-.798 19.896-2.398 32.796-11.397 12.896-9 15.793-23.098 16.094-37.294.304-14.197-5.102-23.897-12.395-29.396zM95.096 58.766s6.798-.599 13.497-.501c6.701.099 12.597.3 21.398 3 8.797 2.701 13.992 9.3 14.196 17.099.199 7.799-3.204 12.996-9.2 16.296-5.998 3.299-14.292 5.099-22.094 5.396-7.797.301-17.797 0-17.797 0v-41.29zm47.89 102.279c-4.899 2.701-14.698 5.1-24.194 5.798-9.499.701-23.696.401-23.696.401v-45.893s13.598-.698 24.197 0c10.597.703 19.495 3.4 23.492 5.403 3.999 1.998 11 6.396 11 16.896 0 10.496-5.903 14.696-10.799 17.395z" />
                    </g>
                  </svg>
                </div>
                <div className="action-center-ticker-data">
                  <div className="action-center-ticker-data-one">
                    <span>
                      <div>
                        <span className="span-help bolder">BTC/USD</span>
                        {"   "}
                        <i
                          class="fa fa-info-circle"
                          aria-hidden="true"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                      <Tooltips data="API symbol: tBTCUSD" />
                    </span>
                  </div>
                  <div className="action-center-ticker-data-two">
                    <span className="fade-span">VOL</span>
                    <span className="hover-tooltip">
                      {" "}
                      <Link
                        style={{ color: "white", fontSize: "12px" }}
                        className="span-help"
                      >
                        {this.state.data
                          ? this.state.data[1]
                            ? this.state.data[1][7] * 24
                            : "--"
                          : "--"}{" "}
                      </Link>
                      <Tooltips data={`24th VOL ${data1} BTC`} />
                    </span>{" "}
                    <span className="fade-span">USD</span>
                  </div>
                  <div className="action-center-ticker-data-third">
                    <span className="fade-span">LOW</span>
                    <span>
                      {"  "}
                      <Link style={{ color: "white", fontSize: "14px" }}>
                        {this.state.data
                          ? this.state.data[1]
                            ? this.state.data[1][9]
                            : "--"
                          : "--"}
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="action-center-ticker-right">
                  <div className="action-center-ticker-data-one">
                    <span className="value-span">
                      <span>
                        {" "}
                        {this.state.data
                          ? this.state.data[1]
                            ? this.state.data[1][0]
                            : "--"
                          : "--"}
                      </span>
                    </span>
                  </div>
                  <div className="action-center-ticker-data-two">
                    <span className="value-span redcolor-rate">
                      {" "}
                      {this.state.data
                        ? this.state.data[1]
                          ? this.state.data[1][4]
                          : "--"
                        : "--"}{" "}
                    </span>
                    <span className="value-span">
                      <i
                        class="fa fa-sort-desc"
                        aria-hidden="true"
                        style={{
                          cursor: "pointer",
                          padding: "5px",
                          color: "red",
                          marginTop: "-5px",
                        }}
                      ></i>
                    </span>
                    <span className="value-span redcolor-rate">(1.23%)</span>
                  </div>
                  <div className="action-center-ticker-data-third">
                    <span className="fade-span">HIGH</span>
                    <span className="value-span">
                      {this.state.data
                        ? this.state.data[1]
                          ? this.state.data[1][8]
                          : "--"
                        : "--"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="action-center-ticker-bottom">
                <div className="action-center-ticker-svg"></div>
                <div className="action-center-ticker-data">
                  <div className="action-center-ticker-data-f">
                    <Link
                      style={{ color: "white", fontSize: "14px" }}
                      className="span-help"
                    >
                      Your BTC/USD rank
                    </Link>
                    <Tooltips data="Your BTC/USD rank in the current 3 hour windows" />
                  </div>
                </div>
                <div className="action-center-ticker-right">
                  <div style={{ textAlign: "end" }}>N/A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.home.data,
  };
};
Landing.propTypes = {
  getData: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { getData })(Landing);
