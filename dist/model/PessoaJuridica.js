"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaJuridica = void 0;
const Pessoa_1 = require("./Pessoa");
class PessoaJuridica extends Pessoa_1.Pessoa {
    constructor(_nome, _cnpj) {
        super(_nome);
        this.cnpj = _cnpj;
    }
    setCnpj(_cnpj) {
        this.cnpj = _cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
    DocumentoIdentificador() {
        return this.cnpj;
    }
}
exports.PessoaJuridica = PessoaJuridica;
//# sourceMappingURL=PessoaJuridica.js.map