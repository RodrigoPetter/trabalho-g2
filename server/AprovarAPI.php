<?php
require_once 'API.php';
require_once __DIR__ . '/repository/AprovarRepository.php';


class AprovarAPI extends API
{

    private $repository;

    public function __construct()
    {
        $this->repository = new AprovarRepository();
        parent::trigger();
    }

    function getOne($id)
    {
        http_response_code(500);
        throw new Exception("1Método não implementado");
    }

    function getAll()
    {
        http_response_code(500);
        throw new Exception("2Método não implementado");
    }

    function insert($data)
    {
        http_response_code(500);
        throw new Exception("3Método não implementado");
    }

    function update($get, $post)
    {
        var_dump($post);
        $this->repository->aprovar($get['concurso_id'], $get['etapa_id'], $post['nota']);
    }

    function delete($id)
    {
        http_response_code(500);
        throw new Exception("5Método não implementado");
    }
}

new AprovarAPI();