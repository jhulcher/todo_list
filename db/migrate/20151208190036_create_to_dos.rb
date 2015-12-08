class CreateToDos < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.string :title, null: false
      t.string :body
      t.boolean :done, default: false

      t.timestamps null: false
    end
  end
end
