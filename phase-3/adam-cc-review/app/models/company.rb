class Company < ActiveRecord::Base
    has_many :freebies
    has_many :devs, through: :freebies

  
    def self.oldest_company
        self.all.min_by {|company| company.founding_year}
    end

    def give_freebie(dev, item_name, value)
        Freebie.create(item_name: item_name, value: value, dev_id: dev.id, company_id: self.id)
        puts "Giving a #{value} dollar #{item_name} to dev number#{dev.id} from #{self.name} ... fo free"
    end

end

# Company.oldest_company => "a number"

# cool_comp = Company.create()
# cool_comp.give_freebie(dev.id, "chicken", 123)