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

    public function findAll(){
        $query = $this->conn->prepare("SELECT * FROM {$this->table}");
        if(!$query->execute()){
            return $query->errorInfo();
        }
        return $query;
    }

    public function findOne($id){
        $query = $this->conn->prepare("SELECT * FROM {$this->table} where id = {$id}");
        if(!$query->execute()){
            return $query->errorInfo();
        }
        return $query;
    }

    public function insert($values){
        $query = $this->conn->prepare("INSERT INTO {$this->table} {$values}");
        if(!$query->execute()){
            return $query->errorInfo();
        }
        return true;
    }
}