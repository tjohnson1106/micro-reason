// experimenting using pipe operator for type definitionss
let ste = ReasonReact.string;
[@react.component]
let make = () => {
  <div> {"Hello Reason" |> ste} </div>;
};