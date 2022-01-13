-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Questions'
--
-- ---

DROP TABLE IF EXISTS `Questions`;

CREATE TABLE `Questions` (
  `id` INTEGER NOT NULL DEFAULT NOT NULL UNIQUE,
  `body` MEDIUMTEXT NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `asker_name` VARCHAR NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  `reported` TINYINT NULL DEFAULT NULL,
  `id_Users` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER NOT NULL DEFAULT NOT NULL UNIQUE,
  `Name` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Answers'
--
-- ---

DROP TABLE IF EXISTS `Answers`;

CREATE TABLE `Answers` (
  `id` INTEGER NOT NULL DEFAULT NOT NULL UNIQUE,
  `body` MEDIUMTEXT NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `answerer_name` INTEGER NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  `photos` INTEGER NULL DEFAULT NULL,
  `id_Questions` INTEGER NULL DEFAULT NULL,
  `id_Users` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Questions` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);
ALTER TABLE `Answers` ADD FOREIGN KEY (id_Questions) REFERENCES `Questions` (`id`);
ALTER TABLE `Answers` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Questions` (`id`,`body`,`date`,`asker_name`,`helpfulness`,`reported`,`id_Users`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Users` (`id`,`Name`) VALUES
-- ('','');
-- INSERT INTO `Answers` (`id`,`body`,`date`,`answerer_name`,`helpfulness`,`photos`,`id_Questions`,`id_Users`) VALUES
-- ('','','','','','','','');