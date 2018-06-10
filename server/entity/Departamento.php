<?php

class Departamento
{
    public $id;
    public $nome;
    public $cargos;

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getCargos()
    {
        return $this->cargos;
    }

    public function setCargos($cargos)
    {
        $this->cargos = $cargos;
    }


}