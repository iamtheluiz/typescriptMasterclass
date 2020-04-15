# Anotações

## Post

* **Typescript: Vantagens, mitos, dicas e conceitos fundamentais** - [Ler artigo](https://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos/)

## O que faz?

Adiciona a tipagem para a linguagem Javascript, descrevendo o que funções recebem de parâmetros, o que elas retornam, entre outras diversas situações onde as tipagens podem ser utilizadas.

## Usar em...

* **Códigos abertos**: Evitar códigos que não estejam no padrão da biblioteca
* **Projetos que escalam muito**: Ajuda a manter uma documentação do projeto e o que cada função do projeto recebe e retorna
* **Equipes maduras com a linguagem**: Usar Typescript com equipes que já sabem lidar com ele, pois existem diversas diferenças entre o Javascript e o Typescript

## Porque?

O resultado final tem mais relação com a produtividade dos programadores, não sendo uma melhoria de performance (pois ele será convertido para Javascript). Logo, o ganho está dentro do processo de desenvolvimento, integrando as nossas ferramentas de desenvolvimento com a linguagem, tipagens e parâmetros.

## Prática

### Backend

#### Instalando

Para utilizar o Typescript, primeiro vamos inicializar um projeto com 'npm' ou 'yarn':

```
yarn init -y
```

E adicionaremos o Typescript como uma dependência de desenvolvimento no nosso projeto:

```
yarn add typescript -D
```

Como estamos fazendo um backend, utilizaremos o express para seu desenvolvimento. Crie uma pasta 'src/' com o arquivo 'index.ts' (que será nosso arquivo principal). O Typescript permite que os desenvolvedores utilizem as última sintaxes do Javascript, como o import. Agora, adicione o express na aplicação:

```
yarn add express
```

E as bibliotecas, com o Typescript, necessitam que se instale a biblioteca de tipos delas, para que o editor auto complete os comandos (como não existe necessidade dessa biblioteca estar na versão de produção, adicione ela como uma dependência de desenvolvimento):

```
yarn add @types/express -D
```

Após configurar o servidor, podemos utilizar o comando:

```
yarn tsc src/index.ts (isso converterá o arquivo '.ts' para '.js')
```

Agora, inicie as configurações de Typescript do projeto com o comando:

```
yarn tsc --init
```

E para transpilações após a inicialização das configurações, é possível utilizar o comando:

```
yarn tsc
```

#### tsconfig.json

No arquivo de configurações do Typescript, é importante que façamos a definição de algumas configurações:
* **outDir** (Onde fica o código transpilado): "./dist"

#### Atualização em Tempo Real

Existem duas opções interessantes até o presente momento:
* **Sucrase** - Não possui suporte aos decorators
* **ts-node-dev** - Possui suporte aos decorators

Nesse caso, utilizaremos o segundo:

```
yarn add ts-node-dev -D
```

E adicionaremos um script ao package:

```json
"scripts": {
  "dev:server": "ts-node-dev --respawn --transpileOnly src/index.ts"
}
```

### Frontend

Para iniciar um projeto React com o Typescript, utilizaremos:

```
yarn create react-app frontend --template=typescript
```

Os arquivos que são do tipos '.ts' não possuem código JSX e '.tsx' para components React.