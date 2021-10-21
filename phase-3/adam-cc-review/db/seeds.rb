puts "Creating companies..."
Company.create(name: "Google", founding_year: 1998)
Company.create(name: "Facebook", founding_year: 2004)
Company.create(name: "Dunder Mifflin", founding_year: 2002)
Company.create(name: "Enron", founding_year: 1995)

puts "Creating devs..."
Dev.create(name: "Rick")
Dev.create(name: "Morty")
Dev.create(name: "Mr. Meseeks")
Dev.create(name: "Gazorpazop")

puts "Creating freebies..."

Freebie.create(item_name: "pickle", value: 12, dev_id: Dev.all.sample.id, company_id: Company.all.sample.id)
Freebie.create(item_name: "keychain", value: 100, dev_id: Dev.all.sample.id, company_id: Company.all.sample.id)
Freebie.create(item_name: "watch", value: 31, dev_id: Dev.all.sample.id, company_id: Company.all.sample.id)
Freebie.create(item_name: "RTX 4080", value: 11, dev_id: Dev.all.sample.id, company_id: Company.all.sample.id)
Freebie.create(item_name: "Lambo", value: 12, dev_id: Dev.all.sample.id, company_id: Company.all.sample.id)
Freebie.create(item_name: "Pinball Machine", value: 122, dev_id: Dev.all.sample.id, company_id: Company.all.sample.id)
Freebie.create(item_name: "Dan Blizerian", value: 14, dev_id: Dev.all.sample.id, company_id: Company.all.sample.id)
Freebie.create(item_name: "Kazoo", value: 72, dev_id: Dev.all.sample.id, company_id: Company.all.sample.id)

# ***************************************************************
# * TODO: create freebies! Remember, a freebie belongs to a dev *
# * and a freebie belongs to a company.                         *
# ***************************************************************
# Create freebies Here

puts "Seeding done!"
