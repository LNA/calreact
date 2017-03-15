class CreateWorkouts < ActiveRecord::Migration[5.0]
  def change
    create_table :workouts do |t|
      t.string :name
      t.text :description
      t.datetime :apt_time

      t.timestamps
    end
  end
end
