SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema portal_noticia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portal_noticia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portal_noticia` DEFAULT CHARACTER SET utf8 ;
USE `portal_noticia` ;

-- -----------------------------------------------------
-- Table `portal_noticia`.`noitcia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portal_noticia`.`noticia` ;

CREATE TABLE IF NOT EXISTS `portal_noticia`.`noticia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `autor` VARCHAR(45) NULL,
  `titulo` VARCHAR(45) NULL,
  `data_noticia` TIMESTAMP(1) NULL,
  `resumo` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
