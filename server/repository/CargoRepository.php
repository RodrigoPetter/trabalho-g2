<?php
require_once __DIR__.'/../database/Repository.php';
require_once __DIR__.'/../entity/Cargo.php';

class CargoRepository extends Repository
{
    public function __construct()
    {
        parent::__construct('cargo');
    }

    public function findAll(){
        $query = parent::findAll();
        return $query->fetchAll(PDO::FETCH_CLASS, Cargo::class);
    }

    public function findOne($id){
        $query = parent::findOne($id);
        return $query->fetchAll(PDO::FETCH_CLASS, Cargo::class);
    }
}