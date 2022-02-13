db.createUser({
  user: "lensation",
  pwd: "Lenses123!!",
  roles: [{
      role: "readWrite",
      db: "lenses_back"
  }]
})