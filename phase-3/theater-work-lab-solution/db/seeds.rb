
characters = ["Nick", "Scott"]
characters.each do |char|
  Role.create(character_name: char)
end 


names = ["Greg", "Matt", "Kevin", "Paul"]
names.each do |name|
  Audition.create(hired: false, actor: name, location: "NYC", phone: 401789123, role_id: Role.all.sample.id)
end 
