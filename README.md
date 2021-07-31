# Full Cycle Developer

## Description

Create a `node API` that only can be accessed across `nginx` server.

## Acceptance criteria

- Must be accessed using address `http://localhost:8080`;
- Must be show `<h1>Full Cycle Rocks!</h1>` as a header and list of people;

## How to execute

- Get a copy of project executing code below:

  `git clone https://github.com/ericoalmeida/challenge_node_nginx.git`

- With terminal, access project root folder and execute code below:

  `docker-compose up -d`

- When all containers are active, access:

  `http://localhost:8080`

  > for each access on `http://localhost:8080` will be added a person name on a list of people
