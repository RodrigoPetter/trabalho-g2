<?php
require_once 'Concurso.php';

class Etapa
{
    private $id;
    private $concurso;
    private $descricao;
    private $tipo;

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