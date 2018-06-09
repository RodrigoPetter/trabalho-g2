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

    function getOne($id)
    {
        return $this->repository->findOne($id);
    }

    function getAll()
    {
        return $this->repository->findAll();
    }

}

new CargoAPI();