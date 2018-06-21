<?php
require_once __DIR__ . '/../entity/EtapaCandidato.php';
require_once __DIR__ .'/../database/Database.php';

class CandidatoEtapaRepository
{
    private $conn;
    private $table;

    public function __construct()
    {
        $this->table = 'etapa_candidato';
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function findAll($get)
    {
        $query = $this->conn->prepare("SELECT ec.*, ca.nome as candidato_nome, car.nome as cargo_nome FROM etapa_candidato ec 
        INNER JOIN candidato ca ON (ec.inscricoes_candidato_id = ca.id)
        INNER JOIN cargo car on (car.id = ec.inscricoes_concurso_cargo_cargo_id)
        WHERE ec.inscricoes_concurso_cargo_concurso_id = ? AND ec.etapa_id = ?");
        if (!$query->execute(array($get['concurso'], $get['etapa']))) {
            http_response_code(500);
            var_dump($query->errorInfo());
            die;
        }
        return $query->fetchAll(PDO::FETCH_CLASS, EtapaCandidato::class);
    }

    public function insert($data)
    {
        $data_fields = array_keys($data);
        $data = array_values($data);

        $query = $this->conn->prepare("INSERT INTO {$this->table} (" . implode(', ', $data_fields) . ") VALUES (" . implode(', ', $data) . ")");

        if (!$query->execute($data)) {
            http_response_code(500);
            var_dump($query->errorInfo());
            die;
        }
        return true;
    }

    public function update($nota, $filtros)
    {
        $filtro_fields = array_keys($filtros);
        $filtro = array_values($filtros);

        array_unshift($filtro, $nota);

        $query = $this->conn->prepare("UPDATE {$this->table} SET nota = ? WHERE ".implode(' = ? AND ', $filtro_fields)." = ?");

        var_dump($filtro);

        if (!$query->execute($filtro)) {
            http_response_code(500);
            var_dump($query->errorInfo());
            die;
        }
        return true;
    }

}