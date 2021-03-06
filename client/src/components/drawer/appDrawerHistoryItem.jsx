import React from 'react';

class AppDrawerHistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          {this.props.application.histories.map((history) => {
            return (
              <p>{history.date + '    ' + history.event }</p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AppDrawerHistoryItem;
