import Beans from "../assets/images/beans.jpg";
import Okro from "../assets/images/okro.jpg";
import Tomatoes from "../assets/images/product-images/tomato-medium.jpg";
import SpringOnions from "../assets/images/product-images/spring-onions.jpg";
import Cabbages from "../assets/images/product-images/cabbages.jpg";
import Rodo from "../assets/images/Rodo.jpeg";
import Cucumber from "../assets/images/Cucumber.jpeg";
import BellPepper from "../assets/images/BellPepper.jpeg";
import BigCabbage from "../assets/images/big-cabbage.jpg";
import BigYam from "../assets/images/big-yam.jpg";
import SmallYam from "../assets/images/small-yam.jpg";

export const allProductsData = [
  {
    id: "Beans",
    ItemImg: Beans,
    ItemName: "Sweet Beans",
    ItemIngredients:
      "Beans provide protein, fiber,folate,iron and other body aid nutrient",
    ItemPrice: (1500).toFixed(2),
    Category: "Pizza",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [
          { id: "1kg", value: "small" },
          { id: "medium", value: "medium" },
          { id: "large", value: "large" },
        ],
      },
    ],
  },

  {
    id: "okro",
    ItemImg: Okro,
    ItemName: "Okro ",
    ItemIngredients:
      "Body hydrating fruit that improves heart health and adds to healthy digestion",
    ItemPrice: (1500).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "large", value: "large" }],
      },
    ],
  },
  {
    id: "tomatoes",
    ItemImg: Tomatoes,
    ItemName: "Tomatoes",
    ItemIngredients:
      "Good for several sources of vitamins and mineralsuch as vitamins, pottassium and folate",
    ItemPrice: (1000).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "1kg", value: "1kg" }],
      },
    ],
  },
  {
    id: "meat-pizza",
    ItemImg: Tomatoes,
    ItemName: "Green Bell Pepper",
    ItemIngredients:
      "Veggies used for the preparation of several meal and sauce.",
    ItemPrice: (1000).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "1kg", value: "1kg" }],
      },
    ],
  },
  {
    id: "spring-onion",
    ItemImg: SpringOnions,
    ItemName: "Spring Onion",
    ItemIngredients:
      "Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.",
    ItemPrice: (1500).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "1kg", value: "1kg" }],
      },
    ],
  },
  {
    id: "rodo",
    ItemImg: Rodo,
    ItemName: "Pepper (Rodo)",
    ItemIngredients:
      "Rodo peppers are a type of chili pepper known for their red color and smoky flavor.",
    ItemPrice: (1500).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "1kg", value: "1kg" }],
      },
    ],
  },
  {
    id: "red-bell-pepper",
    ItemImg: BellPepper,
    ItemName: "Red Bell Pepper",
    ItemIngredients:
      "Redbell peppers are a type of sweet pepper available in various colors, including red, yellow, orange, and green.",
    ItemPrice: (1500).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "1kg", value: "1kg" }],
      },
    ],
  },
  {
    id: "carrot",
    ItemImg: Tomatoes,
    ItemName: "Carrots",
    ItemIngredients:
      "A crunchy, orange root vegetable with a sweet flavor. They can be eaten raw, roasted, boiled, or juiced. Carrots are a good source of Vitamin A.",
    ItemPrice: (1500).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "1kg", value: "1kg" }],
      },
    ],
  },
  {
    id: "cucumber",
    ItemImg: Cucumber,
    ItemName: "Cucumber",
    ItemIngredients:
      "A long, green gourd-like vegetable with watery flesh and mild flavor. There are seedless varieties and ones with small edible seeds. Cucumbers are great for salads, sandwiches, or refreshing dips like raita.",
    ItemPrice: (1000).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "1kg", value: "1kg" }],
      },
    ],
  },
  {
    id: "Big-yam",
    ItemImg: SmallYam,
    ItemName: "Yam ",
    ItemIngredients:
      "Yams are a root vegetable with starchy tubers that can be baked, roasted, or mashed.",
    ItemPrice: (6000).toFixed(2),
    Category: "Grains",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "large", value: "large" }],
      },
    ],
  },
  {
    id: "small-cabbages",
    ItemImg: Cabbages,
    ItemName: "Cabbages",
    ItemIngredients:
      "A pod-shaped vegetable that comes in various shapes, sizes, and spice levels. They range from mild to extremely hot depending on the variety.",
    ItemPrice: (1000).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "small", value: "small" }],
      },
    ],
  },
  {
    id: "cabbages",
    ItemImg: BigCabbage,
    ItemName: "Cabbages ",
    ItemIngredients:
      "A pod-shaped vegetable that comes in various shapes, sizes, and spice levels. They range from mild to extremely hot depending on the variety.",
    ItemPrice: (1500).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "Big", value: "Big" }],
      },
    ],
  },
  {
    id: "rustica-pizza",
    ItemImg: Tomatoes,
    ItemName: "Green Pepper ",
    ItemIngredients:
      "Green peppers are unripe bell peppers and have a grassy flavor.",
    ItemPrice: (4000).toFixed(2),
    Category: "Veggies",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "1kg", value: "1kg" }],
      },
    ],
  },
  {
    id: "Small-yam",
    ItemImg: BigYam,
    ItemName: "Yam ",
    ItemIngredients:
      "Yams are a root vegetable with starchy tubers that can be baked, roasted, or mashed.",
    ItemPrice: (4000).toFixed(2),
    Category: "Grains",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [{ id: "small", value: "small" }],
      },
    ],
  },
];
