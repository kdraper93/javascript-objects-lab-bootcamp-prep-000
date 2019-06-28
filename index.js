var recipes = { 
  breakfast: "cliff bar",
  lunch: "takis",
  dinner: "hot pocket"
}

function updateObjectWithKeyAndValue (obj, key, value) {
  return Object.assign({}, obj, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, snack, apple) {
  recipes[snack] = apple;
  return recipes
}