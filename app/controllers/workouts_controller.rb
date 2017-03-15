class WorkoutsController < ApplicationController
  def index
    @workouts = Workout.order('apt_time ASC')
    @workout = Workout.new
  end

  def create
    @workout = Workout.create(workout_params)
    @workouts = Workout.order('apt_time ASC')

    redirect_to :root
  end

  private

  def workout_params
    params.require(:workout).permit(:name, :apt_time)
  end
end
