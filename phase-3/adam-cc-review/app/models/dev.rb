class Dev < ActiveRecord::Base
    has_many :freebies
    has_many :companies, through: :freebies

    def received_one?(item_name)
        self.freebies.any? { |f| f.item_name == item_name }
    end

    def give_away(dev, freebie)
        if self == freebie.dev
            freebie.update(dev_id: dev.id)
        end

        # freebie.update(dev_id: dev.id) unless freebie.dev != self
    end
end


# dev1 = Dev.create()
# dev1.received_one("chicken")
# dev1.give_away(dev.first, freebie.first)
# => reassign/update the freebie's dev_id if the freebie.first belongs to dev1
