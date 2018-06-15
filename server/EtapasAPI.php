<?php
require_once 'API.php';
require_once __DIR__ . '/repository/EtapasRepository.php';


class EtapasAPI extends API
{

    private $repository;

    public function __construct()
    {
        $this->repository = new EtapasRepository();
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
        return $this->repository->_update($id, $data);;
    }

    function delete($get)
    {
        return $this->repository->delete($get);
    }
}

new EtapasAPI();