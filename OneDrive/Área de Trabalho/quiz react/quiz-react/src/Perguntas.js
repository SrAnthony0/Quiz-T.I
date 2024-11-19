export const perguntasPorCategoria = {
    "Front-End": [
        {
            pergunta: "Como importar uma imagem em HTML?",
            alternativas: [
              "<Img>",
              "<img src>",
              "url",
              "ahref",
            ],
            respostaCorreta: "<img src>",
            explicacao: "Para importar uma imagem em HTML, utiliza-se a tag `<img src='image.jpg' alt='sua descrição'>`.",
          },
          {
            pergunta: "Como você cria uma tabela em HTML?",
            alternativas: [
              "<tab>",
              "<table>",
              "<tabela>",
              "<create tb>",
            ],
            respostaCorreta: "<table>",
            explicacao: "Para criar uma tabela em HTML, utiliza-se a tag `<table>`, junto com `<tr>` para linhas e `<td>` para células de dados.",
          },
          {
            pergunta: "O que significa a sigla CSS?",
            alternativas: [
              "Cascading Style Sheets",
              "Context Style Sheets",
              "Casual Style Sheets",
              "Commit Style Sheets",
            ],
            respostaCorreta: "Cascading Style Sheets",
            explicacao: "CSS significa Cascading Style Sheets, uma linguagem de estilo para definir a aparência de páginas web.",
          },
          {
            pergunta: "Como aplicar uma cor de fundo em um elemento no CSS?",
            alternativas: [
              "Color",
              "Background-color",
              "Font-color",
              "Font-size",
            ],
            respostaCorreta: "Background-color",
            explicacao: "A propriedade `background-color` é usada para aplicar uma cor de fundo em CSS.",
          },
          {
            pergunta: "Qual é o corpo principal do documento em HTML?",
            alternativas: [
              "<div>",
              "<main>",
              "<body>",
              "<css>",
            ],
            respostaCorreta: "<body>",
            explicacao: "A tag `<body>` é o corpo principal do documento HTML e contém todo o conteúdo visível.",
          },
          {
            pergunta: "O que é o React?",
            alternativas: [
              "Uma biblioteca para construção de interfaces de linha de comando.",
              "Um framework para backend em JavaScript.",
              "Uma biblioteca para construção de interfaces de usuário.",
              "Um compilador de código JavaScript.",
            ],
            respostaCorreta: "Uma biblioteca para construção de interfaces de usuário.",
            explicacao: "O React é uma biblioteca JavaScript para criar interfaces de usuário dinâmicas e reativas.",
          },
          {
            pergunta: "O que é JSX no React?",
            alternativas: [
              "Um tipo de banco de dados usado no React.",
              "Uma extensão de sintaxe que permite escrever HTML no JavaScript.",
              "Um tipo de servidor web para React.",
              "Uma linguagem de programação usada pelo React.",
            ],
            respostaCorreta: "Uma extensão de sintaxe que permite escrever HTML no JavaScript.",
            explicacao: "JSX é uma extensão de sintaxe que combina HTML e JavaScript, tornando o código React mais legível.",
          },
          {
            pergunta: "Qual é a função do useState em um componente funcional do React?",
            alternativas: [
              "Definir o tipo de dados que o componente vai renderizar.",
              "Criar um estado local dentro do componente.",
              "Controlar os efeitos colaterais de um componente.",
              "Alterar o layout do componente.",
            ],
            respostaCorreta: "Criar um estado local dentro do componente.",
            explicacao: "`useState` permite criar e gerenciar estados locais em componentes funcionais do React.",
          },
          {
            pergunta: "O que a função useEffect faz em um componente funcional?",
            alternativas: [
              "Cria um novo estado dentro do componente.",
              "Controla a renderização condicional de um componente.",
              "Realiza efeitos colaterais, como chamadas de API ou manipulação de DOM após a renderização.",
              "Altera a estrutura do JSX exibido pelo componente.",
            ],
            respostaCorreta: "Realiza efeitos colaterais, como chamadas de API ou manipulação de DOM após a renderização.",
            explicacao: "`useEffect` é usado para lidar com efeitos colaterais, como manipulação de DOM e chamadas de API.",
          },
          {
            pergunta: "Qual é a principal função do CSS no desenvolvimento front-end?",
            alternativas: [
              "Adicionar interatividade à página web.",
              "Controlar a estrutura e o comportamento do DOM.",
              "Definir o estilo e a aparência visual de uma página web.",
              "Gerenciar o estado de um componente no JavaScript.",
            ],
            respostaCorreta: "Definir o estilo e a aparência visual de uma página web.",
            explicacao: "CSS é usado para definir o estilo e o layout de páginas web, como cores, fontes e tamanhos.",
          },
          {
            pergunta: "O que é o Flexbox no CSS?",
            alternativas: [
              "Um sistema de layout baseado em tabelas.",
              "Uma técnica para criar layouts com base em colunas fixas.",
              "Um sistema de layout que permite criar designs flexíveis e responsivos com base em contêineres e itens.",
              "Um tipo de animação usada em páginas web.",
            ],
            respostaCorreta: "Um sistema de layout que permite criar designs flexíveis e responsivos com base em contêineres e itens.",
            explicacao: "O Flexbox é uma técnica de CSS para criar layouts responsivos e flexíveis.",
          },
          {
            pergunta: "Qual é a função do alt em uma tag <img>?",
            alternativas: [
              "Definir a largura e altura da imagem.",
              "Fornecer uma descrição alternativa da imagem, caso ela não possa ser carregada.",
              "Controlar o efeito de transição da imagem.",
              "Alterar a cor da imagem.",
            ],
            respostaCorreta: "Fornecer uma descrição alternativa da imagem, caso ela não possa ser carregada.",
            explicacao: "O atributo `alt` fornece uma descrição textual para imagens, útil para acessibilidade.",
          },
          {
            pergunta: "Qual propriedade é usada para mudar a cor do texto?",
            alternativas: [
              "color",
              "font-color",
              "text-color",
              "background-color",
            ],
            respostaCorreta: "color",
            explicacao: "A propriedade `color` é usada para definir a cor do texto em CSS.",
          },
          {
            pergunta: "Qual propriedade CSS é usada para definir o tamanho da fonte?",
            alternativas: [
              "font-size",
              "text-size",
              "size",
              "font-style",
            ],
            respostaCorreta: "font-size",
            explicacao: "A propriedade `font-size` controla o tamanho do texto em CSS.",
          },
    ],
    "Back-End": [
    {
      pergunta: "O que é uma API em desenvolvimento back-end?",
      alternativas: [
        "Uma biblioteca.",
        "Um conjunto de funções para banco de dados.",
        "Uma interface de comunicação entre sistemas.",
        "Um tipo de Servidor Físico"
      ],
      respostaCorreta: "Uma interface de comunicação entre sistemas.",
      explicacao:
        "As APIs atuam como um conjunto de regras e ferramentas que permitem a interação entre diferentes softwares, facilitando a integração e o fluxo de dados.",
    },
    {
      pergunta: "Para que serve o Caching em Back-end?",
      alternativas: [
        "Armazena temporariamente dados.",
        "Compactar arquivos para reduzir espaço.",
        "Descarta requisições HTTP desnecessárias.",
        "Criar conexões com banco de dados."
      ],
      respostaCorreta: "Armazena temporariamente dados.",
      explicacao:
        "Caching é uma técnica que armazena dados frequentemente acessados em um local temporário, chamado cache, para melhorar o desempenho de um sistema.",
    },
    {
      pergunta: "Qual dessas tecnologias é ideal para Autenticação em uma API?",
      alternativas: ["GraphQL", "OAuth", "CSS", "JSON"],
      respostaCorreta: "OAuth",
      explicacao:
        "OAuth é um padrão aberto de delegação de autorização/autenticação, utilizado para permitir que usuários façam login em sites terceiros usando contas como Google, Facebook e Microsoft, mas sem expor senhas e outras credenciais de autenticação.",
    },
    {
      pergunta:
        "No contexto de segurança em Back-end, qual é o benefício principal do uso de tokens JWT?",
      alternativas: [
        "Tokens JWT podem ser armazenados diretamente do banco de dados",
        "Tokens JWT permitem autenticação sem necessidade de estado no servidor.",
        "JWT substitui protocolos como o OAuth 2.",
        "JWT são mais rápidos que qualquer outro método de autenticação."
      ],
      respostaCorreta:
        "Tokens JWT permitem autenticação sem necessidade de estado no servidor.",
      explicacao:
        "Toda a informação necessária está contida no token, permitindo autenticação sem necessidade de armazenar sessões no servidor.",
    },
    {
      pergunta:
        "Qual é a principal diferença entre WebSockets e HTTP?",
      alternativas: [
        "Websockets não suporta comunicação bidirecional, enquanto HTTP suporta.",
        "HTTP usa o modo half-duplex, enquanto Websockets mantêm uma conexão Full-duplex.",
        "HTTP é baseado em eventos, enquanto Websockets não são.",
        "Um é online, outro Não"
      ],
      respostaCorreta:
        "HTTP usa o modo half-duplex, enquanto Websockets mantêm uma conexão Full-duplex.",
      explicacao:
        "O HTTP usa o modo Half-duplex permitindo apenas executar uma ação por vez, enquanto o WebSockets usam o modo Full-duplex, sendo possível realizar ações simultaneamente.",
    },
    {
      pergunta:
        "Qual a principal função de um Back-end em uma aplicação Web?",
      alternativas: [
        "Gerenciar interfaces de usuário.",
        "Processar e armazenar dados enviados pelo front-end.",
        "Otimizar o carregamento de imagens.",
        "Criação de IAs."
      ],
      respostaCorreta: "Processar e armazenar dados enviados pelo front-end.",
      explicacao:
        "O back-end é responsável por processar e armazenar os dados enviados pelo front-end e, muitas vezes, interagir com o banco de dados para gerenciar essas informações.",
    },
    {
      pergunta: "Em uma API GraphQL, o que é um resolver?",
      alternativas: [
        "Um esquema para definir os tipos disponíveis na API.",
        "Ler dados de banco de dados, serviços na nuvem ou praticamente qualquer outra origem.",
        "Um mecanismo de cache usado em consultas complexas.",
        "Um método para agrupar endpoints de forma lógica."
      ],
      respostaCorreta:
        "Ler dados de banco de dados, serviços na nuvem ou praticamente qualquer outra origem.",
      explicacao:
        "Os resolvers são capazes de ler dados de serviços em nuvens ou em qualquer outra origem de dados.",
    },
    {
      pergunta: "Qual linguagem é mais popular usada no Back-end?",
      alternativas: ["HTML", "CSS", "JavaScript", "Python"],
      respostaCorreta: "Python",
      explicacao:
        "Python é comum no Back-end devido à robustez e suporte para frameworks de servidores como Django e Flask.",
    },
    {
      pergunta: "Qual é o principal objetivo de um framework back-end?",
      alternativas: [
        "Criar designs responsivos.",
        "Facilitar o desenvolvimento de interfaces.",
        "Facilitar o desenvolvimento de aplicativos de web do lado do servidor.",
        "Gerar relatórios."
      ],
      respostaCorreta:
        "Facilitar o desenvolvimento de aplicativos de web do lado do servidor.",
      explicacao:
        "Frameworks Back-end permitem desenvolver aplicativos web do lado do servidor com facilidade, incluindo criação de formulários, controle de banco de dados e solicitações HTTP.",
    },
    {
      pergunta:
        "Qual protocolo é usado para comunicação entre servidores e clientes na Web?",
      alternativas: ["HTTP", "FTP", "SMTP", "DNS"],
      respostaCorreta: "HTTP",
      explicacao:
        "O protocolo usado para comunicação entre clientes e servidor na Web é o HTTP (Hypertext Transfer Protocol).",
    },
    {
      pergunta: "Qual das opções é um banco de dados NoSQL?",
      alternativas: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      respostaCorreta: "MongoDB",
      explicacao:
        "MongoDB é um banco de dados NoSQL que oferece esquemas flexíveis e escalabilidade.",
    },
    {
      pergunta: "Qual o propósito de autenticação no Backend?",
      alternativas: [
        "Garantir a segurança das informações de um sistema.",
        "Excluir dados antigos.",
        "Renderizar páginas mais rápido.",
        "Criar Layouts para Sistemas."
      ],
      respostaCorreta: "Garantir a segurança das informações de um sistema.",
      explicacao:
        "A autenticação no Back-end tem como objetivo garantir a segurança das informações, validando as credenciais do usuário.",
    },
    {
      pergunta: "Qual papel do Redis no back-end?",
      alternativas: [
        "Armazenar grandes arquivos de imagens.",
        "Ajudar na renderização do Front-end.",
        "Armazena dados em memória para rápido acesso.",
        "Realiza consultas SQL complexas."
      ],
      respostaCorreta: "Armazena dados em memória para rápido acesso.",
      explicacao:
        "O Redis armazena dados na memória, permitindo acesso rápido e reduzindo a necessidade de consultas ao banco de dados.",
    },
    {
      pergunta: "Qual a função do Nginx no back-end?",
      alternativas: [
        "Ajudar no gerenciamento de transações de banco de dados.",
        "Servidor Web de alta performance com Balanceador de carga.",
        "Exclui dados obsoletos de usuários.",
        "Gerencia a autenticação de usuários."
      ],
      respostaCorreta:
        "Servidor Web de alta performance com Balanceador de carga.",
      explicacao:
        "O Nginx é um servidor de código aberto com alta performance e escalabilidade, capaz de lidar com conexões simultâneas.",
    },
    {
      pergunta: "O que significa a Sigla HTTP?",
      alternativas: [
        "Hypertext Transfer Protocol.",
        "HyperTransfer Text Protocol.",
        "HyperTerminal Transfer Protocol.",
        "HighTransfer Text Protocol."
      ],
      respostaCorreta: "Hypertext Transfer Protocol.",
      explicacao:
        "HTTP significa Hypertext Transfer Protocol, utilizado para transferência de dados na Web.",
    },
    ],
    "Fullstack": [
        {
            pergunta: "O que é um desenvolvedor Full Stack?",
            alternativas: [
              "Trabalha apenas com design.",
              "Especialista em banco de dados.",
              "Trabalha só no frontend.",
              "Trabalha com Frontend e Backend",
            ],
            respostaCorreta: 3,
            explicacao: "Desenvolvedores Full Stack são profissionais que trabalham tanto com o front-end quanto com o back-end, dominando tecnologias de ambas as áreas.",
          },
          {
            pergunta: "O que é HTML usado para criar?",
            alternativas: [
              "Planilhas de Excel.",
              "Aplicações de celular.",
              "Estrutura de páginas da web.",
              "Jogos de console.",
            ],
            respostaCorreta: 2,
            explicacao: "HTML é usado para criar a estrutura das páginas da web, definindo cabeçalhos, parágrafos, links e outros elementos estruturais.",
          },
          {
            pergunta: "O que é usado para estilizar páginas web?",
            alternativas: ["SQL", "CSS", "HTML", "JSON"],
            respostaCorreta: 1,
            explicacao: "CSS (Cascading Style Sheets) é usado para estilizar elementos HTML, permitindo personalizar fontes, cores e layouts.",
          },
          {
            pergunta: "Qual é a função do JavaScript no frontend?",
            alternativas: [
              "Criar banco de dados.",
              "Gerar gráficos no Excel.",
              "Alterar a aparência.",
              "Manipula o CSS de forma interativa e responsiva",
            ],
            respostaCorreta: 3,
            explicacao: "JavaScript permite criar interatividade e respostas dinâmicas na página, como manipulação de estilos e eventos do usuário.",
          },
          {
            pergunta: "O que é uma API?",
            alternativas: [
              "Um comunicador entre sistemas.",
              "Um servidor de e-mails.",
              "Um tipo de antivírus.",
              "Um comunicador entre sistemas.",
            ],
            respostaCorreta: 0,
            explicacao: "Uma API (Application Programming Interface) é uma ponte que permite a comunicação e integração entre diferentes sistemas.",
          },
          {
            pergunta: "Qual destes é um banco de dados relacional?",
            alternativas: ["React", "CSS", "Angular", "MySQL"],
            respostaCorreta: 3,
            explicacao: "MySQL é um banco de dados relacional amplamente utilizado para armazenar e organizar dados em tabelas relacionadas.",
          },
          {
            pergunta: "Qual linguagem é usada no backend com Node.js?",
            alternativas: ["PHP", "Python", "Ruby", "JavaScript"],
            respostaCorreta: 3,
            explicacao: "Node.js é uma plataforma que utiliza JavaScript para executar código no lado do servidor.",
          },
          {
            pergunta: "Qual é o framework frontend popular?",
            alternativas: ["MongoDB", "Flask", "Apache", "React"],
            respostaCorreta: 3,
            explicacao: "React é um framework popular usado no desenvolvimento front-end para criar interfaces de usuário dinâmicas.",
          },
          {
            pergunta: "O que é um CRUD?",
            alternativas: [
              "Sistema de segurança para sites.",
              "Método de compressão de arquivos.",
              "Ferramenta de design gráfico.",
              "Operações de Criar, Ler, Atualizar e Deletar dados.",
            ],
            respostaCorreta: 3,
            explicacao: "CRUD representa as operações básicas para gerenciamento de dados: Create, Read, Update e Delete.",
          },
          {
            pergunta: "O que é o CSS usado para fazer?",
            alternativas: [
              "Gerar relatórios financeiros.",
              "Armazenar dados de usuários.",
              "Enviar e-mails automáticos.",
              "Estilizar páginas web.",
            ],
            respostaCorreta: 3,
            explicacao: "CSS é usado para estilizar páginas web, definindo cores, fontes e layouts para melhorar a aparência.",
          },
          {
            pergunta: "Qual desses é um servidor web?",
            alternativas: ["Canva", "MongoDB", "Photoshop", "Apache"],
            respostaCorreta: 3,
            explicacao: "Apache é um servidor web amplamente utilizado para hospedar e servir páginas da web.",
          },
          {
            pergunta: "O que significa fazer o deploy de uma aplicação?",
            alternativas: [
              "Criar um backup do projeto.",
              "Traduzir o código para outra linguagem.",
              "Salvar o código localmente.",
              "Publicar o código em um servidor.",
            ],
            respostaCorreta: 3,
            explicacao: "Fazer o deploy de uma aplicação significa publicá-la em um servidor para que esteja acessível aos usuários.",
          },
          {
            pergunta: "O que é Git?",
            alternativas: [
              "Uma linguagem de programação.",
              "Uma ferramenta de design.",
              "Um software para editar vídeos.",
              "Sistema de controle de versão.",
            ],
            respostaCorreta: 3,
            explicacao: "Git é um sistema de controle de versão que permite rastrear alterações no código e facilitar a colaboração entre desenvolvedores.",
          },
          {
            pergunta: "Qual dessas tecnologias é usada para backend?",
            alternativas: ["HTML", "CSS", "React", "Python"],
            respostaCorreta: 3,
            explicacao: "Python é uma linguagem de programação amplamente usada no backend devido à sua versatilidade e suporte para frameworks como Django e Flask.",
          },
          {
            pergunta: "O que significa frontend em desenvolvimento web?",
            alternativas: [
              "Banco de dados da aplicação.",
              "Lógica de negócios no servidor.",
              "Código executado pelo backend.",
              "Interface e parte visual do site.",
            ],
            respostaCorreta: 3,
            explicacao: "Frontend refere-se à parte visual e interativa do site, que é exibida diretamente aos usuários.",
          },
    ],
  };
  