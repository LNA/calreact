var Workout = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.workout.name}</h3>
        <p>{this.props.workout.apt_time}</p>
      </div>
    )
  }
});
