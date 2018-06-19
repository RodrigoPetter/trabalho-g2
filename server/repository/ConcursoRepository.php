<?php
require_once __DIR__ . '/../database/Repository.php';
require_once __DIR__ . '/../entity/Concurso.php';
require_once __DIR__ . '/../repository/EtapasRepository.php';

class ConcursoRepository extends Repository
{

    private $EtapasRepository;

    public function __construct()
    {
        parent::__construct('concurso');
        $this->EtapasRepository = new EtapasRepository();
    }

    public function findAll()
    {
        $query = parent::findAll();
        $concursos = $query->fetchAll(PDO::FETCH_CLASS, Concurso::class);

        return $this->alimentarEtapa($concursos);
    }

    public function findOne($get)
    {
        $query = parent::findOne($get);
        $concursos = $query->fetchAll(PDO::FETCH_CLASS, Concurso::class);

        return $this->alimentarEtapa($concursos);
    }

    public function _insert($data)
    {
        $fields = array('id', 'descricao', 'data', 'local');
        $values = array(null, $data['descricao'], $data['data'], $data['local']);
        $concurso = parent::insert($fields, $values);

        if($concurso) {
            $etapa = array();
            $etapa['concurso_id'] = parent::generic('SELECT MAX(id) FROM concurso where 1 = ?', 1)->fetchColumn();
            $etapa['descricao'] = "Inscrições";
            $etapa['tipo'] = "3";
            $this->EtapasRepository->_insert($etapa);
        }

        return $concurso;
    }

    private function alimentarEtapa($concursos)
    {
        foreach ($concursos as $concurso) {

            $etapa = $this->EtapasRepository->findEtapaAtiva($concurso->id);

            if($etapa){
                $concurso->etapa = $etapa[0]->id;
                $concurso->etapa_descricao = $etapa[0]->descricao;
            }

        }
        return $concursos;
    }

}