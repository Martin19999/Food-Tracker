const rawFoods = [
  // Lidl Meat
  ["Lidl Beef Mince 10% fat", 170, 20.3, 100],
  
];

export const defaultFoods = rawFoods.map(([name, calories, protein, per]) => ({
  name,
  calories,
  protein,
  per,
}));

