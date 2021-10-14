require 'pry'

# self
# class variables & Methods
# instance variables & Methods

# inheritance


class Player

  # attr_reader :name, :number
  # attr_writer :name, :number

  attr_accessor :name, :number

  def initialize(name, number, height)
    @name = name
    @number = number
    @height = height
  end 

  # def number=(num)
  #   @number = num
  # end 

  def change_number(num)
    # self.number=(num)
    self.number = num
  end 

  def self.count_players
    binding.pry
  end 

end


g = Player.new("Greg", 8, "6'9")
r = Player.new("Robin", 8, "6'9")
s = Player.new("Sam", 8, "6'9")
f = Player.new("Forrest", 8, "6'9")


binding.pry 
puts 'hi'