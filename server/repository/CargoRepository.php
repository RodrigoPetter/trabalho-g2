<?php
require_once __DIR__.'/../database/Repository.php';
require_once __DIR__.'/../entity/Cargo.php';

class CargoRepository extends Repository
{
    public function __construct()
    {
        parent::__construct('cargo');
    }

    public function findAll()
    {
        $query = parent::findAll();
        return $query->fetchAll(PDO::FETCH_CLASS, Cargo::class);
    }

    public function findOne($get)
    {
        $query = parent::findOne($get);
        return $query->fetchAll(PDO::FETCH_CLASS, Cargo::class);
    }

    public function _insert($data)
    {
        $fields = array('id', 'nome');
        $values = array(null, $data['nome']);
        return parent::insert($fields, $values);
    }

    public function _update($id, $data)
    {
        $fields = array('nome');
        $values = array($data['nome']);
        return parent::update($id, $fields, $values);
    }

}