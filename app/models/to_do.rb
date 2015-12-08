class ToDo < ActiveRecord::Base
  validates :title, presence: true
  validates :done, inclusion: { in: [true, false] }
end
