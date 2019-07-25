// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Js_exn from "bs-platform/lib/es6/js_exn.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var ppx_printed_query = "mutation addPost($title: String!, $content: String!, $sanitize: Boolean, $coverImg: String)  {\ninsert_posts(objects: {user_id: \"first-user-with-dummy-id\", title: $title, content: $content, sanitize: $sanitize, cover_img: $coverImg})  {\naffected_rows  \n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "insert_posts");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeObject(value$1);
        var tmp$1;
        if (match$3 !== undefined) {
          var match$4 = Js_dict.get(Caml_option.valFromOption(match$3), "affected_rows");
          var tmp$2;
          if (match$4 !== undefined) {
            var value$2 = Caml_option.valFromOption(match$4);
            var match$5 = Js_json.decodeNumber(value$2);
            tmp$2 = match$5 !== undefined ? match$5 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$2));
          } else {
            tmp$2 = Js_exn.raiseError("graphql_ppx: Field affected_rows on type posts_mutation_response is missing");
          }
          tmp$1 = {
            affected_rows: tmp$2
          };
        } else {
          tmp$1 = Js_exn.raiseError("graphql_ppx: Object is not a value");
        }
        tmp = Caml_option.some(tmp$1);
      }
    } else {
      tmp = undefined;
    }
    return {
            insert_posts: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make(title, content, sanitize, coverImg, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[
                /* tuple */[
                  "title",
                  title
                ],
                /* tuple */[
                  "content",
                  content
                ],
                /* tuple */[
                  "sanitize",
                  sanitize !== undefined ? sanitize : null
                ],
                /* tuple */[
                  "coverImg",
                  coverImg !== undefined ? coverImg : null
                ]
              ]),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var title = variables.title;
  var content = variables.content;
  var sanitize = variables.sanitize;
  var coverImg = variables.coverImg;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[
                /* tuple */[
                  "title",
                  title
                ],
                /* tuple */[
                  "content",
                  content
                ],
                /* tuple */[
                  "sanitize",
                  sanitize !== undefined ? sanitize : null
                ],
                /* tuple */[
                  "coverImg",
                  coverImg !== undefined ? coverImg : null
                ]
              ]),
          parse: parse
        };
}

function ret_type(f) {
  return /* module */[];
}

var MT_Ret = /* module */[];

var PostMutation = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

function AddPostForm(Props) {
  Props.closeModal;
  React.useState((function () {
          return "";
        }));
  React.useState((function () {
          return "";
        }));
  React.useState((function () {
          return false;
        }));
  var match = React.useState((function () {
          return "https://res.cloudinary.com/bracket-factory/image/upload/v1563567377/reason_blog_hong_kong.jpg";
        }));
  var setCoverImage = match[1];
  return React.createElement("input", {
              onChange: (function (e) {
                  return Curry._1(setCoverImage, e.target.value);
                })
            });
}

var make$1 = AddPostForm;

export {
  PostMutation ,
  make$1 as make,
  
}
/* react Not a pure module */
