<?php

class ConcursoCargo
{
    public $concurso_id;
    public $cargo_id;
    public $vagas;

    public function getConcuros()
    {
        return $this->concurso_id;
    }


    public function setConcuros($concuros)
    {
        $this->concurso_id = $concuros;
    }

    public function getCargo()
    {
        return $this->cargo_id;
    }

    public function setCargo($cargo)
    {
        $this->cargo_id = $cargo;
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