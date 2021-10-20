class Doctor < ApplicationRecord
  has_many :visits
  has_many :pets, through: :visits
end
