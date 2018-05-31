-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema trabalho_g2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema trabalho_g2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trabalho_g2` DEFAULT CHARACTER SET utf8 ;
USE `trabalho_g2` ;

-- -----------------------------------------------------
-- Table `trabalho_g2`.`departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabalho_g2`.`departamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trabalho_g2`.`cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabalho_g2`.`cargo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trabalho_g2`.`departamento_cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabalho_g2`.`departamento_cargo` (
  `departamento_id` INT NOT NULL,
  `cargo_id` INT NOT NULL,
  PRIMARY KEY (`departamento_id`, `cargo_id`),
  INDEX `fk_departamento_has_cargo_cargo1_idx` (`cargo_id` ASC),
  INDEX `fk_departamento_has_cargo_departamento_idx` (`departamento_id` ASC),
  CONSTRAINT `fk_departamento_has_cargo_departamento`
    FOREIGN KEY (`departamento_id`)
    REFERENCES `trabalho_g2`.`departamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_departamento_has_cargo_cargo1`
    FOREIGN KEY (`cargo_id`)
    REFERENCES `trabalho_g2`.`cargo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trabalho_g2`.`concurso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabalho_g2`.`concurso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(256) NOT NULL,
  `data` DATE NOT NULL,
  `local` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trabalho_g2`.`candidato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabalho_g2`.`candidato` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `endereco` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(100) NOT NULL,
  `cep` INT NOT NULL,
  `bairro` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trabalho_g2`.`etapa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabalho_g2`.`etapa` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `concurso_id` INT NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `tipo` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_etapa_concurso1_idx` (`concurso_id` ASC),
  CONSTRAINT `fk_etapa_concurso1`
    FOREIGN KEY (`concurso_id`)
    REFERENCES `trabalho_g2`.`concurso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trabalho_g2`.`concurso_cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabalho_g2`.`concurso_cargo` (
  `concurso_id` INT NOT NULL,
  `cargo_id` INT NOT NULL,
  `vagas` INT NOT NULL,
  PRIMARY KEY (`concurso_id`, `cargo_id`),
  INDEX `fk_concurso_has_cargo_cargo1_idx` (`cargo_id` ASC),
  INDEX `fk_concurso_has_cargo_concurso1_idx` (`concurso_id` ASC),
  CONSTRAINT `fk_concurso_has_cargo_concurso1`
    FOREIGN KEY (`concurso_id`)
    REFERENCES `trabalho_g2`.`concurso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_concurso_has_cargo_cargo1`
    FOREIGN KEY (`cargo_id`)
    REFERENCES `trabalho_g2`.`cargo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trabalho_g2`.`inscricoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabalho_g2`.`inscricoes` (
  `candidato_id` INT NOT NULL,
  `concurso_cargo_concurso_id` INT NOT NULL,
  `concurso_cargo_cargo_id` INT NOT NULL,
  PRIMARY KEY (`candidato_id`, `concurso_cargo_concurso_id`, `concurso_cargo_cargo_id`),
  INDEX `fk_candidato_has_concurso_cargo_concurso_cargo1_idx` (`concurso_cargo_concurso_id` ASC, `concurso_cargo_cargo_id` ASC),
  INDEX `fk_candidato_has_concurso_cargo_candidato1_idx` (`candidato_id` ASC),
  CONSTRAINT `fk_candidato_has_concurso_cargo_candidato1`
    FOREIGN KEY (`candidato_id`)
    REFERENCES `trabalho_g2`.`candidato` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidato_has_concurso_cargo_concurso_cargo1`
    FOREIGN KEY (`concurso_cargo_concurso_id` , `concurso_cargo_cargo_id`)
    REFERENCES `trabalho_g2`.`concurso_cargo` (`concurso_id` , `cargo_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trabalho_g2`.`etapa_candidato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trabalho_g2`.`etapa_candidato` (
  `inscricoes_candidato_id` INT NOT NULL,
  `inscricoes_concurso_cargo_concurso_id` INT NOT NULL,
  `inscricoes_concurso_cargo_cargo_id` INT NOT NULL,
  `etapa_id` INT NOT NULL,
  `nota` DECIMAL(3,1) NULL,
  PRIMARY KEY (`inscricoes_candidato_id`, `inscricoes_concurso_cargo_concurso_id`, `inscricoes_concurso_cargo_cargo_id`, `etapa_id`),
  INDEX `fk_inscricoes_has_etapa_etapa1_idx` (`etapa_id` ASC),
  INDEX `fk_inscricoes_has_etapa_inscricoes1_idx` (`inscricoes_candidato_id` ASC, `inscricoes_concurso_cargo_concurso_id` ASC, `inscricoes_concurso_cargo_cargo_id` ASC),
  CONSTRAINT `fk_inscricoes_has_etapa_inscricoes1`
    FOREIGN KEY (`inscricoes_candidato_id` , `inscricoes_concurso_cargo_concurso_id` , `inscricoes_concurso_cargo_cargo_id`)
    REFERENCES `trabalho_g2`.`inscricoes` (`candidato_id` , `concurso_cargo_concurso_id` , `concurso_cargo_cargo_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inscricoes_has_etapa_etapa1`
    FOREIGN KEY (`etapa_id`)
    REFERENCES `trabalho_g2`.`etapa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
