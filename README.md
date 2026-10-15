# 📊 Relação de Inscritos e Galeria de Veículos

## 🔗 Link para Acesso Direto
O projeto já está hospedado e funcionando em tempo real. Teste a navegação clicando no link abaixo:
👉 (https://jeferson562.github.io/meusite/)

---

## 🛠️ Detalhes dos Projetos Desenvolvidos

### Projeto 1: Relação de Inscritos 👥
Esta página renderiza uma tabela contendo os dados fundamentais de cada pessoa inscrita: Nome Completo, Contato, Cidade e E-mail. Seu design visual foi projetado para harmonizar com a estética da galeria de veículos.

* **Efeito Hover de Segundo Plano:** Ao passar o ponteiro do mouse sobre uma linha da tabela, a imagem do brasão da cidade surge de forma suave no fundo, com uma camada escurecida que protege a legibilidade do texto.
* **Badges de Navegação Municipal:** O campo da cidade foi estilizado como uma etiqueta com ícone de localização. O elemento é um link externo que abre o site da prefeitura em uma nova aba com efeitos dinâmicos de brilho e elevação ao passar o mouse.
* **Leitura por Áudio:** Conta com uma funcionalidade de acessibilidade que reproduz sonoramente o nome da cidade correspondente à linha selecionada. Um botão no topo permite ligar ou desligar essa resposta de áudio.

### Projeto 2: Galeria de Veículos 🚘
A página intitulada “Nossos Veículos” organiza em linhas uma lista de carros contendo Foto, Modelo/Ano, Preço e o botão direcionador para a montadora correspondente. O fundo utiliza uma imagem de garagem para evitar elementos neutros.

* **Logomarca Oculta no Hover:** Interagir com as linhas da tabela faz com que o logotipo da fabricante (ex: Chevrolet, Volkswagen) apareça integrado ao fundo escuro da linha ativa.
* **Ampliação de Imagem:** Um clique sobre a miniatura da foto do veículo expande a imagem em alta resolução de forma centralizada na tela.
* **Trilha Sonora de Fundo:** Um mecanismo multimídia permite iniciar ou pausar uma música ambiente clicando em qualquer espaço vazio do plano de fundo da página.

---

## 📂 Integração e Conectividade entre Páginas
As duas interfaces estão interligadas de forma direta através de botões fixos estrategicamente posicionados nas laterais superiores (`Galeria de veículos` e `Relação de inscritos`). Essa estrutura possibilita ao usuário transitar entre as listas de dados continuamente sem a necessidade de retornar ao navegador ou digitar caminhos manuais.

---

## 💻 Tecnologias Implementadas
* **HTML5:** Criação e estruturação de tabelas semânticas (`<table>`), listas de informações, links alternantes e botões de controle.
* **CSS3:** Estilizações aplicadas a layouts escuros, efeitos pulsantes nos títulos das páginas, animações de elevação de elementos e transições de opacidade.
* **JavaScript:** Manipulação de eventos no hover de linhas, lógica de interrupção e inicialização de áudio e gerenciamento do zoom de imagem ao clique.
