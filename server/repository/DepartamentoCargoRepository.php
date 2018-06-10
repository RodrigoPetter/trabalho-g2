<?php
require_once __DIR__.'/../database/Repository.php';
require_once __DIR__.'/../entity/DepartamentoCargo.php';

class DepartamentoCargoRepository extends Repository
{
    public function __construct()
    {
        parent::__construct('departamento_cargo');
    }

    public function findAll()
    {
        $query = parent::findAll();
        return $query->fetchAll(PDO::FETCH_CLASS, DepartamentoCargo::class);
    }

    public function findOne($get)
    {
        $query = parent::findOne($get);
        return $query->fetchAll(PDO::FETCH_CLASS, DepartamentoCargo::class);
    }

    public function _insert($data)
    {
        $fields = array('departamento_id', 'cargo_id');
        $values = array($data['departamento_id'], $data['cargo_id']);
        return parent::insert($fields, $values);
    }

}