# Repositorio para desafio:

*Crie um programa utilizando sua linguagem de programação favorita que faça uma listagem simples do nome de alguns módulos do curso Full Cycle os trazendo de um banco de dados MySQL. Gere a imagem desse container e a publique no DockerHub.*

*Gere uma imagem do nginx que seja capaz que receber as solicitações http e encaminhá-las para o container.*

*Crie um repositório no github com todo o fonte do programa e das imagens geradas.*

*Crie um arquivo README.md especificando quais comandos precisamos executar para que a aplicação funcione recebendo as solicitações na porta 8080 de nosso computador. Lembrando que NÃO utilizaremos Docker-compose nesse desafio.*


## Comandos a serem executados para testar

```
docker network create mynetwork

docker run --rm --name mysql --network=mynetwork -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=nodedb -v $(pwd)/data:/var/lib/mysql ggibellato/pfa-docker-d1-mysql 

docker run --rm --name node --network=mynetwork -v $(pwd):/usr/app ggibellato/pfa-docker-d1-node

docker run --rm --name nginx --network=mynetwork -p 8080:80 ggibellato/pfa-docker-d1-nginx

```


