import server$ from "solid-start/server";
import { isServer } from "solid-js/web";
import { DEV } from "solid-js";

export default server$(async (path: string) => {
  if (DEV) {
    console.log("I'm in DEV mode");
  }

  if (isServer) {
    console.log("Running on the server");
  }

  return {foo: "bar"};
});
