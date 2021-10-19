class Pet < ActiveRecord::Base
  has_many :visits 
  has_many :doctors, through: :visits

  # def visits
  #   Vist.all.select {|visit| vist.pet_id == self.id}
  # end 

  # def doctors 
  #   pet_doctors = visits.map {|vis| Doctor.find(vis.doctor_id)}
  # end 
end