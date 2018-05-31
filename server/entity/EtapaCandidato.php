<?php
require_once 'Inscricao.php';
require_once 'Etapa.php';

class EtapaCandidato
{
    private $inscricao;
    private $etapa;
    private $nota;

    public function getInscricao()
    {
        return $this->inscricao;
    }

    public function setInscricao(Inscricao $inscricao)
    {
        $this->inscricao = $inscricao;
    }

    public function getEtapa()
    {
        return $this->etapa;
    }

    public function setEtapa(Etapa $etapa)
    {
        $this->etapa = $etapa;
    }

    public function getNota()
    {
        return $this->nota;
    }

    public function setNota($nota)
    {
        $this->nota = $nota;
    }


}