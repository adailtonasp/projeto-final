Você e sua equipe foram chamados para criar uma API para um marketplace de algum tipo de produto a sua escolha, pode ser um marketplace de livros, carros e etc. Sendo assim, a api deve ter as seguintes funcionalidades:
<li> Cadastro de usuário</li>
<li> Login do usuário</li>
<li> Cadastro de produtos</li>
<li> Edição do produto</li>
<li> Exclusão do produto</li>
<li> Listagem de produtos de todos os usuários</li>
<li> Download da imagem do produto</li>
<br>
Sendo assim, cada funcionalidade será uma rota da api e as funcionalidades tem as seguintes regras:
<h3>Cadastro de usuário</h3>
<li>Deve receber o nome do usuario, o email e a senha.</li>
<li> Deve retornar o id do usuario caso tenha sido salvo com sucesso.</li>
<h3>Login do usuário</h3>
<li> Deve receber o email e a senha.</li>
<li> Deve retornar o token do usuario para ele conseguir acessar as outras rotas.</li>
<h3>Cadastro de produtos</h3>
<li> Deve receber os dados de um produto, junto de sua categoria/tipo e foto do produto.</li>
<h3>Exclusão do produto/ Edição do produto</h3>
<li> Apenas o usuario dono do produto, que deve poder editar/excluir ele.</li>
<h3>Listagem de produtos de todos os usuários</h3>
<li> Deve ser possivel filtrar os produtos de acordo com a categoria e/ou id do usuario</li>
<h3>Download da imagem do produto</h3>
<li> Ao chamar a rota, a imagem deve estar disponivel para download(se for testar pela insomnia, a imagem deve aparecer no retorno).</li>

<h2>Regras das rotas</h2>
Apenas as rotas de <b>cadastro de usuario</b>, <b>Login do usuário</b>, <b>Listagem de produtos de todos os usuários</b> e <b>Download da imagem do produto</b>, devem ser possiveis de acessar sem autenticação, todas as outras só será permitido acessar, com o usuario autenticado.
<br>
Adicione ou crie um middleware para logar as todas requisições que chegarem.

<h2>Observações</h2>
A persistencia dos dados pode ocorrer via JSON.
Tera pontos extras quem realizar a integração com algum banco, seja relacional ou não.

<b>Grupos de 2 a 3 pessoas</b>