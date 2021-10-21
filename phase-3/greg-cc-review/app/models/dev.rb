class Dev < ActiveRecord::Base
  has_many :freebies
  has_many :companies, through: :freebies

  def recieved_one?(item)
    self.freebies.any? {|freebie| freebie.item_name == item} 
    # selected_array = self.freebies.select {|freebie| freebie.item_name == item} 

    # if selected_array.length > 0
    #   true 
    # else  
    #   false 
    # end 
  end

  def give_away(dev_instance, freebie_instance)

    if freebie_instance.dev_id == self.id
      freebie_instance.update(dev_id: dev_instance.id)
      'Enjoy your new Freebie'
    else 
      "sorry not yours to give"
    end 

  end 
end

