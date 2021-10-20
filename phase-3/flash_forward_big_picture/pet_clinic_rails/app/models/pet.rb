class Pet < ApplicationRecord
  has_many :visits
  has_many :doctors, through: :visits


  def average_review_rating
    rating_array = self.visits.map {|visit| visit.rating}

    rating_array.sum / rating_array.length 
  end 

  def more_info
    {
      name: self.name,
      pet_type: self.pet_type,
      age: self.age,
      doctors: self.doctors,
      average_rating: self.average_review_rating
    }
  end
end
