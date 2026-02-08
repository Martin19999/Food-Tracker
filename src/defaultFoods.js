export const V1 = 15;
export const V2 = 31;
export const V3 = 46;

const rawFoods = [
  // ----------------Breakfast & carbs ------------------
  ["Milk", 64, 3.4, 100, "ml"],
  ["Greek *Style* low fat", 70, 4.7, 100, "g"],
  ["Greek *Style* 10%", 137, 5.1, 100, "g"],
  ["Egg", 81, 7.8, 1, ""],
  ["Tesco penaut butter", 6.33, 0.245, 1, "g"],
  ["Mayonaise", 6.86, 0.08, 1, "g"],

  ["Honey hoop/wheatie", 3.86, 0.091, 1, "g"],
  ["Tropical granola", 443, 9.4, 100, "g"],
  ["Pillow", 132, 2.5, 30, "g"],
  ["Oats", 37, 1.1, 10, "g"],
  ["Brennan blue/brown", 95, 3.7, 1, "slice"],
  ["Connell brown", 86, 4, 1, "slice"],
  ["Bagel raisin & cinnamon", 233, 8.2, 1, ""],
  ["Penne rigate/Semolina", 350, 12.5, 100, "g"],
  ["Potato", 77, 2, 100, "g"],

  // ----------------Lidl Meat------------------16
  //Chicken
  ["Chicken breast fillet", 106, 23.5, 100, "g"],
  ["Chicken drumsticks", 131, 18.7, 100, "g"],
  ["Chicken thighs 1000g", 193, 17.1, 100, "g"],
  ["Skinless boneless chicken thighs", 134, 19.5, 100, "g"],

  //Beef
  ["Beef mince 5% fat", 133, 21.3, 100, "g"],
  ["Beef mince 10% fat", 170, 20.3, 100, "g"],
  ["Beef mince 15% fat", 190, 19.7, 100, "g"],
  // ["Rib eye steaks", 201, 21.6, 100, "g"],
  ["2 Rib eye steaks", 256, 19, 100, "g"],
  ["Beef for stew", 129, 22.5, 100, "g"],
  ["Beef stir fry", 115, 21.4, 100, "g"],
  ["Beef burgers 454g", 269, 21, 1, ""],
  ["Lamb chops", 279, 17.6, 100, "g"],

  //Seafood
  ["4 skin on salmon darnes", 204, 19.1, 100, "g"],
  ["Sardine in sunflower oil", 218, 23, 100, "g"],
  ["Tuna in spring water", 111, 26, 100, "g"],
  ["Prawns", 56, 12.1, 100, "g"],

  // -------------------Veg----------------------15 (31)
  ["Tofu", 118, 13, 100, "g"],
  ["Baked beans", 81, 4.8, 100, "g"],
  ["Frozen peas", 70, 5.5, 100, "g"],
  ["Frozen corn", 77, 3.6, 100, "g"],
  ["Broccoli/Kale", 40, 4, 100, "g"],
  ["Green beans", 30, 2, 100, "g"],
  ["Cabbage", 30, 1, 100, "g"],
  ["Spinach", 23, 2.2, 100, "g"],
  ["Celery", 10, 0.5, 100, "g"],
  ["Carrots", 42, 0.6, 100, "g"],
  ["Onions", 40, 1, 100, "g"],
  ["Aubergine/Tomato/Cucumber", 20, 0.7, 100, "g"],
  
  ["4 berries medley", 49, 1, 100, "g"],
  ["Apple/Blueberries", 57, 0.4, 100, "g"],
  ["Banana", 90, 1, 100, "g"],


  // ------------Common Seasonings & Others------------- 15 (46)
  ["Protein powder", 93, 23, 25, "g"],
  ["Olive oil", 8, 0, 1, "ml"],
  ["Soy sauce", 1.2, 0.092, 1, "ml"],
  ["Seasame oil", 8.28, 0, 1, "ml"],
  ["Rice vinegar", 0.15, 0, 1, "ml"],
  ["Balsamic vinegar dressing", 3.49, 0.03, 1, "ml"],
  ["Unsalted butter", 7.57, 0.005, 1, "g"],
  ["Green Pesto", 4.64, 0.045, 1, "g"],
  ["Pesto", 364, 4.1, 100, "g"],
  ["Honey", 3.29, 0, 1, "g"],
  ["Dijon mustard", 1.56, 0.02, 1, "g"],
  ["Cornflour/Flour", 35.4, 0.06, 10, "g"],
  ["Mozzarella cheese", 309, 23.3, 100, "g"],
  ["Red cheddar", 83, 5.1, 1, "slice"],
];

export const defaultFoods = rawFoods.map(([name, calories, protein, per, perWhat]) => ({
  name,
  calories,
  protein,
  per,
  perWhat,
}));

