module PostsQuery = [%graphql
  {|
   query getPosts {
       posts {
           title
           cover_img
           content
           created_at
           user {
               name
               avatar_url
           }
       }
   }

|}
];

module GetPostsQuery = ReasonApollo.CreateQuery(PostsQuery);