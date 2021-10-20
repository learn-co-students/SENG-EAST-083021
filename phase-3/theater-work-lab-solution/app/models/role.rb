class Role < ActiveRecord::Base
  has_many :auditions

  def actors 
    self.auditions.map {|audition| audition.actor}
  end 

  def locations 
    self.auditions.map {|audition| audition.location}
  end 

  def lead
    actor = self.auditions.find {|audition| audition.hired == true}
    
    if actor 
      actor 
    else 
      'no actor has been hired for this role'
    end 
  end 
  
  def understudy
    actors = self.auditions.select {|audition| audition.hired == true}

    if actors.length >= 2
      actors[1]
    else 
      'no actor has been hired for this role'
    end 

  end 

end