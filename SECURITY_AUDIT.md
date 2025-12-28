# Security Audit Report

**Date:** 2025-02-12
**Target:** `sharp-and-crafty` (Frontend React Application)
**Auditor:** Jules (AI Software Engineer)

## 1. Executive Summary

This security audit focused on the client-side security, dependency health, and configuration of the `sharp-and-crafty` React application.

**Overall Security Posture:** **Moderate**

The application follows general React best practices (no dangerous DOM manipulation, correct link security). However, there are significant findings related to **dependency vulnerabilities** and **missing security headers (CSP)**. The development server configuration is also overly permissive, which is a risk if the dev mode is exposed.

## 2. Dependency Analysis

### 2.1 Known Vulnerabilities (`npm audit`)
*   **Severity:** **Moderate**
*   **Packages:** `esbuild` (via `vite`)
*   **Issue:** `esbuild` <= 0.24.2 allows requests to the development server to read the response (GHSA-67mh-4wv8-2f99).
*   **Impact:** If the development server is exposed to a network, an attacker could potentially access source code or other assets.
*   **Remediation:** Update `vite` to the latest version. Note that updating to Vite 6+ might require migration steps.

### 2.2 Deprecated/Unmaintained Packages
*   **Package:** `react-helmet` (^6.1.0)
*   **Issue:** This package is deprecated and no longer maintained. It uses `UNSAFE_componentWillMount` which is unsafe in React 18+ strict mode and may cause issues in future React versions.
*   **Remediation:** Migrate to `react-helmet-async`.

### 2.3 Outdated Major Versions
*   **Vite:** Currently `^4.4.5`. The latest stable is v6. Updating is recommended for performance and security fixes.
*   **Framer Motion:** Currently `^10.16.4`. v11 is available.

## 3. Codebase Security Findings

### 3.1 Secrets & Sensitive Data
*   **Status:** **Pass**
*   **Findings:**
    *   No hardcoded high-risk secrets (AWS keys, database passwords) were found.
    *   **Note:** The Formspree form endpoint (`https://formspree.io/f/mdkpzrwq`) is publicly visible in `Contact.jsx`. This is standard for client-side forms but allows anyone to send submissions to your form.
*   **Recommendation:** Monitor Formspree usage limits. If spam becomes an issue, enable CAPTCHA in the Formspree dashboard.

### 3.2 Cross-Site Scripting (XSS)
*   **Status:** **Pass**
*   **Findings:**
    *   No usage of `dangerouslySetInnerHTML` was found.
    *   User input in `Contact.jsx` is handled via standard React state and submitted as JSON, mitigating injection risks.

### 3.3 Link Security
*   **Status:** **Pass**
*   **Findings:**
    *   External links in `Footer.jsx` (Instagram, Facebook) correctly use `rel="noopener noreferrer"` alongside `target="_blank"`. This prevents `tabnabbing` attacks.

### 3.4 Debugging Artifacts
*   **Status:** **Pass**
*   **Findings:**
    *   No active `console.log` or `debugger` statements were found in the source code.

## 4. Configuration Review

### 4.1 Content Security Policy (CSP)
*   **Status:** **Fail**
*   **Findings:**
    *   The `index.html` file does not define a Content Security Policy (CSP).
*   **Impact:** The application is more vulnerable to XSS and data injection attacks because the browser has no instructions on which scripts or resources are allowed to load.
*   **Recommendation:** Add a `<meta http-equiv="Content-Security-Policy" ...>` tag to `index.html`. A strict CSP would look like:
    ```html
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://formspree.io; connect-src 'self' https://formspree.io;">
    ```
    *(Note: 'unsafe-inline' is often needed for styled-components or fast development, but should be removed if possible in strict environments.)*

### 4.2 Vite Configuration (`vite.config.js`)
*   **Status:** **Warning**
*   **Findings:**
    *   `server: { allowedHosts: true }`: This disables host header checking.
    *   **Impact:** This exposes the dev server to DNS rebinding attacks if running on a local network.
    *   **Recommendation:** Remove `allowedHosts: true` or specify the exact hosts allowed (e.g., `localhost`, `your-domain.com`).

## 5. Summary of Recommendations

1.  **High Priority:** Run `npm update` and specifically upgrade `vite` to address the `esbuild` vulnerability.
2.  **High Priority:** Add a **Content Security Policy (CSP)** to `index.html`.
3.  **Medium Priority:** Replace `react-helmet` with `react-helmet-async`.
4.  **Medium Priority:** Remove `allowedHosts: true` from `vite.config.js` unless explicitly required for your dev setup (e.g., tunneling).
5.  **Low Priority:** Enable CAPTCHA on your Formspree account if spam submissions increase.

---
*End of Report*
