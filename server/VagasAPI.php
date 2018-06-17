<?php
require_once 'API.php';
require_once __DIR__ . '/repository/VagasRepository.php';


class VagasAPI extends API
{

    private $repository;

    public function __construct()
    {
        $this->repository = new VagasRepository();
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

    function update($get, $data)
    {
        return $this->repository->update($get, $data);;
    }

    function delete($get)
    {
        return $this->repository->delete($get);
    }
}

new VagasAPI();