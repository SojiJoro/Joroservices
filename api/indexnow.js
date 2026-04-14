/**
 * IndexNow submission endpoint.
 * POST a JSON body { urls: ["/path1", "/path2"] } and it forwards
 * the list to IndexNow so Bing, Yandex, and Seznam pick up changes
 * immediately.
 *
 * Trigger this from a CI step after deploy, or manually when a
 * high-priority page changes:
 *
 *   curl -X POST https://joroservices.org/api/indexnow \
 *     -H "content-type: application/json" \
 *     -d '{"urls":["/insights/new-post-slug"]}'
 */

const HOST = 'joroservices.org';
const KEY = 'e82edf45021c35dc4e2087412c866b81';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
  const paths = Array.isArray(body.urls) ? body.urls : [];

  if (paths.length === 0) {
    return res.status(400).json({ error: 'Provide { urls: [paths] }' });
  }

  const urlList = paths.map((p) =>
    p.startsWith('http') ? p : `https://${HOST}${p.startsWith('/') ? p : '/' + p}`
  );

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList,
      }),
    });

    const text = await response.text();
    return res.status(response.status).json({
      ok: response.ok,
      status: response.status,
      submitted: urlList.length,
      body: text,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
