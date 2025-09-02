# 📚 BookVerse - Biblioteca Interativa Online

<div align="center">
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="SASS" />
</div>

---

## 🧙‍♂️ **Storytelling**

Na cidade fictícia de **Librália**, a paixão por livros é parte da cultura local. Com o crescimento da tecnologia e o acesso à internet, os moradores desejam algo além de estantes físicas: uma **plataforma digital** onde possam buscar, descobrir e organizar suas leituras favoritas.

A prefeitura de Librália então contrata um jovem e talentoso desenvolvedor para criar o **BookVerse**, uma **biblioteca interativa online**. A proposta é oferecer uma experiência moderna, bonita e intuitiva, conectando-se com uma API externa de livros e permitindo que os moradores personalizem sua própria estante virtual.

Esse sistema será a vitrine cultural da cidade e poderá ser acessado por qualquer dispositivo.

---

## 🎯 **Objetivos Educacionais**

Este projeto foi desenvolvido para praticar de forma natural e contextualizada os seguintes **conceitos-chave do Vue 3**:

- **Diretivas Vue** (`v-if`, `v-for`, `v-model`, `v-bind`, `v-on`)
- **Ciclo de vida do componente** (`onMounted`, `onUpdated`, etc.)
- **Componentes reutilizáveis**
- **Métodos e eventos**
- **Propriedades computadas (`computed`)**
- **Roteamento com Vue Router**
- **Consumo de API externa com Axios**
- **Estilização e UI com Naive UI**
- **Gerenciamento de estado com `localStorage`**

---

## 🚀 **Tecnologias Utilizadas**

| Tecnologia            | Versão  | Função                                 |
| --------------------- | ------- | -------------------------------------- |
| **Vue 3**             | ^3.5.13 | Framework principal (Composition API)  |
| **TypeScript**        | ^5.8.3  | Tipagem estática e maior produtividade |
| **Vite**              | ^6.2.4  | Ferramenta de build e dev server       |
| **Vue Router**        | ^4.5.0  | Navegação entre páginas SPA            |
| **Naive UI**          | ^2.41.0 | Componentes UI elegantes               |
| **Axios**             | ^1.9.0  | Requisições HTTP à API                 |
| **SASS**              | ^1.86.3 | Pré-processador CSS                    |
| **ESLint + Prettier** | -       | Qualidade e formatação de código       |

---

## 🧩 **Funcionalidades Implementadas**

### ✅ **Funcionalidades Atuais**

#### 🏠 **Home**

- Mensagem de boas-vindas personalizada
- Dashboard com estatísticas da biblioteca pessoal
- Navegação intuitiva para outras seções

#### 🔍 **Descobrir Livros**

- Campo de busca por título e autor
- Integração com **Google Books API**
- Exibição de resultados em cards responsivos
- Sistema de loading durante as buscas
- Tratamento de erros e estados vazios

#### 📚 **Minha Biblioteca**

- Lista de livros salvos pelo usuário
- Sistema de avaliação com estrelas
- Interface limpa e organizadas

#### 🎨 **Componentes Reutilizáveis**

- `BookCard` - Card de exibição de livros
- `RatingStars` - Sistema de avaliação
- `Navbar` - Navegação principal
- `Loader` - Indicador de carregamento

### 🚧 **Em Desenvolvimento**

#### 📘 **Detalhe do Livro**

- Página individual acessada por `/livro/:id`
- Informações completas da obra
- Ações avançadas de gerenciamento

#### 📚 **Melhorias na Biblioteca**

- Status de leitura: "Quero ler", "Lendo", "Lido"
- Sistema de comentários
- Paginação e filtros avançados
- Remoção em lote de livros

#### 👤 **Sistema de Perfil**

- Página de perfil do usuário
- Edição de informações pessoais
- Estatísticas de leitura

---

## 🌍 **API Utilizada**

**Google Books API**

```
https://www.googleapis.com/books/v1/volumes?q={termo_busca}&key={API_KEY}
```

A API do Google Books fornece acesso a milhões de livros com informações como:

- Título e autor
- Descrição e categoria
- Imagens de capa
- Avaliações e reviews
- Data de publicação

---

## 🛠️ **Configuração do Projeto**

### **Pré-requisitos**

- Node.js (versão 16+)
- npm ou yarn

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/gbmsaraujo/bookverse.git

# Entre no diretório
cd bookverse

# Instale as dependências
npm install
```

### **Configuração da API**

1. Obtenha uma chave da API do Google Books
2. Crie o arquivo `src/config/constants.ts`:

```typescript
export const GOOGLE_API_KEY = 'sua_chave_da_api_aqui'
```

### **Scripts Disponíveis**

```bash
# Desenvolvimento com hot-reload
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Linting e correção automática
npm run lint

