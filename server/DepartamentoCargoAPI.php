<?php
require_once 'API.php';
require_once __DIR__ . '/repository/DepartamentoCargoRepository.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');

class DepartamentoCargoAPI extends API
{

    private $repository;

    public function __construct()
    {
        $this->repository = new DepartamentoCargoRepository();
        parent::trigger();
    }

    function getOne($get)
    {
        return $this->repository->findOne($get);
    }

    function getAll()
    {
        return $this->repository->findAll();
    }

    function insert($data)
    {
        return $this->repository->_insert($data);
    }

    function update($id, $data)
    {
        http_response_code(500);
        throw new Exception("Método não implementado");
    }

    function delete($get)
    {
        return $this->repository->delete($get);
    }
}

new DepartamentoCargoAPI();