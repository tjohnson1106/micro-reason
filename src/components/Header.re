[@bs.val] external require: string => string = "";
let logo = require("../img/logo.svg");

// _ = unused will be changed
[@react.component]
let make = (~openModal, ~isModalOpened) => {
  <header className="flex mb-4 sticky top-0" />;
};
