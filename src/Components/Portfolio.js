import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map((project, index) => {
      let projectImage = "images/portfolio/" + project.image;

      return (
        <div key={index} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={project.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="button">
                Github
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
