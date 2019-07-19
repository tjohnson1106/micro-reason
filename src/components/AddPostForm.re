[@react.component]
let make = (~closeModal) => {
  let (title, setTitle) = React.useState(() => "");
  let (content, setContent) = React.useState(() => "");
  let (sanitize, setSanitize) = React.useState(() => false);
  let (coverImg, setCoverImage) =
    React.useState(() =>
      "https://res.cloudinary.com/bracket-factory/image/upload/v1563567377/reason_blog_hong_kong.jpg"
    );

  <input onChange={e => e->ReactEvent.Form.target##value |> setCoverImage} />;
};