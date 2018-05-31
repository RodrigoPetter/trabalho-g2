<?php
require_once 'Concurso.php';
require_once 'Cargo.php';

class ConcursoCargo
{
    private $concuros;
    private $cargo;
    private $vagas;

    public function getConcuros()
    {
        return $this->concuros;
    }


    public function setConcuros(Concurso $concuros)
    {
        $this->concuros = $concuros;
    }

    public function getCargo()
    {
        return $this->cargo;
    }

    public function setCargo(Cargo $cargo)
    {
        $this->cargo = $cargo;
    }

    public function getVagas()
    {
        return $this->vagas;
    }

    public function setVagas($vagas)
    {
        $this->vagas = $vagas;
    }


}