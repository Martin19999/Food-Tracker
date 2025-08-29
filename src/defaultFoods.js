const rawFoods = [
  ["Milk", 106, 23.5, 100, "g"],




  // Lidl Meat
  
  //Chicken
  ["Chicken breast fillet", 106, 23.5, 100, "g"],
  ["Chicken drumsticks", 131, 18.7, 100, "g"],

  //Beef
  ["Beef mince 10% fat", 170, 20.3, 100, "g"],
  ["Steak mince 15% fat", 190, 19.7, 100, "g"],
  ["Beef stir fry", 115, 21.4, 100, "g"],

  //Seafood
  ["4 skin on salmon darnes", 204, 19.1, 100, "g"],

  
];

export const defaultFoods = rawFoods.map(([name, calories, protein, per, perWhat]) => ({
  name,
  calories,
  protein,
  per,
  perWhat,
}));

