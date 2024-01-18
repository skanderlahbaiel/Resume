import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Certifications extends Component {
  render() {
    if (!this.props.data) return null;

    const certifications = this.props.data.certifications.map((certification, index) => {
      let certificationImage = "images/certifications/" + certification.image;

      return (
        <div key={index} className="columns certification-item">
          <div className="item-wrap">
            <Zmage alt={certification.name} src={certificationImage} />
            <div style={{ textAlign: "center" }}>{certification.name}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="certifications">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
                
              <h1><span>Certifications</span></h1>
              
              <div
                id="certifications-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {certifications}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Certifications;
