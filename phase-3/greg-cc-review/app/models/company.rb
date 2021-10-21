class Company < ActiveRecord::Base
  has_many :freebies
  has_many :devs, through: :freebies


  def give_freebie(dev_instance, i_name, v)
    Freebie.create(item_id: i_name, value: v, dev_id: dev_instance.id, company_id: self.id)
  end 


  def self.oldest_company
    self.order(:founding_year)[0]
    # self.all.min_by {|comp| comp.founding_year}
  end 

end