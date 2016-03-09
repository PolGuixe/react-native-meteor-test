import assert from "assert";
import {name as appName} from "./react-native-meteor-test.js";

describe("react-native-meteor-test", () => {
  it("should export its name", () => {
    assert.strictEqual(appName, "react-native-meteor-test");
  });
});
