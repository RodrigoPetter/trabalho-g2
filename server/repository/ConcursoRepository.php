<?php
require_once __DIR__ . '/../database/Repository.php';
require_once __DIR__ . '/../entity/Concurso.php';

class ConcursoRepository extends Repository
{
    public function __construct()
    {
        parent::__construct('concurso');
    }

    public function findAll()
    {
        $query = parent::findAll();
        return $query->fetchAll(PDO::FETCH_CLASS, Concurso::class);
    }

    public function findOne($get)
    {
        $query = parent::findOne($get);
        return $query->fetchAll(PDO::FETCH_CLASS, Concurso::class);
    }

    public function _insert($data)
    {
        $fields = array('id', 'descricao', 'data', 'local');
        $values = array(null, $data['descricao'], $data['data'], $data['local']);
        return parent::insert($fields, $values);
    }

    public function _update($id, $data)
    {
        $fields = array('descricao', 'data', 'local');
        $values = array($data['descricao'], $data['data'], $data['local']);
        return parent::update($id, $fields, $values);
    }

}