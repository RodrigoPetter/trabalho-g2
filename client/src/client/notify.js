class notify {
    static tablePattern = "`trabalho_g2`.`";
    static foreign_key_constraint = "Cannot delete or update a parent row";

    static erro(message) {
        let desconhecido = true;
        if (message.indexOf(this.foreign_key_constraint) >= 0) {
            alert("Este registro possui uma referência com `" + this.tableToName(message) + '` e não pode ser excluído.');
            desconhecido = false;
        }

        if (desconhecido) {
            alert("Erro desconhecido: " + message);
        }
    }

    static tableToName(message) {
        const tableNames = {
            candidato: 'candidatos',
            cargo: 'cargos',
            concurso: 'concursos',
            concurso_cargo: 'vagas do concurso',
            departamento: 'departamentos',
            departamento_cargo: 'cargos do departamento',
            etapa: 'etapas',
            etapa_candidato: 'candidatos da etapa',
            inscricoes: 'inscrições em concursos'
        };

        let ini = message.indexOf(this.tablePattern) + this.tablePattern.length;
        return tableNames[message.slice(ini, message.indexOf('`', ini))];
    }
}

export default notify;