# Biblioteca de Validação de Números de Cartão de Crédito Versão 1.0.2

Essa é uma biblioteca JavaScript de validação de números de CPF. Foram utilizados as seguintes dependências:

- Mocha
- Chai
- nyc


Essa biblioteca verifica os números de cartão de crédito das seguintes operadoras:

- [x] Visa
- [x] MasterCard
- [x] American Express
- [x] Diners Club
- [x] Discover
- [x] enRoute
- [x] JCB
- [x] Voyager
- [x] HiperCard
- [x] Aura

## Modo de Instalar e Usar

```
npm i card-number-validator-lib
```

```
const { cardValidator } = require('card-number-validator-lib')
console.log(cardValidator('5330 6756 0285 0736'))
// returns true
```

## Fases do Projeto

## Versão 1.0.2

- [x] Segunda correção de módulos de exportação na função principal

## Versão 1.0.1

- [x] Primeira correção de módulos de exportação na função principal

## Versão 1.0.0

- [x] Funcionalidade: verificação de números de cartão de crédito
- [x] Inclusão de função que verifica números de cartão de crédito com ou sem pontuação