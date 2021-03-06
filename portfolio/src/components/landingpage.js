import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="data:image/jpeg;base64,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"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </p>

              <div className="social-links">
                {/* Linked In */}
                <a
                  href="https://www.linkedin.com/in/connormayfield/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/connormayfield"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
