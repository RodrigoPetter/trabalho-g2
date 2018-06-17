<?php
require_once __DIR__.'/../database/Repository.php';
require_once __DIR__.'/../entity/ConcursoCargo.php';

class VagasRepository extends Repository
{
    public function __construct()
    {
        parent::__construct('concurso_cargo');
    }

    public function findAll()
    {
        $query = parent::findAll();
        return $query->fetchAll(PDO::FETCH_CLASS, ConcursoCargo::class);
    }

    public function findOne($get)
    {
        $query = parent::findOne($get);
        return $query->fetchAll(PDO::FETCH_CLASS, ConcursoCargo::class);
    }

    public function _insert($data)
    {
        $fields = array('concurso_id', 'cargo_id', 'vagas');
        $values = array($data['concurso_id'], $data['cargo_id'], $data['vagas']);

        return parent::insert($fields, $values);
    }

}