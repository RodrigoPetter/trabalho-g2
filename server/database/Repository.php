<?php
require_once 'Database.php';

class Repository
{
    private $conn;
    private $table;

    public function __construct($table)
    {
        $this->table = $table;
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function findAll()
    {
        $query = $this->conn->prepare("SELECT * FROM {$this->table}");
        if (!$query->execute()) {
            http_response_code(500);
            var_dump($query->errorInfo());
            die;
        }
        return $query;
    }

    public function findOne($get)
    {
        $fields = array_keys($get);
        $data = array_values($get);

        $query = $this->conn->prepare("SELECT * FROM {$this->table} WHERE ".implode(' = ? AND ', $fields)." = ?");
        if (!$query->execute($data)) {
            http_response_code(500);
            var_dump($query->errorInfo());
            die;
        }
        return $query;
    }

    public function insert($fields, $values)
    {
        $temp = array();
        for ($i = 0; $i < count($values); $i++) {
            array_push($temp, '?');
        }

        $query = $this->conn->prepare("INSERT INTO {$this->table} (" . implode(', ', $fields) . ") VALUES (" . implode(" ,", $temp) . ")");
        if (!$query->execute($values)) {
            http_response_code(500);
            var_dump($query->errorInfo());
            die;
        }
        return true;
    }

    public function update($filtros, $data)
    {
        $data_fields = array_keys($data);
        $data = array_values($data);

        $filtro_fields = array_keys($filtros);
        foreach (array_values($filtros) as $filtro){
            array_push($data, $filtro);
        }

        $query = $this->conn->prepare("UPDATE {$this->table} SET " . implode(' = ?, ', $data_fields) . " = ? WHERE ".implode(' = ? AND ', $filtro_fields)." = ?");

        if (!$query->execute($data)) {
            http_response_code(500);
            var_dump($query->errorInfo());
            die;
        }
        return true;
    }

    public function delete($get)
    {
        $fields = array_keys($get);
        $data = array_values($get);

        $query = $this->conn->prepare("DELETE FROM {$this->table} WHERE ".implode(' = ? AND ', $fields)." = ?");
        if (!$query->execute($data)) {
            http_response_code(500);
            var_dump($query->errorInfo());
            die;
        }
        return true;
    }

    public function generic($query, $id)
    {
        $query = $this->conn->prepare($query);
        if (!$query->execute(array($id))) {
            http_response_code(500);
            var_dump($query->errorInfo());
            die;
        }
        return $query;
    }
}