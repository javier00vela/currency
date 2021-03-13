/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100417
 Source Host           : localhost:3306
 Source Schema         : currency

 Target Server Type    : MySQL
 Target Server Version : 100417
 File Encoding         : 65001

 Date: 12/03/2021 18:39:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

--
-- Database: `currency`
--
CREATE DATABASE IF NOT EXISTS `currency` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `currency`;




-- ----------------------------
-- Table structure for cambio_historico
-- ----------------------------
DROP TABLE IF EXISTS `cambio_historico`;
CREATE TABLE `cambio_historico`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `currency_send` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `currency_get` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `value_send` float NOT NULL,
  `value_get` float NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cambio_historico
-- ----------------------------

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `apellidos` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `usuario` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `contrasena` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO `usuario` VALUES (6, 'hfghfgh', 'ghffghfg', 'eeeee', 'ZWVlZWU=');
INSERT INTO `usuario` VALUES (7, 'aaaa', 'aaaa', 'aaaaa', 'YWFhYWE=');
INSERT INTO `usuario` VALUES (8, 'javier', 'vela', 'javier', 'amF2aWVy');

SET FOREIGN_KEY_CHECKS = 1;
