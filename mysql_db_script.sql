-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema care_activity_mgr
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema care_activity_mgr
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `care_activity_mgr` DEFAULT CHARACTER SET latin1 ;
USE `care_activity_mgr` ;

-- -----------------------------------------------------
-- Table `care_activity_mgr`.`activity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `care_activity_mgr`.`activity` (
  `id` INT(11) NOT NULL,
  `client_id` INT(11) NOT NULL,
  `care_id` INT(11) NULL DEFAULT NULL,
  `date_added` DATE NULL DEFAULT NULL,
  `description` VARCHAR(45) NULL DEFAULT NULL,
  `date_start` DATE NULL DEFAULT NULL,
  `date_end` DATE NULL DEFAULT NULL,
  `special_care` VARCHAR(45) NULL DEFAULT NULL,
  `instructions` VARCHAR(45) NULL DEFAULT NULL,
  `repeating` VARCHAR(45) NULL DEFAULT NULL,
  `repeat_until` DATE NULL DEFAULT NULL,
  `medication_interval` VARCHAR(45) NULL DEFAULT NULL,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_clientid_idx` (`client_id` ASC),
  INDEX `fk_careproviderid_idx` (`care_id` ASC))
ENGINE = MyISAM
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `care_activity_mgr`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `care_activity_mgr`.`clients` (
  `id` INT(11) NOT NULL,
  `userid` INT(11) NOT NULL,
  `first` VARCHAR(45) NULL DEFAULT NULL,
  `last` VARCHAR(45) NULL DEFAULT NULL,
  `dob` DATE NULL DEFAULT NULL,
  `sex` VARCHAR(45) NULL DEFAULT NULL,
  `location` VARCHAR(45) NULL DEFAULT NULL,
  `type_of_care` VARCHAR(45) NULL DEFAULT NULL,
  `allergies` VARCHAR(45) NULL DEFAULT NULL,
  `conditions` VARCHAR(45) NULL DEFAULT NULL,
  `doctor` VARCHAR(45) NULL DEFAULT NULL,
  `emergency_contact` VARCHAR(45) NULL DEFAULT NULL,
  `emergency_phone` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_care_provider_idx` (`userid` ASC))
ENGINE = MyISAM
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `care_activity_mgr`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `care_activity_mgr`.`users` (
  `id` INT(11) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `first` VARCHAR(45) NULL DEFAULT NULL,
  `last` VARCHAR(45) NULL DEFAULT NULL,
  `password_reminder` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
