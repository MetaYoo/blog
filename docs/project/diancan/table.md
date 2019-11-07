# 表设计

## 登录用户及权限相关表
> 权限跟权限组绑定，权限组跟登录用户绑定
> > SECURITY_PERMISSION表：权限相关信息
> > SECURITY_GROUP表：权限组相关信息
> > SECURITY_GROUP_PERMISSION表：权限组-权限关联
> > USER_LOGIN表：用户注册登录相关的账号信息
> > USER_LOGIN_SECURITY_GROUP表: 登录用户权限组关联表


## 参与者相关表
> 父表：PARTY 存放公共信息
> > 子表：PERSON  存放个人信息
> > 子表：PARTY_GROUP 存放组织机构信息

