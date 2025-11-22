// src/common/fetch-handler.tsx

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchHandlerProps {
  method?: HttpMethod;
  endpoint: string;
  body?: any;
  headers?: Record<string, string>;
}

export async function fetchHandler<T = any>({
  method = "GET",
  endpoint,
  body,
  headers = {},
}: FetchHandlerProps): Promise<T> {
  
  const url = `${BASE_URL}${endpoint}`;

  const token = localStorage.getItem("accessToken");

  const options: RequestInit = {    
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Backend Error: ${response.status} - ${errorText}`);
    }

    // Attempt to parse JSON
    return (await response.json()) as T;

  } catch (error) {
    console.error("Fetch Handler Error:", error);
    throw error;
  }
}
