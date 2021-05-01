USE nodedb;
CREATE TABLE modules(id int NOT NULL AUTO_INCREMENT, nome varchar(255), PRIMARY KEY(id));

INSERT INTO modules(nome) values('Docker');
INSERT INTO modules(nome) values('Fundamentos de Arquitetura de Software');
INSERT INTO modules(nome) values('Comunicacao');
INSERT INTO modules(nome) values('RabaitMQ');
INSERT INTO modules(nome) values('Autenticacao e Keycloak');