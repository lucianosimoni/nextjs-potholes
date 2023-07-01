"use client";

export function getHostname() {
  const hostname = window.location.hostname;
  if (hostname.startsWith("localhost")) {
    return "http://localhost:3000";
  }
  return "https://potholes-server.onrender.com";
}
