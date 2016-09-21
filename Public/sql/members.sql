/*
Navicat MySQL Data Transfer

Source Server         : tommy
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : dreamteam

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2016-09-21 18:57:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for members
-- ----------------------------
DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `introduce` text NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `extention1` varchar(255) DEFAULT NULL,
  `extention2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
