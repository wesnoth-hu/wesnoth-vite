# Architektúra

**Projekt:** Magyar Wesnoth Közösségi Portál  
**Verzió:** 1.0  
**Utolsó frissítés:** [DÁTUM]  
**Státusz:** Tervezési fázis

---

## 1. Áttekintés

A Magyar Wesnoth Közösségi Portál egy nyílt forráskódú, közösségi webalkalmazás a Battle for Wesnoth magyar játékosközössége számára. A Portál célja, hogy egy barátságos, befogadó és biztonságos platformot biztosítson a közösség számára, ahol a tagok megoszthatják tartalmaikat, beszélgethetnek, és együtt élvezhetik a játékot.

**Fő jellemzők:**

- Felhasználói regisztráció és bejelentkezés (Firebase Authentication)
- Tartalomkezelés (cikkek, hozzászólások, média)
- Közösségi funkciók (kommentek, válaszok, értesítések)
- Moderáció (flag, approve, gold rendszer)
- Admin felület (CASL-alapú jogosultságkezelés)
- GDPR-megfelelés (Adatvédelmi Nyilatkozat, ÁSZF, Közösségi Irányelvek)
- Hírlevél és emlékeztető e-mailek (Brevo)

---

## 2. Tech Stack

| Réteg             | Technológia                    | Szerep                                            |
| ----------------- | ------------------------------ | ------------------------------------------------- |
| **Build**         | Vite                           | Fejlesztői szerver, SPA bundling                  |
| **UI**            | React + TypeScript             | Komponenslogika, típusbiztonság                   |
| **Auth**          | Firebase Authentication        | Google Sign-In, Email/Password                    |
| **Adatbázis**     | Firebase Firestore             | Felhasználói adatok, tartalom                     |
| **State**         | Zustand                        | Kliensoldali globális state                       |
| **Validáció**     | Zod                            | Form sémák, runtime validáció                     |
| **Adatlekérés**   | React Query                    | Kliensoldali adatlekérés, cache                   |
| **Jogosultság**   | CASL.js                        | Szerepkör-alapú hozzáférés-vezérlés               |
| **Ikonok**        | MDI Icons + Social Media Icons | UI ikonok                                         |
| **E-mail**        | Brevo                          | Tranzakciós és marketing e-mailek                 |
| **Keresés**       | [TBD]                          | Full-text keresés (Meilisearch/Typesense/Algolia) |
| **Média hosting** | [TBD]                          | Képek, videók, audió, fájlok                      |

**Megjegyzés:** A [TBD] jelölések a `docs/open-questions.md`-ben szereplő nyitott kérdések, amelyeket a fejlesztési fázisban kell eldönteni.

---

## 3. Architektúra áttekintés

A Portál egy **Single Page Application (SPA)**, amely a böngészőben fut, és a Firebase szolgáltatásait használja backendként. Nincs saját szerveroldali kód (kivéve a Firebase Cloud Function-öket, amelyek a biztonságérzékeny műveletekért felelősek).

**Rétegek:**
┌─────────────────────────────────────────────────────────────┐
│ Browser (SPA) │
│ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│ │ Pages │ │ Features │ │ Shared │ │
│ │ (routes) │ │ (modules) │ │ (UI, hooks, lib) │ │
│ └──────┬──────┘ └──────┬──────┘ └──────────┬──────────┘ │
│ │ │ │ │
│ └───────────────┼───────────────────┘ │
│ │ │
│ ┌──────▼──────┐ │
│ │ Stores │ (Zustand) │
│ └──────┬──────┘ │
│ │ │
│ ┌──────▼──────┐ │
│ │ Services │ (Firebase wrapper) │
│ └──────┬──────┘ │
└──────────────────────────┼──────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────┐
│ Firebase (Backend) │
│ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│ │ Auth │ │ Firestore │ │ Cloud Functions │ │
│ └─────────────┘ └─────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────┐
│ Külső szolgáltatások │
│ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│ │ Brevo │ │ Search │ │ Media Hosting │ │
│ │ (e-mail) │ │ (TBD) │ │ (Cloudinary/R2) │ │
│ └─────────────┘ └─────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

text

---

## 4. Rétegek részletesen

### 4.1. Pages (`src/pages/`)

A **page** komponensek a route-okhoz tartoznak. Feladatuk:

- Összekötik a hookokat és a feature komponenseket
- Kezelik a loading / error állapotokat
- Megjelenítik az adatokat

A page **nem tartalmaz üzleti logikát** és **nem hív közvetlenül Firestore-t**. Csak a hookokat használja.

**Példa:** `ArticleListPage.tsx` meghívja a `useArticles()` hookot, és rendereli az `ArticleCard` komponenseket.

### 4.2. Features (`src/features/`)

A **feature** modulok a funkcionális egységek. Minden feature egységesen:

- `components/` – bemutató komponensek (presentational)
- `hooks/` – adatlekérés és state kezelés
- `schemas/` – Zod sémák
- `services/` – adatlekérés (Firestore wrapper)
- `types.ts` – feature-specifikus típusok

