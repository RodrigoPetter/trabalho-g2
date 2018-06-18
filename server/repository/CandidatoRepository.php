<?php
require_once __DIR__ . '/../database/Repository.php';
require_once __DIR__ . '/../entity/Candidato.php';

class CandidatoRepository extends Repository
{
    public function __construct()
    {
        parent::__construct('candidato');
    }

    public function findAll()
    {
        $query = parent::findAll();
        return $query->fetchAll(PDO::FETCH_CLASS, Candidato::class);
    }

    public function findOne($get)
    {
        $query = parent::findOne($get);
        return $query->fetchAll(PDO::FETCH_CLASS, Candidato::class);
    }

    public function _insert($data)
    {
        $fields = array('id', 'nome', 'endereco', 'telefone', 'cep', 'bairro');
        $values = array(null, $data['nome'], $data['endereco'], $data['telefone'], $data['cep'], $data['bairro']);
        return parent::insert($fields, $values);
    }

}