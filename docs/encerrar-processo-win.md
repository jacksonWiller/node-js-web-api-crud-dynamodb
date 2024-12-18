Vou explicar como listar os processos/servidores rodando na porta 3000 no Windows.

### Plano:

1. Usar o comando netstat para listar conexões TCP
2. Filtrar apenas para porta 3000
3. Mostrar comando para encerrar processo se necessário

### Comandos no Terminal do Windows:

```powershell
# Listar todas as conexões na porta 3000
netstat -ano | findstr :3000
```

Para encerrar um processo que está usando a porta (substitua PID pelo número do processo):

```powershell
# Encerrar processo específico
taskkill /PID <PID> /F
```

O comando netstat mostrará:

- Protocolo (TCP/UDP)
- Endereço local
- Endereço remoto
- Estado
- PID (ID do processo)

Se precisar mais detalhes sobre um processo específico:

```powershell
# Ver detalhes do processo pelo PID
tasklist | findstr <PID>
```

### Plano:

1. Usar o comando taskkill para encerrar o processo usando o PID 23584
2. Verificar se o processo foi encerrado

### Comando para encerrar o processo:

```cmd
# Encerrar processo com PID 23584
taskkill /PID 23584 /F
```

### Para verificar se foi encerrado:

```cmd
# Verificar se a porta 3000 ainda está em uso
netstat -ano | findstr :3000
```

Se não retornar nenhuma linha, significa que o processo foi encerrado com sucesso e a porta 3000 está livre.
