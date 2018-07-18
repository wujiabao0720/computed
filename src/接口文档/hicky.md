# 接口文档
/createUser
## 添加用户
字段名|类型|是否必须|说明
-|-|-|-
name|String|m|用户的名字
userId|int|m |确认用户
basemoney|float|m|用户的基础钱数

## 返回数据
字段名|类型|说明
-|-|-
msg|String|描述是否成功添加
code|0-失败 1-成功 2-重复|对数据进行判断

/removeUser
## 删除用户
字段名|类型|说明
-|-|-
id|int|删除当前id的数据

/updata
## 修改用户
字段名|类型|是否必须|说明
-|-|-|-
userID|int|m|查找用户信息
name|String|m|修改用户name

/getAllMoney
## 获取总钱数

/getUserMoney
##获取所有用户以及用户的金额
/userRecord
## 获取指定用户的提交记录
字段名|类型|是否必须|说明
-|-|-|-
userId|int|m |查询用户的记录

## 返回
字段名|类型|是否必须|说明
-|-|-|-
name|String|m|用户的名字
时间|date|m|提交的时间
money|float|m |
remark|String|m|用户花钱的用途

# 个人提交的记录
字段名|类型|是否必须|说明
-|-|-|-
name|String|m|用户的名字
time|date|m|提交的时间
money|float|m |
remark|String|m|用户花钱的用途

