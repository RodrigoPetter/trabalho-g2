<?php
require_once 'API.php';
require_once __DIR__ . '/repository/CandidatoEtapaRepository.php';

class CandidatoEtapaAPI extends API
{

    private $repository;

    public function __construct()
    {
        $this->repository = new CandidatoEtapaRepository();
        parent::trigger();
    }

    function getOne($get)
    {
        return $this->repository->findAll($get);
    }

    function getAll()
    {
        http_response_code(500);
        throw new Exception("Método não implementado");
    }

    function insert($data)
    {
        http_response_code(500);
        throw new Exception("Método não implementado");
    }

    function update($get, $post)
    {
        var_dump($post);
        $nota = $post['nota'];
        unset($post['nota']);
        return $this->repository->update($nota, $post);
    }

    function delete($get)
    {
        http_response_code(500);
        throw new Exception("Método não implementado");
    }
}

new CandidatoEtapaAPI();