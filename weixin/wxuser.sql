CREATE DATABASE weixin CHARSET=UTF8;
USE weixin;

#用户表
CREATE TABLE wxuser(
     uid INT PRIMARY KEY AUTO_INCREMENT,
     uname VARCHAR(30),
     upwd VARCHAR(30)
);
SET NAMES GBK;
INSERT INTO wxuser VALUES(null,'17712345678','123456');
SELECT*FROM wxuser;