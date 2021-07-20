# lerna-demo

# lerna-demo

####  Monorepo 模式   

https://juejin.cn/post/6950082433647640612#heading-13
https://juejin.cn/post/6944877410827370504

#### module-2 依赖 module-1

#### lerna add module-1 --scope=module-2


```
 "bootstrap": "lerna bootstrap",  // 代码库link
  "start": "lerna run start",    // 执行子包里面的start
  "build": "lerna run build --sort --stream",  // 执行子包里面的build 按顺序
  "update-version": "lerna version --conventional-commits --no-push --no-changelog --no-git-tag-version", // 不根据 git tag 发布
  "publish-to-npm": "lerna publish from-package",  // 发布
  "publish-beta": "lerna publish --no-git-tag-version --dist-tag beta"  // 不根据 git tag 发布beta版
  
  
  lerna add mudule1 --scope=mudule2 #给包mudule1添加mudule2依赖

```# lerna-demo
# lerna-demo
