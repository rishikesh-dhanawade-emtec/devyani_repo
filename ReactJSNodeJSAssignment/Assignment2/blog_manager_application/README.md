# NEST Application using GRAPHQL API

# Structure

- AppModule

  - BlogModule
    - BlogResolver 
    - BlogService
    - BlogEntity
    - BlogType 

  - CommentModule
    - CommentResolver 
    - CommentService 
    - CommentEntity 
    - CommentType

  - UserModule
    - UserResolver 
    - UserService 
    - UserEntity 
    - UserType

# APIs

- Blog -> BlogController
  - GET /blog
  - GET /blog/:id
  - POST /blog
  - PATCH /blog/likes/:id
  - PATCH /blog/dislikes/:id
  - PUT /blog/:userId/:blogId
  - DELETE /blog/:id
  - GET /blog/user/:userId
  - GET /blog/search/:tags

- User -> UserController
  - POST /user/signup
  - POST /user/signin
  - PUT /user/:id
  - GET /user/:id

- Comments -> CommentController
  - POST /comments/:userId/:blogId
  - GET /comments/:blogId