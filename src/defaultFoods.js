const rawFoods = [
  // ----------------Breakfast & carbs ------------------10
  ["Milk", 64, 3.4, 100, "ml"],
  ["Egg", 81, 7.8, 1, ""],
  ["Tesco penaut butter", 6.33, 0.245, 1, "g"],
  ["Mayonaise", 6.86, 0.08, 1, "g"],

  ["Honey hoop/wheatie", 3.86, 0.091, 1, "g"],
  ["Oats", 37, 1.1, 10, "g"],
  ["Brennan blue/brown", 95, 3.7, 1, "slice"],
  ["Bagel raisin & cinnamon", 233, 8.2, 1, ""],
  ["Penne rigate", 350, 12.5, 100, "g"],
  ["Potato", 77, 2, 100, "g"],

  // ----------------Lidl Meat------------------9(19)
  //Chicken
  ["Chicken breast fillet", 106, 23.5, 100, "g"],
  ["Chicken drumsticks", 131, 18.7, 100, "g"],

  //Beef
  ["Beef mince 5% fat", 133, 21.3, 100, "g"],
  ["Beef mince 10% fat", 170, 20.3, 100, "g"],
  ["Beef mince 15% fat", 190, 19.7, 100, "g"],
  ["Beef for stew", 129, 22.5, 100, "g"],
  ["Beef stir fry", 115, 21.4, 100, "g"],

  //Seafood
  ["4 skin on salmon darnes", 204, 19.1, 100, "g"],
  ["Sardine in sunflower oil", 218, 23, 100, "g"],

  // -------------------Veg----------------------7(26)
  ["Tofu", 118, 13, 100, "g"],
  ["Baked beans", 81, 4.8, 100, "g"],
  ["Frozen peas", 70, 5.5, 100, "g"],
  ["4 berries medley", 49, 1, 100, "g"],
  ["Spinach", 23, 2.2, 100, "g"],
  ["Red onion (70g)", 40, 1, 1, ""],
  ["Tomato", 18, 0.7, 100, "g"],


  // ------------Common Seasonings-------------
  ["Olive oil", 8, 0, 1, "ml"],
  ["Soy sauce", 1.2, 0.092, 1, "ml"],
  ["Seasame oil", 8.28, 0, 1, "ml"],
  ["Rice vinegar", 0.15, 0, 1, "ml"],
  ["Balsamic vinegar dressing", 3.49, 0.03, 1, "ml"],
  ["Unsalted butter", 7.57, 0.005, 1, "g"],
  ["Green Pesto", 4.64, 0.045, 1, "g"],
  ["Honey", 3.29, 0, 1, "g"],
  ["Dijon mustard", 1.56, 0.02, 1, "g"],
  ["Pesto", 364, 4.1, 100, "g"],
  ["Mozzarella cheese", 309, 23.3, 100, "g"],

];

export const defaultFoods = rawFoods.map(([name, calories, protein, per, perWhat]) => ({
  name,
  calories,
  protein,
  per,
  perWhat,
}));

