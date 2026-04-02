"use client"

import { DocsShell } from "@/components/api-docs/docs-shell"
import { useState } from "react"

export default function GetAllWhatsAppSessionsPage() {
  const endpoint = "/api/sessions"
  const [copied, setCopied] = useState(false)
  const languages = [
    "Bash",
    "Python",
    "JavaScript",
    "PHP",
    "Ruby",
    "Go",
    "CSharp",
    "Java",
    "Swift",
    "PowerShell",
    "TypeScript",
    "Rust",
  ] as const
  type Language = (typeof languages)[number]
  const [activeLanguage, setActiveLanguage] = useState<Language>("Bash")
  const codeExamples: Record<Language, string> = {
    Bash: String.raw`curl --request GET \
     --url https://hub0001.gowapi.dev/api/sessions \
     --header 'X-Api-Key: session-api-key-here' \
     --header 'accept: application/json'`,
    Python: `import requests

url = "https://hub0001.gowapi.dev/api/sessions"
headers = {
    "X-Api-Key": "session-api-key-here",
    "accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`,
    JavaScript: `const url = "https://hub0001.gowapi.dev/api/sessions";

const response = await fetch(url, {
  method: "GET",
  headers: {
    "X-Api-Key": "session-api-key-here",
    "accept": "application/json",
  },
});

const data = await response.json();
console.log(data);`,
    PHP: `<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://hub0001.gowapi.dev/api/sessions",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    "X-Api-Key: session-api-key-here",
    "accept: application/json"
  ],
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;`,
    Ruby: `require "net/http"
require "uri"

uri = URI.parse("https://hub0001.gowapi.dev/api/sessions")
request = Net::HTTP::Get.new(uri)
request["X-Api-Key"] = "session-api-key-here"
request["accept"] = "application/json"

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.body`,
    Go: `package main

import (
  "fmt"
  "io"
  "net/http"
)

func main() {
  req, _ := http.NewRequest("GET", "https://hub0001.gowapi.dev/api/sessions", nil)
  req.Header.Set("X-Api-Key", "session-api-key-here")
  req.Header.Set("accept", "application/json")

  res, _ := http.DefaultClient.Do(req)
  defer res.Body.Close()

  body, _ := io.ReadAll(res.Body)
  fmt.Println(string(body))
}`,
    CSharp: `using System.Net.Http;

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Get, "https://hub0001.gowapi.dev/api/sessions");
request.Headers.Add("X-Api-Key", "session-api-key-here");
request.Headers.Add("accept", "application/json");

var response = await client.SendAsync(request);
var body = await response.Content.ReadAsStringAsync();
Console.WriteLine(body);`,
    Java: `HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://hub0001.gowapi.dev/api/sessions"))
    .header("X-Api-Key", "session-api-key-here")
    .header("accept", "application/json")
    .GET()
    .build();

HttpResponse<String> response = HttpClient.newHttpClient()
    .send(request, HttpResponse.BodyHandlers.ofString());

System.out.println(response.body());`,
    Swift: `import Foundation

var request = URLRequest(url: URL(string: "https://hub0001.gowapi.dev/api/sessions")!)
request.httpMethod = "GET"
request.setValue("session-api-key-here", forHTTPHeaderField: "X-Api-Key")
request.setValue("application/json", forHTTPHeaderField: "accept")

URLSession.shared.dataTask(with: request) { data, _, error in
    guard let data = data, error == nil else { return }
    print(String(data: data, encoding: .utf8) ?? "")
}.resume()`,
    PowerShell: `$headers = @{
  "X-Api-Key" = "session-api-key-here"
  "accept" = "application/json"
}

$response = Invoke-RestMethod -Uri "https://hub0001.gowapi.dev/api/sessions" -Method GET -Headers $headers
$response | ConvertTo-Json -Depth 10`,
    TypeScript: `const response = await fetch("https://hub0001.gowapi.dev/api/sessions", {
  method: "GET",
  headers: {
    "X-Api-Key": "session-api-key-here",
    "accept": "application/json",
  },
});

const data = await response.json();
console.log(data);`,
    Rust: `use reqwest::header::{HeaderMap, HeaderValue, ACCEPT};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut headers = HeaderMap::new();
    headers.insert("X-Api-Key", HeaderValue::from_static("session-api-key-here"));
    headers.insert(ACCEPT, HeaderValue::from_static("application/json"));

    let client = reqwest::Client::new();
    let response = client
        .get("https://hub0001.gowapi.dev/api/sessions")
        .headers(headers)
        .send()
        .await?;

    let body = response.text().await?;
    println!("{}", body);
    Ok(())
}`,
  }

  const handleCopyEndpoint = async () => {
    try {
      await navigator.clipboard.writeText(endpoint)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <DocsShell>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-1">Get All WhatsApp Sessions</h2>
        <p className="text-sm text-[#a3a3a3] mb-6">Sessions</p>

        <div className="p-6 border border-[#262626] rounded-xl bg-[#111111]">
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-mono font-semibold rounded border bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                GET
              </span>
              <code className="text-sm text-[#a3a3a3] font-mono">{endpoint}</code>
            </div>
            <button
              type="button"
              onClick={handleCopyEndpoint}
              className="px-3 py-1.5 text-xs text-[#d4d4d4] border border-[#2f2f2f] rounded-md bg-[#171717] hover:bg-[#1f1f1f] transition-colors"
            >
              {copied ? "Copied!" : "Copy endpoint"}
            </button>
          </div>

          <p className="text-[#a3a3a3] mb-6 leading-relaxed">
            Retrieves a list of all WhatsApp sessions available to the authenticated user.
          </p>

          <h3 className="text-4xl font-bold text-white mb-6 pb-4 border-b border-[#262626]">
            Get All WhatsApp Sessions
          </h3>

          <p className="text-[#a3a3a3] mb-4 leading-relaxed">
            Retrieves a list of all WhatsApp sessions available to the authenticated user.
          </p>

          <div className="mb-8 p-4 border-l-2 border-amber-500 rounded-lg bg-[#1a1a1a] text-[#d4d4d4] text-sm">
            This endpoint requires an API key in the <code className="text-emerald-400">X-Api-Key</code> header.
            You can get your API key{" "}
            <a href="/authentication#api-tokens" className="text-emerald-400 hover:text-emerald-300 underline">
              here
            </a>.
          </div>

          <h4 className="text-2xl font-semibold text-white mb-3">Code Examples</h4>
          <div className="mb-3 flex items-center gap-2 flex-wrap">
            {languages.map((language) => {
              const isActive = activeLanguage === language
              return (
                <button
                  key={language}
                  type="button"
                  onClick={() => setActiveLanguage(language)}
                  className={
                    isActive
                      ? "inline-flex items-center px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-sm font-medium border border-emerald-500/40"
                      : "inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626] hover:text-white hover:border-[#404040] transition-colors"
                  }
                  aria-pressed={isActive}
                >
                  {language}
                </button>
              )
            })}
          </div>

          <pre className="mb-8 p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] overflow-x-auto text-sm text-[#d4d4d4]">
{codeExamples[activeLanguage]}
          </pre>

          <h4 className="text-2xl font-semibold text-white mb-3">Response Examples</h4>
          <div className="mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-emerald-500 text-white text-sm font-medium">Success Response</span>
          </div>

          <pre className="p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] overflow-x-auto text-sm text-[#d4d4d4]">
{`{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Business WhatsApp",
      "status": "connected",
      "record_qrcode": true,
      "log_message": null,
      "webhook_url": "https://example.com/webhook",
      "webhook_events": [
        "messages.upsert",
        "chats.update"
      ],
      "created_at": "2025-04-11T12:30:00Z",
      "updated_at": "2025-04-15T09:15:00Z"
    },
    {
      "id": 2,
      "name": "Support WhatsApp",
      "status": "not_connected",
      "record_qrcode": false,
      "log_message": null,
      "webhook_url": null,
      "webhook_events": [],
      "created_at": "2025-04-13T09:45:00Z",
      "updated_at": "2025-04-17T13:20:00Z"
    }
  ]
}`}
          </pre>
        </div>
      </section>
    </DocsShell>
  )
}
