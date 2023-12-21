# Introduction NEXT.JS
**What is NEXT.JS?**
- The React Framework for the Web
Used by some of the world's largest companies, Next.js enables you to create **full-stack Web applications** by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.

**Features of NEXT.JS**
- Server-side rendering
- Simple routing
- Static side generation
- Optimized performance
- Hot code reloading
- API routes

## Advantages of NEXT.JS

- Search engine optimization
- production ready
- Image optimization
- Data fetching methods
- 700x faster
- API routes
- TypeScript support

## NEXT.JS Installation:
```
npx create-next-app@latest  /OR
npm create-next-app myApp

//Telemetry
npx next telemetry disable
npx next telemetry status
npx next telemetry enable
```

**next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
```
**Loading:**
```javascript
//Loading.jsx    default use when loading
import React from "react";

const loading = () => {
  return <div>Loading....</div>;
};

export default loading;
```

## File convention & Reserved files

### loading.js/jsx:

A **loading** file can create instant loading states built on [Suspense](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming).

By default, this file is a [Server Component](https://nextjs.org/docs/app/building-your-application/rendering/server-components) - but can also be used as a Client Component through the `"use client"` directive.

**Note:** Loading UI components do not accept any parameters.

## Routing

```jsx
folder /
page.jsx
```

**Link:**

```jsx
import {} from "/next/Link"
```

**Navlink:**
```javascript
import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </>
  );
};

export default header;
```

## **Server Components:**

React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies:

- [Static Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default)
- [Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering)
- [Streaming](https://nextjs.org/docs/app/building-your-application/rendering/server-components#streaming)

This page will go through how Server Components work, when you might use them, and the different server rendering strategies.

- Fetch data
- Server side render
- Access token
- Reduce client side

# **Client Components**

Client Components allows you to write interactive UI that can be rendered on the client at request time. In Next.js, client rendering is **opt-in**, meaning you have to explicitly decide what components React should render on the client.

```jsx
'use client'
```

- Onevent
- Event handler
- React hook
