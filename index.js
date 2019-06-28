var recipes = { 
  breakfast: "cliff bar",
  lunch: "takis",
  dinner: "hot pocket"
}

function updateObjectWithKeyAndValue (obj, key, value) {
  return recipes.assign({}, obj, {[key]:value})
}