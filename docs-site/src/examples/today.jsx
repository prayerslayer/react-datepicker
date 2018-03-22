import React from "react";
import DatePicker from "react-datepicker";
import { DateTime } from "luxon";

export default class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: DateTime.local()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {`
<DatePicker
    todayButton={"Vandaag"}
    selected={this.state.startDate}
    onChange={this.handleChange}
/>
`}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            todayButton="Vandaag"
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
