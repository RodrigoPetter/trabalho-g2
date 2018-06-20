<?php
require_once __DIR__ . '/../database/Repository.php';
require_once __DIR__ . '/../repository/EtapasRepository.php';

class AprovarRepository extends Repository
{

    private $etapaRepository;

    public function __construct()
    {
        parent::__construct('etapa');
        $this->etapaRepository = new EtapasRepository();
    }

    public function aprovar($concurso, $etapa, $nota)
    {

        $novaEtapa = $this->etapaRepository->findEtapaAtiva($concurso)[0]->id;

        parent::generic('INSERT INTO etapa_candidato (inscricoes_candidato_id, inscricoes_concurso_cargo_concurso_id, inscricoes_concurso_cargo_cargo_id, etapa_id, nota)
                        SELECT inscricoes_candidato_id, inscricoes_concurso_cargo_concurso_id, inscricoes_concurso_cargo_cargo_id, ' . $novaEtapa . ', 0 
                        FROM etapa_candidato
                        WHERE etapa_candidato.inscricoes_concurso_cargo_concurso_id = ' . $concurso . '
                        AND etapa_candidato.etapa_id = ' . $etapa . '
                        AND etapa_candidato.nota >= ' . $nota . '
                        AND 1 = ?', 1);
    }

}