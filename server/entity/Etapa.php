<?php
require_once 'Concurso.php';

class Etapa
{
    public $id;
    public $concurso;
    public $descricao;
    public $tipo;

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getConcurso()
    {
        return $this->concurso;
    }

    public function setConcurso(Concurso $concurso)
    {
        $this->concurso = $concurso;
    }

    public function getDescricao()
    {
        return $this->descricao;
    }

    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;
    }

    public function getTipo()
    {
        return $this->tipo;
    }

    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }


}