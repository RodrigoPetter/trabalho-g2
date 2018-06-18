<?php

class EtapaCandidato
{
    public $inscricoes_candidato_id;
    public $candidato_nome;
    public $inscricoes_concurso_cargo_cargo_id;
    public $cargo_nome;
    public $nota;

    /**
     * @return mixed
     */
    public function getInscricoesCandidatoId()
    {
        return $this->inscricoes_candidato_id;
    }

    /**
     * @param mixed $inscricoes_candidato_id
     */
    public function setInscricoesCandidatoId($inscricoes_candidato_id)
    {
        $this->inscricoes_candidato_id = $inscricoes_candidato_id;
    }

    /**
     * @return mixed
     */
    public function getCandidatoNome()
    {
        return $this->candidato_nome;
    }

    /**
     * @param mixed $candidato_nome
     */
    public function setCandidatoNome($candidato_nome)
    {
        $this->candidato_nome = $candidato_nome;
    }

    /**
     * @return mixed
     */
    public function getInscricoesConcursoCargoCargoId()
    {
        return $this->inscricoes_concurso_cargo_cargo_id;
    }

    /**
     * @param mixed $inscricoes_concurso_cargo_cargo_id
     */
    public function setInscricoesConcursoCargoCargoId($inscricoes_concurso_cargo_cargo_id)
    {
        $this->inscricoes_concurso_cargo_cargo_id = $inscricoes_concurso_cargo_cargo_id;
    }

    /**
     * @return mixed
     */
    public function getCargoNome()
    {
        return $this->cargo_nome;
    }

    /**
     * @param mixed $cargo_nome
     */
    public function setCargoNome($cargo_nome)
    {
        $this->cargo_nome = $cargo_nome;
    }

    /**
     * @return mixed
     */
    public function getNota()
    {
        return $this->nota;
    }

    /**
     * @param mixed $nota
     */
    public function setNota($nota)
    {
        $this->nota = $nota;
    }

}