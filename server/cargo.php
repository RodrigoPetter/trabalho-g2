<?php
require_once './repository/CargoRepository.php';

$repository = new CargoRepository();

echo $repository->findAll();