<?php
require_once __DIR__.'/../database/Repository.php';
require_once __DIR__.'/../entity/Etapa.php';

class EtapasRepository extends Repository
{
    public function __construct()
    {
        parent::__construct('etapa');
    }

    public function findAll()
    {
        $query = parent::findAll();
        return $query->fetchAll(PDO::FETCH_CLASS, Etapa::class);
    }

    public function findOne($get)
    {
        $query = parent::findOne($get);
        return $query->fetchAll(PDO::FETCH_CLASS, Etapa::class);
    }

    public function _insert($data)
    {
        $fields = array('concurso_id', 'descricao', 'tipo');
        $values = array($data['concurso_id'], $data['descricao'], $data['tipo']);

        return parent::insert($fields, $values);
    }

}