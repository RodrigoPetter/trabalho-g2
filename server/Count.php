<?php
require_once './database/Database.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$database = new Database();
$conn = $database->getConnection();


switch ($_GET['target']) {
    case 'CONCURSOS':

        $query = $conn->prepare("SELECT c.id, c.descricao, COUNT(1) as count FROM concurso c INNER JOIN inscricoes i ON(c.id = i.concurso_cargo_concurso_id) GROUP BY c.descricao, c.id ORDER BY count DESC");
        if (!$query->execute(array())) {
            http_response_code(500);
            var_dump($query->errorInfo());
            die;
        }
        //var_dump($query->fetchAll());
        echo json_encode($query->fetchAll(PDO::FETCH_ASSOC));
        break;

    case 'ETAPAS':

        $concursos = $conn->query("SELECT c.id, c.descricao FROM concurso c")->fetchAll(PDO::FETCH_ASSOC);

        foreach ($concursos as $key => $item) {
            $concursos[$key]['etapas'] =  $conn->query("SELECT e.id, e.descricao,  COUNT(1) as count 
                                                      FROM etapa e
                                                      INNER JOIN etapa_candidato ec ON(e.id = ec.etapa_id)
                                                      WHERE e.concurso_id = " . $item['id'] . "
                                                      GROUP BY e.id")->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($concursos);
        break;

    default:
        http_response_code(500);
        throw new Exception("Método não implementado");
}