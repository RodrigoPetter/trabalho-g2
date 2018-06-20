-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 21-Jun-2018 às 00:57
-- Versão do servidor: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trabalho_g2`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `candidato`
--

CREATE TABLE `candidato` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `cep` varchar(11) NOT NULL,
  `bairro` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `candidato`
--

INSERT INTO `candidato` (`id`, `nome`, `endereco`, `telefone`, `cep`, `bairro`) VALUES
(4, 'Rodrigo Petter Daniel', 'José Aloisio Filho', '(51)99744-6701', '90250-180', 'Humaitá da etiopia'),
(5, 'asd', 'asdsadas', '(21)33232-1213', '12123-213', 'asddas'),
(6, 'ytttttttttt', 'sdffdssdfsd', '(34)42343-2423', '44324-323', 'sdfdsfdsf');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cargo`
--

CREATE TABLE `cargo` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `cargo`
--

INSERT INTO `cargo` (`id`, `nome`) VALUES
(4, 'Técnico em Informática 2'),
(5, 'Analista de Sistemas'),
(6, 'Técnico Administrativo');

-- --------------------------------------------------------

--
-- Estrutura da tabela `concurso`
--

CREATE TABLE `concurso` (
  `id` int(11) NOT NULL,
  `descricao` varchar(256) NOT NULL,
  `data` date NOT NULL,
  `local` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `concurso`
--

INSERT INTO `concurso` (`id`, `descricao`, `data`, `local`) VALUES
(3, 'DPE 3', '2018-06-29', 'TM 2'),
(4, 'teste 3', '2018-06-28', 'asdasd'),
(5, 'tttttt', '2018-06-18', 'rrrrrrrrr'),
(6, 'aaaaaaa', '2018-06-26', 'aaaaaaaaaa'),
(7, 'bbbbbbbbbbbbbbb', '2018-06-27', 'bbbbbbbbbbbb'),
(8, 'ccccccccccccccccc', '2018-06-19', 'ccccccccccccccccccc');

-- --------------------------------------------------------

--
-- Estrutura da tabela `concurso_cargo`
--

CREATE TABLE `concurso_cargo` (
  `concurso_id` int(11) NOT NULL,
  `cargo_id` int(11) NOT NULL,
  `vagas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `concurso_cargo`
--

INSERT INTO `concurso_cargo` (`concurso_id`, `cargo_id`, `vagas`) VALUES
(3, 4, 78),
(4, 6, 50),
(6, 6, 33),
(7, 4, 32),
(8, 6, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `departamento`
--

CREATE TABLE `departamento` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `departamento`
--

INSERT INTO `departamento` (`id`, `nome`) VALUES
(4, 'Diretoria de TI 232'),
(30, 'Teste 2'),
(31, 'Teste'),
(36, 'teste com um nome bastante longo');

-- --------------------------------------------------------

--
-- Estrutura da tabela `departamento_cargo`
--

CREATE TABLE `departamento_cargo` (
  `departamento_id` int(11) NOT NULL,
  `cargo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `departamento_cargo`
--

INSERT INTO `departamento_cargo` (`departamento_id`, `cargo_id`) VALUES
(4, 4),
(4, 5),
(4, 6),
(30, 4),
(30, 6),
(31, 4),
(31, 5),
(31, 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `etapa`
--

CREATE TABLE `etapa` (
  `id` int(11) NOT NULL,
  `concurso_id` int(11) NOT NULL,
  `descricao` varchar(45) NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `etapa`
--

INSERT INTO `etapa` (`id`, `concurso_id`, `descricao`, `tipo`) VALUES
(2, 3, 'asdasd55555555 3333', 2),
(3, 4, 'ggg', 3),
(4, 3, 'Inscrições', 3),
(5, 6, 'Inscrições', 3),
(6, 7, 'Inscrições', 3),
(7, 8, 'Inscrições', 3),
(14, 8, 'teste', 2),
(15, 8, '545445', 1),
(17, 8, '8888888888', 2),
(18, 8, '8888888888', 2),
(19, 8, 'yyyy', 1),
(20, 8, '45242', 2),
(21, 8, 'asdas', 1),
(22, 8, 'asdas', 1),
(23, 8, '12312', 1),
(24, 8, '12312', 1),
(25, 8, '32234', 1),
(26, 8, 'dssdaasd', 1),
(27, 8, 'dssdaasd', 1),
(28, 8, '21312', 1),
(29, 8, '123', 1),
(30, 7, 'yyy', 1),
(31, 7, 'yyy', 1),
(32, 7, '11111111', 1),
(33, 7, '322222222', 1),
(34, 7, '666', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `etapa_candidato`
--

CREATE TABLE `etapa_candidato` (
  `inscricoes_candidato_id` int(11) NOT NULL,
  `inscricoes_concurso_cargo_concurso_id` int(11) NOT NULL,
  `inscricoes_concurso_cargo_cargo_id` int(11) NOT NULL,
  `etapa_id` int(11) NOT NULL,
  `nota` decimal(3,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `etapa_candidato`
--

INSERT INTO `etapa_candidato` (`inscricoes_candidato_id`, `inscricoes_concurso_cargo_concurso_id`, `inscricoes_concurso_cargo_cargo_id`, `etapa_id`, `nota`) VALUES
(4, 3, 4, 4, '5.0'),
(5, 8, 6, 7, '10.0'),
(5, 8, 6, 20, '0.0'),
(6, 3, 4, 4, '10.0'),
(6, 4, 6, 3, '10.0'),
(6, 6, 6, 5, '10.0'),
(6, 7, 4, 6, '10.0'),
(6, 7, 4, 32, '0.0'),
(6, 8, 6, 7, '10.0'),
(6, 8, 6, 20, '0.0');

-- --------------------------------------------------------

--
-- Estrutura da tabela `inscricoes`
--

CREATE TABLE `inscricoes` (
  `candidato_id` int(11) NOT NULL,
  `concurso_cargo_concurso_id` int(11) NOT NULL,
  `concurso_cargo_cargo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `inscricoes`
--

INSERT INTO `inscricoes` (`candidato_id`, `concurso_cargo_concurso_id`, `concurso_cargo_cargo_id`) VALUES
(4, 3, 4),
(4, 4, 6),
(4, 6, 6),
(4, 7, 4),
(4, 8, 6),
(5, 3, 4),
(5, 4, 6),
(5, 6, 6),
(5, 7, 4),
(5, 8, 6),
(6, 3, 4),
(6, 4, 6),
(6, 6, 6),
(6, 7, 4),
(6, 8, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidato`
--
ALTER TABLE `candidato`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `concurso`
--
ALTER TABLE `concurso`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `concurso_cargo`
--
ALTER TABLE `concurso_cargo`
  ADD PRIMARY KEY (`concurso_id`,`cargo_id`),
  ADD KEY `fk_concurso_has_cargo_cargo1_idx` (`cargo_id`),
  ADD KEY `fk_concurso_has_cargo_concurso1_idx` (`concurso_id`);

--
-- Indexes for table `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departamento_cargo`
--
ALTER TABLE `departamento_cargo`
  ADD PRIMARY KEY (`departamento_id`,`cargo_id`),
  ADD KEY `fk_departamento_has_cargo_cargo1_idx` (`cargo_id`),
  ADD KEY `fk_departamento_has_cargo_departamento_idx` (`departamento_id`);

--
-- Indexes for table `etapa`
--
ALTER TABLE `etapa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_etapa_concurso1_idx` (`concurso_id`);

--
-- Indexes for table `etapa_candidato`
--
ALTER TABLE `etapa_candidato`
  ADD PRIMARY KEY (`inscricoes_candidato_id`,`inscricoes_concurso_cargo_concurso_id`,`inscricoes_concurso_cargo_cargo_id`,`etapa_id`),
  ADD KEY `fk_inscricoes_has_etapa_etapa1_idx` (`etapa_id`),
  ADD KEY `fk_inscricoes_has_etapa_inscricoes1_idx` (`inscricoes_candidato_id`,`inscricoes_concurso_cargo_concurso_id`,`inscricoes_concurso_cargo_cargo_id`);

--
-- Indexes for table `inscricoes`
--
ALTER TABLE `inscricoes`
  ADD PRIMARY KEY (`candidato_id`,`concurso_cargo_concurso_id`,`concurso_cargo_cargo_id`),
  ADD KEY `fk_candidato_has_concurso_cargo_concurso_cargo1_idx` (`concurso_cargo_concurso_id`,`concurso_cargo_cargo_id`),
  ADD KEY `fk_candidato_has_concurso_cargo_candidato1_idx` (`candidato_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidato`
--
ALTER TABLE `candidato`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cargo`
--
ALTER TABLE `cargo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `concurso`
--
ALTER TABLE `concurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `etapa`
--
ALTER TABLE `etapa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `concurso_cargo`
--
ALTER TABLE `concurso_cargo`
  ADD CONSTRAINT `fk_concurso_has_cargo_cargo1` FOREIGN KEY (`cargo_id`) REFERENCES `cargo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_concurso_has_cargo_concurso1` FOREIGN KEY (`concurso_id`) REFERENCES `concurso` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `departamento_cargo`
--
ALTER TABLE `departamento_cargo`
  ADD CONSTRAINT `fk_departamento_has_cargo_cargo1` FOREIGN KEY (`cargo_id`) REFERENCES `cargo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_departamento_has_cargo_departamento` FOREIGN KEY (`departamento_id`) REFERENCES `departamento` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `etapa`
--
ALTER TABLE `etapa`
  ADD CONSTRAINT `fk_etapa_concurso1` FOREIGN KEY (`concurso_id`) REFERENCES `concurso` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `etapa_candidato`
--
ALTER TABLE `etapa_candidato`
  ADD CONSTRAINT `fk_inscricoes_has_etapa_etapa1` FOREIGN KEY (`etapa_id`) REFERENCES `etapa` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_inscricoes_has_etapa_inscricoes1` FOREIGN KEY (`inscricoes_candidato_id`,`inscricoes_concurso_cargo_concurso_id`,`inscricoes_concurso_cargo_cargo_id`) REFERENCES `inscricoes` (`candidato_id`, `concurso_cargo_concurso_id`, `concurso_cargo_cargo_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `inscricoes`
--
ALTER TABLE `inscricoes`
  ADD CONSTRAINT `fk_candidato_has_concurso_cargo_candidato1` FOREIGN KEY (`candidato_id`) REFERENCES `candidato` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_candidato_has_concurso_cargo_concurso_cargo1` FOREIGN KEY (`concurso_cargo_concurso_id`,`concurso_cargo_cargo_id`) REFERENCES `concurso_cargo` (`concurso_id`, `cargo_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
