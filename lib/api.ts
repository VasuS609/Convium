type FetcherArgs = {
  url: string
  method: string
  body?: unknown
  json?: boolean
}

// Simple helper for JSON fetch with optional body
const fetcher = async ({ url, method, body, json = true }: FetcherArgs) => {
  const res = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })

  if (!res.ok) {
    throw new Error("API Error")
  }

  if (json) {
    const data = await res.json()
    return data.data
  }
}

export const register = async (user: unknown) => {
  return fetcher({
    url: "/api/register",
    method: "POST",
    body: user,
  })
}

export const signin = async (user: unknown) => {
  return fetcher({
    url: "/api/signin",
    method: "POST",
    body: user,
  })
}