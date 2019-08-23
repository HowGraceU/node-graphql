# node-graphql
简单的 graphql 服务

使用以下gql查询数据
{
   dogs{
    id
    breed
  }
}

使用以下gql添加数据
mutation AddDog {
  dog: addDog(breed: "中华田园犬") {
    id
    breed
  }
}

使用以下gql查询异步数据
query{
  books{
    title
    author
  }
}