**Feature-ök:**

- `auth/` – bejelentkezés, regisztráció, jelszókezelés
- `content/` – cikkek, kommentek, média, kategóriák
- `moderation/` – flag, approve, reject
- `gold/` – gold rendszer, tranzakciók
- `notifications/` – in-app és e-mail értesítések
- `profile/` – felhasználói profil
- `search/` – keresés
- `authorization/` – CASL ability-k

### 4.3. Shared (`src/shared/`)

A **shared** mappa az újrahasznosítható, feature-független elemeket tartalmazza:

- `components/ui/` – alap UI elemek (Button, Input, Dialog, stb.)
- `components/layout/` – layout komponensek (Header, Footer, Sidebar)
- `components/feedback/` – visszajelző komponensek (Toast, ErrorBoundary)
- `hooks/` – általános hookok (useDebounce, usePagination)
- `lib/` – Firebase init, query client, utils
- `services/` – globális service-ek (opcionális)
- `types/` – globális típusok

### 4.4. Stores (`src/stores/`)

A **Zustand store-ok** a globális state-et kezelik:

- `authStore.ts` – felhasználó, szerepkör, CASL ability
- `uiStore.ts` – theme, sidebar, modal state
- `notificationStore.ts` – unread count, notifications

**Megjegyzés:** React Context-et csak akkor használunk, ha prop drilling lép fel. A Zustand az elsődleges state management.

### 4.5. Config (`src/config/`)

A **config** mappa a statikus konfigurációkat tartalmazza:

- `site.ts` – SITE_CONFIG (név, URL, email, stb.)
- `routes.ts` – route konstansok
- `permissions.ts` – CASL action/subject konstansok

### 4.6. Types (`src/types/`)

A **globális típusok** mappája. Csak a több feature-t érintő típusok kerülnek ide:

- `user.ts` – User, Role, UserPreferences
- `content.ts` – Article, Comment, Media, Category
- `moderation.ts` – Flag, ModerationStatus
- `gold.ts` – GoldTransaction
- `notification.ts` – Notification
- `search.ts` – SearchResult

A feature-specifikus típusok a `features/[feature]/types.ts`-ben vannak.

---

## 5. Adatáramlás

### 5.1. Olvasási folyamat (pl. cikkek listája)

ArticleListPage.tsx
│
├── useArticles() hook
│ │
│ ├── articleService.getAll()
│ │ │
│ │ └── Firestore: collection('articles').get()
│ │
│ └── Zod validáció (articleSchema)
│
└── <ArticleCard /> komponensek renderelése

text

### 5.2. Írási folyamat (pl. új cikk létrehozása)

ArticleCreatePage.tsx
│
├── useCreateArticle() hook
│ │
│ ├── Zod validáció (articleSchema)
│ │
│ └── articleService.create(data)
│ │
│ ├── Firestore: collection('articles').add(data)
│ │
│ └── Cloud Function trigger:
│ ├── Gold hozzáadás (activity alapján)
│ └── Search index szinkronizálás
│
└── Sikeres létrehozás → redirect

text

### 5.3. Auth folyamat

SignInPage.tsx
│
├── useAuth() hook
│ │
│ ├── authService.signIn(email, password)
│ │ │
│ │ └── Firebase Auth: signInWithEmailAndPassword()
│ │
│ └── authStore.setUser(user)
│ │
│ └── CASL ability újraszámolása
│
└── Redirect a főoldalra

text

---

## 6. State Management

### 6.1. Zustand store-ok

| Store               | Mit tartalmaz                  | Ki használja                            |
| ------------------- | ------------------------------ | --------------------------------------- |
| `authStore`         | user, role, ability, isLoading | Minden feature (auth, gold, moderation) |
| `uiStore`           | theme, sidebarOpen, modalState | Layout, UI komponensek                  |
| `notificationStore` | notifications, unreadCount     | Header, notification feature            |

### 6.2. React Query

A **React Query** a szerveroldali adatok cache-eléséért és lekéréséért felel. Minden feature hook ezt használja, ahol adatot kell lekérni. A `queryClient.ts` a `shared/lib/`-ben van.

**Előnyök:**

- Automatikus cache
- Loading / error state kezelés
- Refetch, invalidate
- Optimistic updates

### 6.3. React Context

Csak akkor használunk React Context-et, ha prop drilling lép fel. A CASL ability-t is a Zustand store-ban tároljuk, nem Context-ben.

---

## 7. Jogosultságkezelés (CASL)

### 7.1. Szerepkörök

| Szerepkör   | Leírás                                                    |
| ----------- | --------------------------------------------------------- |
| `guest`     | Nem regisztrált látogató (csak olvasás)                   |
| `user`      | Regisztrált felhasználó (tartalom létrehozás, flag, gold) |
| `moderator` | Moderátor (approve, reject, flag kezelés, gold levonás)   |
| `admin`     | Admin (minden, felhasználókezelés, rendszerbeállítások)   |

### 7.2. CASL ability-k

