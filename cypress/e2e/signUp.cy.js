import { landingPage, signUpPage } from "../support/pages/landingPage";
import { User } from "../fixtures/common";

describe("Register a New User", () => {
  [
    {
      username: User.validUser.username,
      password: User.validUser.password,
    },
    {
      username: User.invalidUser.username,
      password: User.invalidUser.password,
    },
  ].forEach((user) => {
    it("Fills in Sign Up form", () => {
      landingPage.visitLandingPage();
      landingPage.clickAuthenticationButton();
      signUpPage.fillSignUpForm(user);
    });
  });
});
