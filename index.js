var recipes = { 
  breakfast: "cliff bar",
  lunch: "takis",
  dinner: "hot pocket"
}

function updateObjectWithKeyAndValue (obj, key, value) {
  recipes[key] = value
  return recipes
}

