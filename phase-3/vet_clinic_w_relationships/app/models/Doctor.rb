class Doctor < ActiveRecord::Base
  has_many :vists
  has_many :doctors, through: :visits

  def average_rating
    rating_array = self.visits.map {|visit| visit.rating}
    rating_array.sum / rating_array.length
  end 

end
