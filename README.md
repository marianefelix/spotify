# Spotify

Este repositório consiste em uma aplicação web onde é possível realizar autenticação através do Spotify, a qual apresenta as principais funcionalidades: listar os artistas que você mais ouve e seus álbuns, suas playlists pessoais, criar novas playlists e exibir dados do seu perfil.

## UI/Protótipo

A interface da aplicação segue o protótipo proposto disponível no [Figma](https://www.figma.com/file/IjNmDl7JgYEegzLCuv0YUd/Desafio-Front-end---Luizalabs?type=design&node-id=0-1&mode=design&t=APb7Jk2qDKt1nUIt-0), com a adição de algumas funcionalidades e estados, como:

- Estado de loading (carregamento) dos botões primários (Login e Criação de Playlist);
- Loading Spinner para o carregamento das listagens e demais informações recuperadas da API do Spotify;
- Layout diferente (desktop) para a listagem de informações de artistas, álbuns e playlists, a fim de aproveitar toda a largura da tela, pensando na experiência do usuário;
- Adição de informação do artista (quais gêneros ele canta);
- Snackbar para apresentar mensagens de erro e de sucesso;

## Tecnologias Utilizadas

- **React com Vite:** O Vite foi utilizado como ferramenta de build, oferecendo um ambiente de desenvolvimento rápido e eficiente.

- **TypeScript:** O TypeScript foi escolhido para fornecer tipagem estática ao código, trazendo as suas vantagens, como aumentando à segurança e a legibilidade do código.

- **React Router Dom:** O React Router Dom foi utilizado para o roteamento da aplicação.

- **Vitest:** O Vitest foi escolhido como framework de teste devido à escolha do Vite.

- **React Testing Library:** A React Testing Library foi utilizada para auxiliar nos testes de componentes, garantindo o comportamento esperado da interface do usuário e facilitando a manutenção do código.

- **Styled-components:** O Styled-components foi escolhido para a estilização e criação dos componentes, permitindo a criação de estilos CSS em JavaScript, dando mais poder de estilização e adicionando legibilidade ao código.

- **React Toastify:** O React Toastify foi utilizado para exibir notificações na aplicação.

- **Mobx e mobx-persist-store:** O Mobx foi escolhido como gerenciador de estado, oferecendo uma forma simples e eficiente de compartilhar dados entre os componentes e páginas. Já o mobx-persist-store foi utilizado para persistir o estado da aplicação, utilizando o localStorage e permitindo o acesso a algumas informações no modo offline. Como ele tem integração com o mobx, fica mais simples de gerenciar esse estado e a persistência dele.

- **Axios:** O Axios foi utilizado para fazer requisições HTTP para a API do Spotify.

- **ESLint:** O ESLint foi escolhido como ferramenta de linting para garantir a consistência e a qualidade do código, identificando e corrigindo potenciais problemas e padrões incorretos.

- **Prettier:** O Prettier foi utilizado para formatar automaticamente o código, mantendo um estilo de codificação consistente em todo o projeto.

Essas tecnologias foram escolhidas com base em sua eficiência, facilidade de uso e capacidade de atender aos requisitos do projeto.

## Padrão de Branch e Commits

### Padrão de Branch

O padrão de nomenclatura de branches adotado segue o formato `type/funcionality` para branches de feature ou fix.

### Padrão de Commits

O padrão de commits adotado é o [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), que define um conjunto de regras para criar mensagens de commit estruturadas.

## Arquitetura e Estrutura de Pastas

A aplicação segue uma arquitetura em módulos, organizada em diferentes diretórios:

- **components:** Contém os principais componentes e que são reutilizados pela aplicação.

- **hooks:** Contém hooks que encapsulam lógicas comuns (ou não) utilizadas em diversos componentes.

- **models:** Aqui são definidos os modelos de dados utilizados pela aplicação.

- **pages:** Contém as páginas da aplicação, cada uma representando uma rota acessível pelo usuário.

- **router:** Contém a configuração e definição das rotas da aplicação.

- **store:** Contém as stores que guardam e persistem o estado da aplicação.

- **styles:** Aqui são armazenados os estilos globais e tema da aplicação.

- **utils:** Contém funções utilitárias e helpers.

Essa estrutura de pastas já é bastante utilizada em diversos projetos React. Dessa forma, foi escolhida a fim de proporcionar uma organização clara, além de extrair lógicas e estados de componentes e de algumas páginas, pensando na legibilidade do código, manutenção e escalabilidade.

## Requisitos

Abaixo estão os requisitos obrigatórios e os bônus que foram considerados na análise da solução:

## Requisitos obrigatórios

- [x] Seguimentação de commits
- [x] Lint
- [x] Autenticação via Spotify
- [x] Listar artistas
- [x] Listar álbuns de um artista
- [x] Utilizar paginação (scroll infinito ou não)
- [x] Funcionamento offline
- [x] Testes unitários
- [x] Deploy da aplicação

## Bônus

- [ ] Testes E2E
- [ ] Integração com Sentry
- [ ] CI/CD
- [x] Responsividade (tablet)
- [ ] Qualidade de código (Sonarqube)
- [ ] PWA

## Instruções

Siga os passos abaixo para executar a aplicação:

1. **Instalação:**

   - Certifique-se de ter o Node.js instalado em sua máquina, de preferência a versão >= 18
   - Clone este repositório usando o seguinte comando:
     ```
     git clone https://github.com/marianefelix/spotify.git
     ```
   - Navegue até o diretório do projeto:
     ```
     cd spotify
     ```
   - Instale as dependências necessárias:
     ```
     npm install
     ```

2. **Configuração da API do Spotify:**

   - Para autenticar a aplicação com o Spotify, é necessário criar um aplicativo no [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
   - Após criar o aplicativo, adicione a URL de redirecionamento para `http://localhost:5173/` nas configurações do aplicativo.
   - Antes de rodar a aplicação localmente, é necessário criar um arquivo `.env.development.local` e definir as seguintes variáveis de ambiente:

   ```
     VITE_API_BASE_URL = 'https://api.spotify.com/v1'
     VITE_SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize'
     VITE_SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token'
     VITE_SPOTIFY_CLIENT_ID = Client ID do aplicativo criado
     VITE_SPOTIFY_CLIENT_SECRET = Client Secret do aplicativo criado
     VITE_REDIRECT_URI = 'http://localhost:5173/'
   ```

3. **Execução:**

   - Inicie a aplicação:
     ```
     npm run dev
     ```
   - Acesse a aplicação em seu navegador através do endereço `http://localhost:5173/`.

4. **Testes:**

   - Execute os testes unitários:
     ```
     npm run test
     ```
