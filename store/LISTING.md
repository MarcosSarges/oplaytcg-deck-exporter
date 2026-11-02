# Textos prontos para a Chrome Web Store

Pacote para upload: `store/oplaytcg-deck-exporter-1.0.2.zip`

Ícone da loja (128×128): `store/icon-128.png`  
Screenshot (1280×800): `store/screenshot-1280x800.png`  
Política (arquivo local): `store/politica-de-privacidade.html`  
→ precisa de uma **URL pública** (veja o guia de publicação).

---

## Store listing

**Nome**
```
OPlayTCG Deck Exporter
```

**Resumo** (até 132 caracteres — já está no manifest)
```
Copia a decklist do Deck Builder do OPlayTCG em texto, com códigos e quantidades.
```

**Descrição detalhada**
```
Extensão não oficial para o Deck Builder do OPlayTCG.

Com o deck aberto em oplaytcg.com, clique no ícone da extensão para ler as cartas da página e montar uma decklist em texto, pronta para copiar.

O que ela faz
• Lê as pilhas de cartas visíveis no Deck Builder
• Extrai código, nome e quantidade
• Separa o Leader do restante do deck
• Mostra o total de cartas e permite copiar a lista

O que ela não faz
• Não acessa sua conta
• Não usa a API do site
• Não envia dados para nenhum servidor
• Não precisa de login

Como usar
1. Abra seu deck em oplaytcg.com (página do Deck Builder)
2. Clique no ícone da extensão
3. Confira a lista e use “Copiar decklist”

Ferramenta feita pela comunidade. Não afiliada ao OPlayTCG nem à Bandai.
```

**Categoria**
```
Ferramentas
```
(ou `Productivity` / Tools, conforme o idioma do painel)

**Idioma**
```
Português (Brasil)
```

**Site / suporte** (opcional)
```
https://oplaytcg.com
```

---

## Privacy practices

**Single purpose**
```
Ler a decklist visível no Deck Builder do OPlayTCG e gerar um texto copiável com códigos, nomes e quantidades.
```

**Justificativa — activeTab**
```
Necessária para acessar a aba ativa somente quando o usuário clica no ícone da extensão, e apenas se a página for o Deck Builder do OPlayTCG.
```

**Justificativa — scripting**
```
Necessária para executar o extrator no HTML da página aberta e obter as cartas do deck (elementos data-deck-pile, aria-label e URL das imagens).
```

**Remote code**
```
No, I am not using remote code.
```

**Dados coletados**
```
Nenhum. Não marcar nenhuma categoria de dados do usuário.
```
(A extensão só lê o DOM localmente no popup; não transmite nada.)

**Certificações**
Marque as declarações de uso limitado conforme o painel pedir (não vende dados, não usa para crédito/empréstimo, etc.).

**Privacy policy URL**
Cole a URL pública da política depois de hospedá-la.

---

## Distribution

- Visibilidade: **Public**
- Preço: **Free**
- Países: todos (ou só Brasil, se preferir)

## Test instructions

```
1. Instale a extensão.
2. Abra https://oplaytcg.com/pt/deck-builder (ou /en/deck-builder).
3. Monte um deck com Leader e algumas cartas.
4. Clique no ícone da extensão.
5. Confirme que a decklist aparece com códigos e quantidades.
6. Clique em “Copiar decklist” e cole em um editor de texto.
```
