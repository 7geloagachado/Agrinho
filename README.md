# 🌾 Agrinho 2026 - Segurança Alimentar e Produção Sustentável

> **Status do Projeto:** 🚀 Concluído (Apresentado para o Concurso Agrinho)
> **Tema:** *"Segurança Alimentar e Produção Sustentável: produzir mais alimentos, preservar o planeta e garantir qualidade de vida."*

---

## 📋 Sobre o Projeto

Este site foi desenvolvido como uma ferramenta educacional e interativa para o **Concurso Agrinho 2026**. O objetivo principal é conscientizar as pessoas sobre a importância da segurança alimentar, os pilares do agronegócio e as técnicas de produção agrícola sustentável que protegem o nosso ecossistema.

A plataforma reúne dados atuais de órgãos internacionais (como a FAO e a ONU), um feed dinâmico de notícias do setor e um quiz interativo para testar o conhecimento do usuário.

---

## ✨ Funcionalidades Principais

* **Design Responsivo & Fluido:** Interface totalmente adaptável para dispositivos móveis e desktops.


* **Alternador de Tema (Light/Dark Mode):** Suporte nativo a temas claro e escuro com persistência de escolha através do `localStorage`.


* **Loader Animado:** Tela de carregamento personalizada que melhora a experiência inicial do usuário.


* **Barra de Progresso de Leitura:** Indicador visual no topo da página que acompanha o scroll do usuário.


* **Efeito Parallax:** Fundo imersivo na seção Hero para um visual moderno.


* **Seções Dinâmicas e Interativas:**
* *Infográfico de Produção Sustentável:* Explica práticas como rotação de culturas e plantio direto.


* *Timeline de Inovação:* Exibe as principais tecnologias aplicadas no campo (Drones, Sensores, IA).


* *Contadores de Estatísticas Animados:* Números e dados de impacto que ganham vida quando entram na tela.




* **Feed de Notícias Dinâmico:** Seção alimentada via JavaScript com notícias reais sobre o cenário agro-sustentável do Brasil e do mundo.


* **Quiz Interativo:** Um jogo de perguntas e respostas com validação de acertos/erros em tempo real e sistema de pontuação.



---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais (Vanilla Architecture), garantindo leveza e alta performance:

* **HTML5:** Estruturação semântica e acessibilidade.


* **CSS3 (Variáveis & Modern Layouts):** Estilização, Flexbox, CSS Grid, e animações sob medida.


* **JavaScript (ES6+):** Manipulação de DOM, consumo de dados estruturados locais (para notícias e quiz) e lógica de scroll.


* **Font Awesome (v6.5.1):** Biblioteca de ícones vetoriais modernos.


* **Google Fonts:** Tipografia utilizando a fonte *Poppins*.



---

## 📂 Estrutura de Arquivos

```text
├── index.html      # Estrutura principal da página e seções
├── style.css       # Estilização global, temas e responsividade
├── script.js       # Lógica do Quiz, Notícias, Dark Mode e Efeitos
└── img/            # Recursos de imagens (ex: background do Hero)

```

---

## 🧠 Detalhes de Implementação Importantes

* **Efeito Reveal no Scroll:** Utiliza a API `IntersectionObserver` do JavaScript para disparar animações CSS de entrada apenas quando os elementos estão visíveis na tela, otimizando o desempenho.


* **Contadores Progressivos:** A função `animateCounter` calcula de forma suave (`eased`) o crescimento numérico de estatísticas relevantes baseando-se no atributo `data-target` contido no HTML.



---

## 🧑‍💻 Créditos e Fontes

* **Desenvolvedor:** Jean


* **Fontes de Dados Utilizadas:**
* FAO (Organização das Nações Unidas para Alimentação)


* EMBRAPA


* Ministério da Agricultura


* Programa Mundial de Alimentos (WFP)


* IBGE (Censo Agropecuário)
