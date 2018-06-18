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
        $concursos =  $query->fetchAll(PDO::FETCH_CLASS, Concurso::class);

        return $this->alimentarEtapa($concursos);
    }

    public function findOne($get)
    {
        $query = parent::findOne($get);
        $concursos =  $query->fetchAll(PDO::FETCH_CLASS, Concurso::class);

        return $this->alimentarEtapa($concursos);
    }

    public function _insert($data)
    {
        $fields = array('id', 'descricao', 'data', 'local');
        $values = array(null, $data['descricao'], $data['data'], $data['local']);
        return parent::insert($fields, $values);
    }


    private function alimentarEtapa($concursos){
        foreach ($concursos as $concurso){

            $etapa = $this->EtapasRepository->findEtapaAtiva($concurso->id)[0];

            $concurso->etapa = $etapa->id;
            $concurso->etapa_descricao = $etapa->descricao;
        }
        return $concursos;
    }

}