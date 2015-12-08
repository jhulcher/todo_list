100.times {
  ToDo.create!(
    title: Faker::Name.name,
    body: Faker::Lorem.paragraph
  )
}
