# Documentação de Testes de Performance - Projeto Magento Demo

## Objetivo
Realizar testes de performance na aplicação [Magento 2 Demo](https://magento2-demo.magebit.com/) utilizando o k6, simulando múltiplos usuários e medindo tempo de resposta, sucesso de requisições e comportamento do sistema sob carga.

---

Cada script define:

- **Virtual Users (VUs):** Número de usuários virtuais simultâneos
- **Duração:** Tempo total do teste.
- **Checks:** Validações de status HTTP
- **Sleep:** Intervalo entre interações do VU para simular comportamento real

Rodar um teste específico: k6 run ./k6-tests/performance/product_perf.js

Rodar todos os testes sequenciais: ./run_all.sh

## Saída do k6

Após a execução, o k6 exibe:

Checks: Sucesso ou falha das validações

HTTP Metrics: Tempo de resposta médio, mínimo, máximo e percentis

Iterations: Quantas vezes o script foi executado

VUs: Número de usuários virtuais ativos durante o teste

Network: Quantidade de dados enviados e recebidos

## Integração com GitHub Actions

Para garantir que todos os testes de performance sejam executados automaticamente, configurado workflow do GitHub Actions que é disparado sempre que houver **push** no repositório.

### Funcionamento

- **Evento disparador:** `push` 
- **Objetivo:** Executar todos os scripts de performance automaticamente, sem necessidade de rodar localmente
- **Ambiente:** VM Ubuntu fornecida pelo GitHub Actions

