import React from "react";
import DatePicker from "react-datepicker";
import { DateTime } from "luxon";

export default class MonthDropdown extends React.Component {
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
    selected={this.state.startDate}
    onChange={this.handleChange}
    showMonthDropdown
/>
`}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showMonthDropdown
          />
        </div>
      </div>
    );
  }
}
