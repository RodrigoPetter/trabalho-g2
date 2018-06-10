<?php
require_once 'API.php';
require_once __DIR__ . '/repository/CargoRepository.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');

class CargoAPI extends API
{

    private $repository;

    public function __construct()
    {
        $this->repository = new CargoRepository();
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

    function insert($data)
    {
        return $this->repository->_insert($data);
    }

    function update($id, $data)
    {
        return $this->repository->_update($id, $data);
    }

    function delete($id)
    {
        return $this->repository->delete($id);
    }

}

new CargoAPI();