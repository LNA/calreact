var Workouts = React.createClass({
  render: function() {
    return (
      <div>
       {this.props.workouts.map(function(workout) {
          return (
           <div>
             <h3>{workout.name}</h3>
             <p>{workout.apt_time}</p>
           </div>

          )
        })}
       </div>
      )
  }
});
