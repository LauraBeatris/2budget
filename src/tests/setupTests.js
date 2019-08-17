import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

if (process.env.NODE_ENV === "test") {
  // For default it looks for a .env file so we need to set up others with a
  // path
  require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

Enzyme.configure({
  adapter: new Adapter()
});
