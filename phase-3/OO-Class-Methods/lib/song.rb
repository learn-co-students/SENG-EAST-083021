# How would you define an instance method in your own words?
# How would you define a class method?
# When would we want to define one vs. the other?


# Class or Instance method?
    # The Class is "Driver"
    # Attributes are "number_of_trips", "rating", "money"
    # A method that determines drivers with the top 3 amount of trips
    # A method that adds money to a driver's account
    # A method returns the driver with the highest rating

# What is self? (depends on the context)

class Song
    attr_accessor :name, :artist, :genre

    @@count = 0
    @@artists = []

    def initialize(name, artist, genre)
        @name = name
        @artist = artist
        @genre = genre
        @@count += 1
        @@artists << @artist
    end

    def self.count
        @@count
    end

    def self.artists
        #unique values for each
        puts "all the artists"
        @@artists.uniq
    end

end


song1 = Song.new("Cool guy", "jim", "country")
song2 = Song.new("Bad guy", "joe", "rap")
song3 = Song.new("Nice girl", "susy", "pop") 
song4 = Song.new("Nice girl1", "susy", "pop1") 
song5 = Song.new("Nice girl2", "susy", "pop2") 

puts Song.count
puts Song.artists

