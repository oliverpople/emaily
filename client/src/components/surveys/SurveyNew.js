// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview />;
    }

    return <SurveyForm />;
  }

  render() {
    return <div>{this.rendeContent()}</div>;
  }
}

export default SurveyNew;
