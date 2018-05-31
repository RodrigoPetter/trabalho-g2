<?php
require_once 'Departamento.php';
require_once 'Cargo.php';

class DepartamentoCargo
{
    private $departamento;
    private $cargo;

    /**
     * @return mixed
     */
    public function getDepartamento()
    {
        return $this->departamento;
    }

    /**
     * @param mixed $departamento
     */
    public function setDepartamento(Departamento $departamento)
    {
        $this->departamento = $departamento;
    }

    /**
     * @return mixed
     */
    public function getCargo()
    {
        return $this->cargo;
    }

    /**
     * @param mixed $cargo
     */
    public function setCargo(Cargo $cargo)
    {
        $this->cargo = $cargo;
    }


}