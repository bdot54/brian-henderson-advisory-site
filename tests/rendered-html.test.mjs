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
  assert.match(html, /Increase owner contribution potential/);
  assert.match(html, /Give leadership time back/);
  assert.match(html, /Strengthen compliance and audit readiness/);
  assert.match(html, /A great advisor is:/);
  assert.match(html, /Third-party administrator \(TPA\)/);
  assert.match(html, /brian-client-meeting\.png/);
  assert.match(html, /Read more \(3 min read\)/);
});

const articles = [
  ["/insights/fees", "Why fees deserve more attention"],
  ["/insights/plan-sponsor-review", "What plan sponsors should review"],
  ["/insights/when-complexity-stops-helping", "When complexity stops helping"],
];

for (const [pathname, title] of articles) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(title));
    assert.match(html, /3 min read/);
    assert.match(html, /The practical takeaway/);
  });
}
