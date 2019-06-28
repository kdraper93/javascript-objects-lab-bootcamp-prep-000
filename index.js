var recipes = { 
  breakfast: "cliff bar",
  lunch: "takis",
  dinner: "hot pocket"
}

function updateObjectWithKeyAndValue (recipes, snack, apple) {
  return Object.assign({}, recipes, {[snack]:apple})
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, snack, apple) {
  recipes[snack] = apple;
  return recipes
}