import { faker } from "@faker-js/faker";

export const User = Object.freeze({
  validUser: {
    username: faker.name.fullName(),
    password: faker.internet.password(8, true, /[A-Z]/),
  },
  invalidUser: {
    username: faker.name.fullName().replace(/./, "*"),
    password: faker.internet.password(8, true, /[A-Z]/),
  },
});

export const Recipe = Object.freeze({
  vegetableSoup: "Vegetable Soup",
});

export const SortOptions = Object.freeze({
  relevance: "Relevance",
  newest: "Newest",
  name: "Name",
  totalTime: "Total time, shortest",
  prepTime: "Prep. time, shortest",
  bestRated: "Best rated",
});

export const Difficulty = Object.freeze({
  easy: "Easy",
  medium: "Medium",
  hard: "Hard"
});

export const Section = Object.freeze({
  ingredients: "Ingredients",
  nutrition: "Nutrition"
});