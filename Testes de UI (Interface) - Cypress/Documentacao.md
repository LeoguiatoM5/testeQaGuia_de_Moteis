# **Relatório de Testes de UI - Formulário de Cadastro de Usuário**

### **Resumo do Teste**
O objetivo deste teste foi verificar o comportamento do formulário de cadastro de usuário na aplicação. Foram avaliados os seguintes cenários:

1. **Exibição de mensagem de sucesso** ao preencher o formulário corretamente.
2. **Exibição de mensagens de erro** quando campos obrigatórios são deixados vazios.
3. **Erro de validação** ao digitar uma senha fraca.
4. **Erro ao digitar e-mails diferentes** nos campos de "E-mail" e "Confirmação de E-mail".

### **Resultados dos Testes**

- **Total de testes executados**: 4
- **Passaram**: 4
- **Falharam**: 0
- **Pendentes**: 0
- **Ignorados**: 0

### **Detalhes dos Testes**

1. **Deve exibir mensagem de sucesso ao preencher o formulário corretamente**  
   O formulário foi preenchido corretamente e a mensagem de sucesso foi exibida, indicando que o fluxo de cadastro foi completado com sucesso.

2. **Deve exibir mensagens de erro ao deixar campos obrigatórios vazios**  
   Ao submeter o formulário com campos obrigatórios em branco, mensagens de erro foram exibidas corretamente, indicando os campos que precisavam ser preenchidos.

3. **Deve exibir erro de validação ao digitar uma senha fraca**  
   Quando uma senha fraca foi inserida, o sistema exibiu o erro de validação, solicitando uma senha mais forte.

4. **Deve exibir erro ao digitar e-mails diferentes nos campos de "E-mail" e "Confirmação de E-mail"**  
   Ao digitar e-mails diferentes nos campos de "E-mail" e "Confirmação de E-mail", o sistema exibiu um erro, informando que os e-mails não coincidiam.

### **Duração do Teste**
- **Duração total dos testes**: 7 segundos
- **Duração média por teste**: Aproximadamente 1,75 segundos

### **Relatório Detalhado**
O relatório completo com detalhes dos testes realizados pode ser visualizado acessando o arquivo HTML ou Json gerado pelo Mocha:
Em
(\cypress\reports\)

### **Conclusão**
Todos os testes de UI para o formulário de cadastro de usuário passaram com sucesso, indicando que a aplicação está funcionando corretamente nos cenários testados.
