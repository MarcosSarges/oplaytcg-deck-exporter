const textarea = document.getElementById("decklist");
const status = document.getElementById("status");
const copyButton = document.getElementById("copy");

function extractDeck() {
  const piles = document.querySelectorAll(
    '[data-deck-pile][role="group"][aria-label]'
  );

  const cards = [];
  let leader = null;

  for (const pile of piles) {
    const label = pile.getAttribute("aria-label") || "";
    const img = pile.querySelector("img[src]");

    if (!img) continue;

    const match = img.src.match(
      /\/([A-Z]{1,5}\d{0,3}-\d{3})(?:_[A-Za-z0-9]+)?\.webp/i
    );

    if (!match) continue;

    const code = match[1].toUpperCase();

    const quantityMatch = label.match(/[×x]\s*(\d+)/i);
    const quantity = quantityMatch
      ? Number(quantityMatch[1])
      : 1;

    const name = label
      .replace(/\s*[×x]\s*\d+/i, "")
      .trim();

    const isLeader = Boolean(
      pile.closest(".group\\/lead")
    );

    const card = {
      code,
      name,
      quantity
    };

    if (isLeader) {
      leader = card;
    } else {
      cards.push(card);
    }
  }

  const lines = [];

  if (leader) {
    lines.push(
      `1x ${leader.code} ${leader.name} (Leader)`
    );
    lines.push("");
  }

  for (const card of cards) {
    lines.push(
      `${card.quantity}x ${card.code} ${card.name}`
    );
  }

  return {
    text: lines.join("\n"),
    total: cards.reduce(
      (sum, card) => sum + card.quantity,
      0
    )
  };
}

function isDeckBuilderUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    return host === "oplaytcg.com" && parsed.pathname.includes("/deck-builder");
  } catch {
    return false;
  }
}

async function loadDeck() {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    if (!tab?.id) {
      status.textContent = "Não foi possível ler a aba atual.";
      return;
    }

    if (tab.url && !isDeckBuilderUrl(tab.url)) {
      status.textContent =
        "Abra o Deck Builder do OPlayTCG nesta aba. A URL precisa conter /deck-builder.";
      return;
    }

    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: extractDeck
    });

    const deck = results[0]?.result;

    if (!deck?.text) {
      status.textContent =
        "Nenhuma carta encontrada na página.";
      return;
    }

    textarea.value = deck.text;
    status.textContent =
      `${deck.total}/50 cartas encontradas`;
  } catch (error) {
    status.textContent = `Erro: ${error.message}`;
  }
}

copyButton.addEventListener("click", async () => {
  if (!textarea.value) return;

  try {
    await navigator.clipboard.writeText(textarea.value);
    status.textContent = "Decklist copiada!";
  } catch {
    textarea.select();
    status.textContent =
      "Selecione e copie o texto manualmente.";
  }
});

loadDeck();
