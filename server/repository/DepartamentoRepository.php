<?php
require_once __DIR__.'/../database/Repository.php';
require_once __DIR__.'/../entity/Departamento.php';

class DepartamentoRepository extends Repository
{
    public function __construct()
    {
        parent::__construct('departamento');
    }

    public function findAll(){
        $query = parent::findAll();
        return $query->fetchAll(PDO::FETCH_CLASS, Departamento::class);
    }

    public function findOne($id){
        $query = parent::findOne($id);
        return $query->fetchAll(PDO::FETCH_CLASS, Departamento::class);
    }
}