Az ability-k a `features/authorization/abilities.ts`-ben vannak definiálva. A `<Can>` komponens és a `useAbility()` hook a `authStore`-ból olvassa az ability-t.

**Példa:**
<Can I="approve" a="Article"> <ApproveButton article={article} /> </Can> ```

### 7.3. Route guard-ok

Az admin route-ok védettek: csak admin szerepkör érheti el. A védelem a <RequireAbility> komponenssel történik, ami a authStore-ból ellenőrzi az ability-t.

## 1. Firebase használat

### 8.1. Authentication

Google Sign-In – opcionális

Email/Password – opcionális

Email verification – kötelező

Session – a böngészőben tárolódik (IndexedDB/localStorage)

### 8.2. Firestore

Régió: europe-west1 vagy europe-west3 (GDPR miatt)

Security Rules: szigorú hozzáférés-vezérlés

Kollekciók: users, articles, comments, media, flags, goldTransactions, notifications, categories

### 8.3. Cloud Functions

A biztonságérzékeny műveletek Cloud Function-ökben vannak:

Gold hozzáadás – activity alapján (nem a kliensből)

Gold levonás – moderation után

Search index szinkronizálás – Firestore trigger

Brevo szinkron – hírlevél és emlékeztetők

E-mail küldés – tranzakciós értesítések

## 2. Külső integrációk

### 9.1. Brevo (e-mail)

Tranzakciós e-mailek: regisztráció, jelszó-visszaállítás, értesítések

Marketing e-mailek: hírlevél

Integráció: Cloud Function hívja a Brevo API-t

Listák: külön lista a hírlevélnek és az emlékeztetőknek

### 9.2. Search engine (TBD)

Cél: full-text keresés

Javasolt: Meilisearch Cloud vagy Typesense Cloud

Integráció: Firestore trigger → search index szinkronizálás

### 9.3. Média hosting (TBD)

Képek/audió: Cloudinary vagy ImageKit

Videók: YouTube embed (unlisted)

Fájlok: Cloudflare R2 vagy Firebase Storage

## 3. GDPR és adatvédelem

### 10.1. Adatkezelés

Adatkezelő: [ADATKEZELŐ NEVE]

Adatfeldolgozók: Google Firebase, Brevo, [media hosting], [search engine]

Tárolási régió: EU (europe-west)

### 10.2. Felhasználói jogok

Hozzáférés, helyesbítés, törlés, korlátozás, adathordozhatóság, tiltakozás

Fióktörlés: Firebase Auth + Firestore + Brevo + search index

### 10.3. Dokumentumok

Adatvédelmi Nyilatkozat (/adatvedelem)

ÁSZF (/aszf)

Közösségi Irányelvek (/kozossegi-iranyelvek)

## 4. Biztonság

### 11.1. Kliensoldali biztonság

Zod validáció – minden bemenet ellenőrzése

CASL – jogosultságok ellenőrzése a UI-ban

HTTPS – minden adatátvitel titkosítva

### 11.2. Szerveroldali biztonság

Firebase Security Rules – szigorú hozzáférés-vezérlés

Cloud Functions – biztonságérzékeny műveletek

Rate limiting – Firebase beépített védelem

Audit logging – Firebase Authentication naplók

### 11.3. Adatvédelem

Jelszavak – Firebase kezeli (hash)

Tokenek – rövid élettartamúak

Session – a böngészőben tárolódik

## 4. Teljesítmény

### 12.1. Kliensoldali optimalizálás

React Query cache – csökkenti a hálózati kéréseket

Code splitting – route-onkénti lazy loading

Memoizáció – React.memo, useMemo, useCallback

Képek optimalizálása – Cloudinary transzformáció

### 12.2. Szerveroldali optimalizálás

Firestore indexek – gyorsabb lekérdezések

Cloud Function-ök – hideg indítás minimalizálása

Search index – gyors keresés

## 5. Tesztelés

### 13.1. Tesztelési stratégia

Unit tesztek – hookok, service-ek, utils

Integration tesztek – feature-ök

E2E tesztek – kritikus folyamatok (bejelentkezés, cikk létrehozás)

### 13.2. Eszközök (TBD)

Vitest – unit és integration

React Testing Library – komponens tesztek

Playwright – E2E tesztek

## 6. Deployment

### 14.1. Hosting

Frontend: Firebase Hosting vagy Vercel/Netlify

Backend: Firebase (Auth, Firestore, Cloud Functions)

Média: Cloudinary / R2 / YouTube

### 14.2. CI/CD (TBD)

GitHub Actions – build, test, deploy

Preview deployments – PR-okhoz

## 7. Nyitott kérdések

A részletes listát lásd: docs/open-questions.md

Főbb kérdések:

Gold mennyiségek

Auto-approve szabályok

Kategóriák

Search engine választás

Fájl hosting

Gold levonás flagged tartalomnál

Komment hierarchia részletei

Admin panel scope

Értesítések

Média típusok

Fióktörlés

Regisztrációs flow

## 8. Verziótörténet

Verzió Dátum Változás
1.0 2026-11-12 Kezdeti verzió – architektúra áttekintés