# Formatação de código
npm run format

# Verificação de tipos TypeScript
npm run type-check
```

---

## 📁 **Estrutura do Projeto**

```
src/
├── assets/          # Imagens e recursos estáticos
│   └── covers/      # Capas padrão de livros
├── components/      # Componentes reutilizáveis
│   ├── BookCard/    # Card de exibição de livros
│   ├── Loader/      # Componente de loading
│   ├── Navbar/      # Barra de navegação
│   └── RatingStars/ # Sistema de avaliação
├── config/          # Configurações da aplicação
├── hooks/           # Hooks personalizados
├── router/          # Configuração de rotas
├── styles/          # Estilos globais e variáveis
└── views/           # Páginas da aplicação
    ├── Home/        # Página inicial
    ├── Discover/    # Busca de livros
    ├── Library/     # Biblioteca pessoal
    └── NotFound/    # Página 404
```

---

## 🎨 **Design e UI/UX**

### **Características do Design**

- **Design System**: Naive UI para consistência visual
- **Responsividade**: Layout adaptável para todos os dispositivos
- **Tema**: Suporte a modo claro (dark mode planejado)
- **Tipografia**: Hierarquia clara e legível
- **Cores**: Paleta harmoniosa focada na experiência de leitura

### **Componentes Estilizados**

- Cards de livros com hover effects
- Botões com estados visuais claros
- Inputs com validação visual
- Sistema de loading elegante
- Navegação intuitiva

---

## 🧠 **Conceitos Vue 3 em Prática**

### **Composition API**

```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

const books = ref([])
const loading = ref(false)

const totalBooks = computed(() => books.value.length)

onMounted(() => {
  loadSavedBooks()
})
</script>
```

### **Roteamento Dinâmico**

```typescript
const routes = [
  { path: '/', component: Home },
  { path: '/discover', component: Discover },
  { path: '/library', component: Library },
  { path: '/book/:id', component: BookDetail },
]
```

### **Integração com API**

```typescript
const searchBooks = async (query: string) => {
  loading.value = true
  try {
    const response = await axios.get(`${API_URL}?q=${query}`)
    books.value = response.data.items
  } catch (error) {
    console.error('Erro ao buscar livros:', error)
  } finally {
    loading.value = false
  }
}
```

---

## ✅ **Roadmap de Desenvolvimento**

### 🔧 **Setup** ✅

- [x] Projeto iniciado com Vite + Vue 3 + TypeScript
- [x] Vue Router configurado
- [x] Axios instalado e configurado
- [x] SASS configurado
- [x] Naive UI integrado
- [x] Layout base com Navbar

### 📑 **Páginas**

- [x] `Home.vue` - Página inicial
- [x] `Discover.vue` - Busca de livros
- [x] `Library.vue` - Biblioteca pessoal
- [x] `NotFound.vue` - Página 404
- [ ] `BookDetail.vue` - Detalhes do livro
- [ ] `Profile.vue` - Perfil do usuário

### 🧩 **Componentes**

- [x] `Navbar.vue`
- [x] `BookCard.vue`
- [x] `RatingStars.vue`
- [x] `Loader.vue`
- [ ] `CommentBox.vue`
- [ ] `Modal.vue`
- [ ] `Pagination.vue`

### 📡 **Funcionalidades**

- [x] Busca de livros via Google Books API
- [x] Exibição de resultados com tratamento de erros
- [x] Sistema básico de avaliação
- [ ] Página de detalhes do livro
- [ ] Status de leitura (Quero ler, Lendo, Lido)
- [ ] Sistema de comentários
- [ ] Paginação de resultados
- [ ] Filtros avançados
- [ ] Remoção em lote
- [ ] Sistema de perfil

### 🗃️ **Estado e Persistência**

- [ ] Implementar Pinia para gerenciamento de estado
- [ ] Persistência avançada com localStorage
- [ ] Sincronização entre abas
- [ ] Cache de buscas

---

## 🤝 **Contribuição**

Este é um projeto educacional desenvolvido em mentoria. Sugestões e melhorias são sempre bem-vindas!

### **Como Contribuir**

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 **Desenvolvedor**

Projeto desenvolvido durante programa de mentoria em Vue.js

**Mentor:** [Gabriel Araújo](https://github.com/gbmsaraujo)  
**Mentorado:** Filipe

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considera dar uma estrela!</p>
  
  **BookVerse** - Transformando a experiência de descobrir e organizar livros 📚✨
</div>
