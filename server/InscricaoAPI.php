<?php
require_once 'API.php';
require_once __DIR__ . '/repository/InscricaoRepository.php';
require_once __DIR__ . '/repository/CandidatoEtapaRepository.php';
require_once __DIR__ . '/repository/EtapasRepository.php';


class InscricaoAPI extends API
{

    private $repository;
    private $CandidatoEtapaRepository;
    private $EtapasRepository;

    public function __construct()
    {
        $this->repository = new InscricaoRepository();
        $this->CandidatoEtapaRepository = new CandidatoEtapaRepository();
        $this->EtapasRepository = new EtapasRepository();
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
        $insert = $this->repository->_insert($data);
        if ($insert) {
            $etapa = array();
            $etapa['inscricoes_candidato_id'] = $data['candidato_id'];
            $etapa['inscricoes_concurso_cargo_concurso_id'] = $data['concurso_cargo_concurso_id'];
            $etapa['inscricoes_concurso_cargo_cargo_id']= $data['concurso_cargo_cargo_id'];
            $etapa['etapa_id'] = $this->EtapasRepository->findEtapaAtiva($data['concurso_cargo_concurso_id'])[0]->id;
            $etapa['nota'] = '10';
            $this->CandidatoEtapaRepository->insert($etapa);
        }

        return $insert;
    }

    function update($get, $data)
    {
        return $this->repository->update($get, $data);
    }

    function delete($get)
    {
        return $this->repository->delete($get);
    }
}

new InscricaoAPI();