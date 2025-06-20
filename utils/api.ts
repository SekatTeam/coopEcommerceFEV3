export async function apiFetch(input: RequestInfo, init: RequestInit = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  const url = typeof input === 'string' && !input.startsWith('http') ? `${baseUrl}${input}` : input;
  const headers = {
    ...(init.headers || {}),
    'ClientSecrete': 'demo_db',
  };
  return fetch(url, { ...init, headers });
}
