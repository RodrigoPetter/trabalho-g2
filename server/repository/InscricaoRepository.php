<?php
require_once __DIR__.'/../database/Repository.php';
require_once __DIR__.'/../entity/Inscricao.php';

class InscricaoRepository extends Repository
{
    public function __construct()
    {
        parent::__construct('inscricoes');
    }

    public function findAll()
    {
        $query = parent::findAll();
        return $query->fetchAll(PDO::FETCH_CLASS, Inscricao::class);
    }

    public function findOne($get)
    {
        $query = parent::findOne($get);
        return $query->fetchAll(PDO::FETCH_CLASS, Inscricao::class);
    }

    public function _insert($data)
    {
        $fields = array('candidato_id', 'concurso_cargo_concurso_id', 'concurso_cargo_cargo_id');
        $values = array($data['candidato_id'], $data['concurso_cargo_concurso_id'], $data['concurso_cargo_cargo_id']);

        return parent::insert($fields, $values);
    }

}