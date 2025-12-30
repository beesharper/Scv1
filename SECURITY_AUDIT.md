# Security Audit Report

**Date:** 2025-02-12
**Target:** `sharp-and-crafty` (Frontend React Application)
**Auditor:** Jules (AI Software Engineer)

## 1. Executive Summary

This security audit focused on the client-side security, dependency health, and configuration of the `sharp-and-crafty` React application.

**Overall Security Posture:** **Moderate**

The application follows general React best practices (no dangerous DOM manipulation, correct link security). However, there are significant findings related to **dependency vulnerabilities** and **missing security headers (CSP)**. The development server configuration is also overly permissive, which is a risk if the dev mode is exposed.

## 2. Dependency Analysis

### 2.1 Deprecated/Unmaintained Packages
*   **Package:** `react-helmet` (^6.1.0)
*   **Issue:** This package is deprecated and no longer maintained. It uses `UNSAFE_componentWillMount` which is unsafe in React 18+ strict mode and may cause issues in future React versions.
*   **Remediation:** Migrate to `react-helmet-async`.

### 2.2 Outdated Major Versions (Accepted Risks)
*   **Vite:** Currently `^4.4.5`. The latest stable is v6.
    *   **Status:** **Accepted Risk**
    *   **Context:** The known `esbuild` vulnerability in this version is limited to the development server environment and poses no threat to the production build. The complexity/risk of a major version upgrade is not justified for this static site.
*   **Framer Motion:** Currently `^10.16.4`. v11 is available.
    *   **Status:** **Accepted Risk**
    *   **Context:** Version 10 is secure and stable. Upgrading to v11 offers minor performance benefits but carries a risk of visual regressions for complex animations. To maintain usability stability, remaining on v10 is the preferred choice.

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
*   **Status:** **Missing (Low Risk)**
*   **Findings:**
    *   The `index.html` file does not define a Content Security Policy (CSP).
*   **Context:**
    *   **`unsafe-inline` is required:** The application uses `framer-motion` extensively for animations and includes dynamic inline styles (e.g., in `HowItWorks.jsx`). These libraries rely on inline styles to function.
    *   **Dev Mode:** Vite's development server requires inline scripts for Hot Module Replacement (HMR).
*   **Recommendation:** Add a CSP that **explicitly allows** `unsafe-inline`. For a small business website with no backend authentication handling, this strikes the right balance between functionality and security.
    *   **Why is this still needed?** Even with `unsafe-inline`, a CSP prevents attackers from loading malicious scripts from **external/unauthorized domains** (e.g., `evil.com/hack.js`) and restricts where your forms can send data (preventing data exfiltration).
    ```html
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://formspree.io; connect-src 'self' https://formspree.io;">
    ```

### 4.2 Vite Configuration (`vite.config.js`)
*   **Status:** **Info / Accepted Risk**
*   **Findings:**
    *   `server: { allowedHosts: true }`: This disables host header checking.
    *   **Context:** This setting is required for the cloud-based testing environment (Jules VM) to allow access to the development server from external URLs.
    *   **Impact:** While typically a risk (DNS rebinding) on open local networks, it is a known and accepted configuration for this specific environment.
    *   **Recommendation:** If the project is ever moved to a standard local development setup or deployed to production, this setting should be removed or tightened.

## 5. Summary of Recommendations

1.  **High Priority:** Add a **Content Security Policy (CSP)** to `index.html`.
2.  **Medium Priority:** Replace `react-helmet` with `react-helmet-async`.
3.  **Medium Priority:** Remove `allowedHosts: true` from `vite.config.js` unless explicitly required for your dev setup (e.g., tunneling).
4.  **Low Priority:** Enable CAPTCHA on your Formspree account if spam submissions increase.

---
*End of Report*
