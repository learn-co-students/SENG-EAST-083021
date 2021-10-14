# your code goes here
class Person 
    attr_reader :name, :happiness, :hygiene
    attr_accessor :bank_account

    def initialize(name)
        @name = name
        @bank_account = 25
        @happiness = 8
        @hygiene = 8
        @@all << self
    end

    def happiness=(happiness)
        if happiness >= 10
            @happiness = 10
        elsif happiness < 0
            @happiness = 0
        else
             @happiness = happiness
        end
    end

    def hygiene=(hygiene)
        if hygiene >= 10
            @hygiene = 10
        elsif hygiene < 0
            @hygiene = 0
        else
             @hygiene = hygiene
        end
    end

    def clean?
      self.hygiene  > 7
    end

    def happy?
        self.happiness > 7
    end
    
    def self.all
        @@all
    end

    def self.most_clean
        #loop throuh all of the Person instances in @@all
        #return the top three most clean
    end
end

adam = Person.new("adam")
cody = Person.new("cody")

#instance method being called on an instance of a person ("cody")
cody.clean?

#class method "all" being called on the Person class 
Person.all

Person.most_clean