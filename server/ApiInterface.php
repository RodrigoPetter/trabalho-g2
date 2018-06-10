<?php

interface ApiInterface
{
    function trigger();

    function processGet();
    function processPost();

    function getOne($id);
    function getAll();

    function insert($data);
    function update($id, $data);
    function delete($id);

    function toJson($object);
}