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
            return $query->errorInfo();
        }
        return $query;
    }

    public function findOne($id)
    {
        $query = $this->conn->prepare("SELECT * FROM {$this->table} where id = ?");
        if (!$query->execute(array($id))) {
            http_response_code(500);
            return $query->errorInfo();
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
            return $query->errorInfo();
        }
        return true;
    }

    public function update($id, $fields, $values)
    {
        array_push($values, $id);

        $query = $this->conn->prepare("UPDATE {$this->table} SET " . implode(' = ?, ', $fields) . " = ? WHERE id = ?");

        if (!$query->execute($values)) {
            http_response_code(500);
            return $query->errorInfo();
        }
        return true;
    }

    public function delete($id)
    {
        $query = $this->conn->prepare("DELETE FROM {$this->table} WHERE id = ?");
        if (!$query->execute(array($id))) {
            http_response_code(500);
            return $query->errorInfo();
        }
        return true;
    }
}