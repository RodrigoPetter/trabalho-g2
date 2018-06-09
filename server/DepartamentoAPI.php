<?php
require_once 'API.php';
require_once __DIR__ . '/repository/DepartamentoRepository.php';
header('Access-Control-Allow-Origin: *');

class DepartamentoAPI extends API
{

    private $repository;

    public function __construct()
    {
        $this->repository = new DepartamentoRepository();
        parent::trigger();
    }

    function getOne($id)
    {
        return $this->repository->findOne($id);
    }

    function getAll()
    {
        return $this->repository->findAll();
    }

}

new DepartamentoAPI();