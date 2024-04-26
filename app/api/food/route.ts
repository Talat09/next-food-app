import { NextApiRequest, NextApiResponse } from "next";

let foodItems = [
  { id: "1", name: "Pizza" },
  { id: "2", name: "Burger" },
  // Add more initial food items if needed
];

export const getFoodItems = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json(foodItems);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export const addFoodItem = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name } = req.body;
    const newFoodItem = { id: Date.now().toString(), name };
    foodItems.push(newFoodItem);
    res.status(201).json(newFoodItem);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export const deleteFoodItem = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const { id } = req.query;
    foodItems = foodItems.filter((food) => food.id !== id);
    res.status(200).json({ message: "Item deleted" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
