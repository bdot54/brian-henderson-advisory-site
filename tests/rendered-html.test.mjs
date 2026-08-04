import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the advisory homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Brian Henderson, PhD, CFA \| 401\(k\) Financial Advisor<\/title>/i);
  assert.match(html, /Schedule the free review/);
  assert.match(html, /401\(k\)\/403\(b\) Advisory for Plan Sponsors/);
  assert.match(html, /Increase owner contribution potential/);
  assert.match(html, /Give leadership time back/);
  assert.match(html, /Strengthen compliance and audit readiness/);
  assert.match(html, /A great advisor is:/);
  assert.match(html, /Third-party administrator \(TPA\)/);
  assert.match(html, /401\(k\)\/403\(b\) Recordkeeper/);
  assert.match(html, /brian-client-meeting\.png/);
  assert.match(html, /Read more \(3 min read\)/);
  assert.match(html, /Personal Wealth Management/);
  assert.match(html, /brian-henderson-mark-navy\.png/);
  assert.match(html, /PhD, CFA · Wealth Manager/);
  assert.match(html, /A no-risk first step/);
  assert.match(html, /bjhndrsn@gmail\.com/);
  assert.match(html, /linkedin\.com\/in\/brian-henderson-63647950/);
  assert.match(html, /Distinguished Professor of Finance/);
  assert.match(html, /Market Expert/);
  assert.match(html, /Investment strategy &amp; market analysis/);
  assert.match(html, /I help plan sponsors uncover hidden costs and overlooked risks/);
  assert.match(html, /objective benchmarking/);
  assert.match(html, /hands-on support from an expert/);
  assert.match(html, /You leave knowing\.\.\./);
  assert.match(html, /Get a custom presentation outlining/);
  assert.match(html, /Schedule your free review/);
  assert.match(html, /multiple perspectives that rarely sit in one room/);
  assert.doesNotMatch(html, /Claim your free review/);
  assert.doesNotMatch(html, /BH \/ 01/);
  assert.doesNotMatch(html, /—/);
});

test("server-renders the personal wealth page", async () => {
  const response = await render("/wealth");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /A clearer path to the future you’ve worked for/);
  assert.match(html, /I’ve saved for years, but I still worry I may not have enough/);
  assert.match(html, /not leaving anything on the table/);
  assert.match(html, /Invest intelligently/);
  assert.match(html, /decades of financial expertise and involved, one-on-one service/);
  assert.match(html, /passionate, well-known financial expert/);
  assert.match(html, /How Brian creates clarity/);
  assert.match(html, /brian-henderson-mark-reversed\.png/);
  assert.match(html, /Start with your goals/);
  assert.match(html, /I help individuals and families build a clear path to retirement/);
  assert.match(html, /hands-on, one-on-one support/);
  assert.doesNotMatch(html, /I help plan sponsors uncover hidden costs/);
  assert.doesNotMatch(html, /Looking for 401\(k\) plan advisory/);
});

const articles = [
  ["/insights/fees", "Why fees deserve more attention"],
  ["/insights/plan-sponsor-review", "What plan sponsors should review"],
  ["/insights/when-complexity-stops-helping", "What kind of service should I expect from my 401(k) plan financial advisor?"],
];

for (const [pathname, title] of articles) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(title));
    assert.match(html, /3 min read/);
    assert.match(html, /The practical takeaway/);
  });
}
