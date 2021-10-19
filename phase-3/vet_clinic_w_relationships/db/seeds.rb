
Visit.destroy_all
Pet.destroy_all
Doctor.destroy_all


puts "created pets"
pet1 = Pet.create(name: "monkey", age: 2, pet_type: "cat")
pet2 = Pet.create(name: "booboo", age: 12, pet_type: "cat")
pet3 = Pet.create(name: "susan", age: 12, pet_type: "dog")


puts "created doctors"
doctor1 = Doctor.create(name: "monkey", specialty: "Elbow")
doctor2 = Doctor.create(name: "booboo", specialty: "Head")
doctor3 = Doctor.create(name: "susan", specialty: "Teeth")


puts "created vistis"

20.times do 
  Visit.create(doctor_id: Doctor.all.sample.id, pet_id: Pet.all.sample.id, rating: 5, review: "whish I did not have to go")
end 



