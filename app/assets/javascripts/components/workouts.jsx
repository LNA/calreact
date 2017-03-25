var Workouts = React.createClass({
  render: function() {
    return (
      <div>
        { this.props.workouts.map(function(workout) {
          return (
            <Workout workout={workout}/>
          )
        })}
      </div>
    )
  }
});
