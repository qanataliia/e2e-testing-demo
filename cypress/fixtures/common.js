import { faker } from "@faker-js/faker";

export const User = Object.freeze({
  validUser: {
    username: faker.name.fullName(),
    password: faker.internet.password(8, true, /[A-Z]/),
  },
  invalidUser: {
    username: faker.name.fullName().replace(/./, '*'),
    password: faker.internet.password(8, true, /[A-Z]/),
  },
});

export const Recipe = Object.freeze({
  vegetableSoup: 'Vegetable Soup',
});