<?php
require_once 'ApiInterface.php';

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

        if (isset($_GET['id'])) {
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