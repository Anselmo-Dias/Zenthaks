POST	/players	Cadastrar um novo jogador
GET	/players	Listar todos os jogadores
GET	/players/:id	Buscar um jogador específico
PUT	/players/:id	Atualizar informações de um jogador
DELETE	/players/:id	Excluir jogador (se fizer sentido)

POST	/players/:playerId/missions/:missionId/assign	Atribuir uma missão a um jogador
PATCH	/players/:playerId/missions/:missionId/start	Jogador inicia uma missão
PATCH	/players/:playerId/missions/:missionId/complete	Jogador completa uma missão
GET	/players/:playerId/missions	Listar as missões de um jogador específico

