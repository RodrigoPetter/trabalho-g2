<?php
require_once '../database/Repository.php';
require_once '../entity/Cargo.php';

class CargoRepository extends Repository
{
    public function __construct()
    {
        parent::__construct('cargo');
    }

    public function findAll(){
        parent::findAll(Cargo::class);
    }
}