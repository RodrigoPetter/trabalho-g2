<?php
require_once 'ApiInterface.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");


abstract class API implements ApiInterface
{

    function trigger()
    {
        switch ($_SERVER['REQUEST_METHOD']) {
            case 'POST':
                $this->processPost();
                break;
            case 'GET':
                $this->processGet();
                break;
            case 'DELETE':
                $this->delete($_GET);
                break;
            default:
                $this->processGet();
                break;
        }
    }

    function processGet()
    {
        $result = null;

        if (count($_GET) > 0) {
            $result = $this->getOne($_GET);
        } else {
            $result = $this->getAll();
        }

        echo $this->toJson($result);
    }

    function processPost()
    {
        $result = null;

        if (isset($_GET['id'])) {
            $result = $this->update($_GET['id'], $_POST);
        } else {
            $result = $this->insert($_POST);
        }

        echo $this->toJson($result);
    }


    function toJson($object)
    {
        $encode = json_encode((array)$object);
        if (!$encode) {
            return '{erro: ' . json_last_error_msg() . '}';
        }
        return $encode;
    }
}