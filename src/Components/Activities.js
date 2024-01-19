import React, { Component } from "react";
import Fade from "react-reveal";

class Activities extends Component {
  render() {
    if (!this.props.data) return null;

    const activities = this.props.data.map((activity, index) => {
        let activityimage = "images/extracurricular/" + activity.image;
      return (
        <div key={index} className="columns activity-item">
          <div className="item-wrap">
            <div style={{ textAlign: "center" }}>
              <h3>{activity.title}</h3>
              <img src={activityimage} alt={activity.title} />
              <p>{activity.description}</p>
              <p>{activity.date}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="activities">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h2>Extra activities</h2>
              <div id="activities-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {activities}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Activities;
