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
-- Table `care_activity_mgr`.`appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `care_activity_mgr`.`appointments` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `start_time` VARCHAR(10) NOT NULL,
  `end_time` VARCHAR(10) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `descripton` VARCHAR(140) NULL DEFAULT NULL,
  `patient_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_apps` (`patient_id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `care_activity_mgr`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `care_activity_mgr`.`clients` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userid` INT(11) UNSIGNED NOT NULL,
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
  `appointments_id` INT(11) UNSIGNED NOT NULL,
  `routines_id` INT(11) UNSIGNED NOT NULL,
  `medication_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_care_provider_idx` (`userid` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `care_activity_mgr`.`medication`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `care_activity_mgr`.`medication` (
  `id` INT(11) UNSIGNED NOT NULL,
  `date` DATE NOT NULL,
  `description` VARCHAR(140) NULL DEFAULT NULL,
  `start_time` VARCHAR(10) NOT NULL,
  `end_time` VARCHAR(10) NOT NULL,
  `special_care` VARCHAR(140) NULL DEFAULT NULL,
  `instructions` VARCHAR(140) NULL DEFAULT NULL,
  `repeat_until` DATE NOT NULL,
  `medication_interval` VARCHAR(45) NOT NULL,
  `repeating` INT(11) NULL DEFAULT NULL,
  `patient_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_med` (`patient_id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `care_activity_mgr`.`routines`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `care_activity_mgr`.`routines` (
  `id` INT(11) UNSIGNED NOT NULL,
  `date` DATE NOT NULL,
  `description` VARCHAR(140) NULL DEFAULT NULL,
  `start_time` VARCHAR(10) NOT NULL,
  `end_time` VARCHAR(10) NOT NULL,
  `special_care` VARCHAR(140) NULL DEFAULT NULL,
  `instructions` VARCHAR(140) NULL DEFAULT NULL,
  `repeat` VARCHAR(140) NULL DEFAULT NULL,
  `patient_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_routines` (`patient_id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `care_activity_mgr`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `care_activity_mgr`.`users` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `first` VARCHAR(45) NULL DEFAULT NULL,
  `last` VARCHAR(45) NULL DEFAULT NULL,
  `password_reminder` VARCHAR(45) NULL DEFAULT NULL,
  `password_answer` VARCHAR(45) NULL DEFAULT NULL,
  `clients_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_User` (`id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
