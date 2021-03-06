<?php
require_once 'API.php';
require_once __DIR__ . '/repository/CargoRepository.php';

class CargoAPI extends API
{

    private $repository;

    public function __construct()
    {
        $this->repository = new CargoRepository();
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

    function update($get, $post)
    {
        return $this->repository->update($get, $post);
    }

    function delete($get)
    {
        return $this->repository->delete($get);
    }

}

new CargoAPI();