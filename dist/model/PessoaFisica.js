"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaFisica = void 0;
const Pessoa_1 = require("./Pessoa");
class PessoaFisica extends Pessoa_1.Pessoa {
    constructor(_nome, _cpf) {
        super(_nome);
        this.cpf = _cpf;
    }
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
    getCpf() {
        return this.cpf;
    }
    DocumentoIdentificador() {
        return this.cpf;
    }
}
exports.PessoaFisica = PessoaFisica;
//# sourceMappingURL=PessoaFisica.js.map