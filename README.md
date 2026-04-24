# Página Pessoal – Lucca Guedes Batistela

GAC116 – Programação Web · UFLA · 2026/1 · Atividade Prática 2

## Links

| Versão       | Link                                                 |
| ------------ | ---------------------------------------------------- |
| Bootstrap    | https://tmura-lu.github.io/pagina-pessoal/bootstrap/ |
| Tailwind CSS | https://tmura-lu.github.io/pagina-pessoal/tailwind/  |

## Estrutura

```
pagina-pessoal/
├── bootstrap/
│   ├── index.html
│   └── assets/css/  js/
├── tailwind/
│   ├── index.html
│   └── assets/css/  js/
└── README.md
```

## Bootstrap vs Tailwind

**Bootstrap** trabalha com componentes prontos — `btn`, `card`, `navbar` já entregam um visual funcional sem esforço. O modo escuro é gerenciado pelo atributo `data-bs-theme` na tag `<html>`, então a troca de tema não exige escrever nada extra no HTML.

**Tailwind** usa classes utilitárias atômicas — cada elemento é construído combinando `flex`, `p-4`, `rounded-xl` e afins diretamente no HTML. O modo escuro exige o prefixo `dark:` em cada classe afetada, o que dá mais controle mas deixa o HTML bem mais verboso.

## O que gostei

No Bootstrap, a velocidade para montar componentes responsivos foi a maior vantagem. Navbar com collapse mobile, cards de altura igual e grid responsivo funcionaram com poucas classes.

No Tailwind, gostei do controle total sobre o visual e da legibilidade dos breakpoints (`md:grid-cols-2 lg:grid-cols-3` é mais direto do que as classes de coluna do Bootstrap). O `styles.css` ficou bem menor, já que quase tudo fica no próprio HTML.

## O que não gostei

No Bootstrap, sobrescrever a cor primária exigiu reescrever variáveis CSS e várias classes manualmente, com uso de `!important`. O resultado visual também carrega a "aparência de Bootstrap" que é difícil de disfarçar sem muito CSS extra.

No Tailwind, a falta de componentes prontos aparece na navbar mobile — o que o Bootstrap resolve com dois atributos `data-bs-*`, no Tailwind exigiria JS adicional. A verbosidade das classes em elementos repetidos como cards também incomoda.
