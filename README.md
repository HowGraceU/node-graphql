# node-graphql
基于 apollo 实现的简单的 graphql 服务

使用 yarn 安装依赖
```js
yarn
```

使用 node ./src 启动服务，默认使用 [http://localhost:4000/](http://localhost:4000/)
```js
node ./src
```

使用以下gql查询数据
```js
{
   dogs{
    id
    breed
  }
}
```

使用以下gql添加数据
```js
mutation AddDog {
  dog: addDog(breed: "中华田园犬") {
    id
    breed
  }
}
```

使用以下gql查询异步数据
```js
{
  books{
    title
    author
  }
}
```