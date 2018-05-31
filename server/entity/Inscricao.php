<?php
require_once 'ConcursoCargo.php';
require_once 'Candidato.php';

class Inscricao
{
    private $candidato;
    private $concursoCargo;

    public function getCandidato()
    {
        return $this->candidato;
    }

    public function setCandidato(Candidato $candidato)
    {
        $this->candidato = $candidato;
    }

    public function getConcursoCargo()
    {
        return $this->concursoCargo;
    }

    public function setConcursoCargo(Concurso $concursoCargo)
    {
        $this->concursoCargo = $concursoCargo;
    }


}