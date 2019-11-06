# open-rest-ui-boilerplate

open-rest 项目的 UI 样板项目

- 背景

  后端接口项目 [open-rest-es6-boilerplate](https://github.com/Witee/open-rest-es6-boilerplate) 融合了作者 [(zhaoxiongfei)](https://github.com/zhaoxiongfei) 多年后端开发经验，形成了一套非常方便、实用的接口项目，后端接口样板项目地址为: [open-rest-es6-boilerplate ](https://github.com/open-node/open-rest-es6-boilerplate) 欢迎 start。

- open-rest 组织

  - 地址:

    `https://github.com/open-node`

  - 官方文档:

    `https://open-rest.xiongfei.me/`

  后端接口样板项目 [open-rest-es6-boilerplate ](https://github.com/open-node/open-rest-es6-boilerplate) 集合了作者多个开源项目，如

  - open-rest
  - open-rest-with-mysql
  - open-rest-access-log
  - open-rest-helper-getter
  - open-rest-helper-assert
  - open-rest-helper-params
  - open-rest-helper-rest

  等等。。。

* 本项目目标

  本项目使用后端 API 样板项目 [open-rest-es6-boilerplate ](https://github.com/open-node/open-rest-es6-boilerplate) 做为后端 API，详细介绍 [open-test](https://github.com/open-node) 项目如何使用，相信在使用过后会对 open-rest 拍手称赞。

- 使用方法

  - clone 代码

    ```
    前端: git clone https://github.com/Witee/open-rest-ui-boilerplate.git
    后端: git clone https://github.com/Witee/open-rest-es6-boilerplate.git

    ```

  - 启动

    > 后端需要提前安装 MySQL 和 redis，在 `npm run setup` 时需要使用

    ```
    cd open-rest-es6-boilerplate

    配置后端: npm run setup

    启动后端: npm start

    新开终端:
    cd open-rest-ui-boilerplate

    启动前端: npm start

    ```

  - 访问

    ```
    http://localhost:3000/

    默认的登录信息为:
    账号: admin@test.com  密码: admin
    ```

- 相关图片

  ![首页](https://raw.githubusercontent.com/Witee/statics/master/open-rest-ui-boilerplate/1.png)
  ![添加用户](https://raw.githubusercontent.com/Witee/statics/master/open-rest-ui-boilerplate/2.png)
  ![过期提醒](https://raw.githubusercontent.com/Witee/statics/master/open-rest-ui-boilerplate/3.png)
  ![登录](https://raw.githubusercontent.com/Witee/statics/master/open-rest-ui-boilerplate/4.png)

* 后端 API 使用技巧

  - 获取用户列表

  > sort: 按 createAt 时间倒序输出
  > maxResults: 最大获取条数
  > includes: 增加其它表中字段，如 creator

  ```
    GET /user?sort=-createAt&maxResults=10&includes=creator
  ```

  - 搜索用户

  > name_like: 数据库中字段名为 `name`，可使用 `_like` 方式过滤名称中包含`test`的用户

  ```
    GET /user?name_like=*test*
  ```

* 匹配角色

  > roles: 数据库中字段名为 `role`，可使用 `s` 方式过滤角色中完整包含`admin`或`member`的用户

  ```
    GET /user?roles=admin,member
  ```

  - 修改用户信息

  > 使用 PATCH 或 PUT 方式可修改用户信息，需要在 data 中传输数据，如 {'name': 'newName'}

  ```
    PATCH/PUT /user/:id
  ```

  - 添加用户

  > 使用 POST 方式可以新增用户，同样需要在 data 中传输数据

  ```
    POST /user
  ```
