# Mappastruktúra

**Projekt:** Magyar Wesnoth Közösségi Portál  
**Verzió:** 1.0  
**Utolsó frissítés:** [DÁTUM]  
**Státusz:** Tervezési fázis

---

## 1. Áttekintés

Ez a dokumentum a projekt mappastruktúráját írja le. A struktúra a **feature-sliced** megközelítést követi, ahol a funkcionális egységek (feature-ök) külön mappákban vannak, és a page-ek csak összekötik a feature-öket.

**Alapelvek:**

- **Pages** – route-okhoz tartozó page komponensek
- **Features** – funkcionális modulok (auth, content, moderation, stb.)
- **Shared** – újrahasznosítható, feature-független elemek
- **Stores** – Zustand store-ok
- **Config** – statikus konfigurációk
- **Types** – globális típusok

---

## 2. Gyökérstruktúra

src/
├── main.tsx # BrowserRouter + App
├── App.tsx # Route-ok
├── index.css # globális stílusok
├── pages/ # Route-okhoz tartozó page-ek
├── features/ # Feature modulok
├── shared/ # Újrahasznosítható elemek
├── config/ # Statikus konfigurációk
├── stores/ # Zustand store-ok
└── types/ # Globális típusok

docs/ # Dokumentáció
public/ # Statikus fájlok

text

---

## 3. `src/pages/`

A **page** komponensek a route-okhoz tartoznak. Minden page egy route-ot képvisel.
pages/
├── HomePage.tsx
├── NotFoundPage.tsx
│
├── auth/
│ ├── SignInPage.tsx
│ ├── SignUpPage.tsx
│ └── ResetPasswordPage.tsx
│
├── articles/
│ ├── ArticleListPage.tsx
│ ├── ArticleDetailPage.tsx
│ ├── ArticleCreatePage.tsx
│ └── ArticleEditPage.tsx
│
├── forum/
│ ├── ForumListPage.tsx
│ ├── TopicDetailPage.tsx
│ └── TopicCreatePage.tsx
│
├── media/
│ ├── MediaListPage.tsx
│ ├── MediaDetailPage.tsx
│ └── MediaUploadPage.tsx
│
├── profile/
│ ├── ProfilePage.tsx # saját profil
│ ├── ProfileEditPage.tsx
│ └── UserProfilePage.tsx # más felhasználó profilja
│
├── settings/
│ ├── SettingsPage.tsx # általános beállítások
│ ├── NotificationSettingsPage.tsx # hírlevél, emlékeztetők
│ └── AccountSettingsPage.tsx # fiók törlés, jelszóváltás
│
├── admin/
│ ├── DashboardPage.tsx
│ ├── UsersPage.tsx
│ ├── ModerationQueuePage.tsx
│ ├── GoldTransactionsPage.tsx
│ └── SettingsPage.tsx
│
└── legal/
├── PrivacyPage.tsx # Adatvédelmi Nyilatkozat
├── TermsPage.tsx # ÁSZF
└── GuidelinesPage.tsx # Közösségi Irányelvek

text

**Megjegyzés:** a `forum/` alatt a „topic" a hozzászólásokat jelenti (a diagramon „Hozzászólások"). Ha inkább `comments/` vagy `discussions/` nevet szeretnél, szólj.

---

## 4. `src/features/`

A **feature** modulok a funkcionális egységek. Minden feature egységesen:

- `components/` – bemutató komponensek
- `hooks/` – adatlekérés és state kezelés
- `schemas/` – Zod sémák
- `services/` – adatlekérés (Firestore wrapper)
- `types.ts` – feature-specifikus típusok

### 4.1. `features/auth/`

auth/
├── components/
│ ├── SignInForm.tsx
│ ├── SignUpForm.tsx
│ ├── ResetPasswordForm.tsx
│ └── AuthGuard.tsx # védett route-okhoz
├── hooks/
│ └── useAuth.ts
├── schemas/
│ └── authSchema.ts
├── services/
│ └── authService.ts # Firebase Auth wrapper
└── types.ts

text

### 4.2. `features/content/`

Ez egy **gyűjtőmappa** a tartalomtípusoknak.
content/
├── articles/
│ ├── components/
│ │ ├── ArticleCard.tsx
│ │ ├── ArticleForm.tsx
│ │ ├── ArticleDetail.tsx
│ │ └── ArticleList.tsx
│ ├── hooks/
│ │ ├── useArticles.ts
│ │ ├── useArticle.ts
│ │ ├── useCreateArticle.ts
│ │ └── useUpdateArticle.ts
│ ├── schemas/
│ │ └── articleSchema.ts
│ ├── services/
│ │ └── articleService.ts
│ └── types.ts
│
├── comments/
│ ├── components/
│ │ ├── CommentCard.tsx
│ │ ├── CommentForm.tsx
│ │ ├── CommentList.tsx
│ │ └── CommentReply.tsx
│ ├── hooks/
│ │ ├── useComments.ts
│ │ ├── useCreateComment.ts
│ │ └── useUpdateComment.ts
│ ├── schemas/
│ │ └── commentSchema.ts
│ ├── services/
│ │ └── commentService.ts
│ └── types.ts
│
├── media/
│ ├── components/
│ │ ├── MediaCard.tsx
│ │ ├── MediaUploader.tsx
│ │ ├── ImagePreview.tsx
│ │ ├── VideoPreview.tsx
│ │ ├── AudioPreview.tsx
│ │ └── FilePreview.tsx
│ ├── hooks/
│ │ ├── useMedia.ts
│ │ ├── useUploadMedia.ts
│ │ └── useMediaByType.ts
│ ├── schemas/
│ │ └── mediaSchema.ts
│ ├── services/
│ │ └── mediaService.ts
│ └── types.ts
│
└── categories/ # TBD
├── components/
├── hooks/
├── schemas/
├── services/
└── types.ts

text

### 4.3. `features/moderation/`

moderation/
├── components/
│ ├── FlagButton.tsx
│ ├── FlagDialog.tsx
│ ├── ModerationQueue.tsx
│ ├── ApproveButton.tsx
│ ├── RejectButton.tsx
│ └── ResolutionDialog.tsx
├── hooks/
│ ├── useFlags.ts
│ ├── useApproveContent.ts
│ └── useRejectContent.ts
├── schemas/
│ └── flagSchema.ts
├── services/
│ └── moderationService.ts
└── types.ts

text

### 4.4. `features/gold/`

gold/
├── components/
│ ├── GoldBadge.tsx
│ ├── GoldDisplay.tsx
│ ├── GiveGoldDialog.tsx
│ └── GoldTransactionList.tsx
├── hooks/
│ ├── useGold.ts
│ ├── useGoldTransactions.ts
│ └── useGiveGold.ts
├── schemas/
│ └── goldSchema.ts
├── services/
│ └── goldService.ts
└── types.ts

text

### 4.5. `features/notifications/`

notifications/
├── components/
│ ├── NotificationBell.tsx
│ ├── NotificationDropdown.tsx
│ ├── NotificationItem.tsx
│ └── NotificationList.tsx
├── hooks/
│ ├── useNotifications.ts
│ ├── useUnreadCount.ts
│ └── useMarkAsRead.ts
├── schemas/
│ └── notificationSchema.ts
├── services/
│ └── notificationService.ts
└── types.ts

text

### 4.6. `features/profile/`

profile/
├── components/
│ ├── ProfileCard.tsx
│ ├── ProfileHeader.tsx
│ ├── ProfileEditForm.tsx
│ └── ProfileStats.tsx
├── hooks/
│ ├── useProfile.ts
│ └── useUpdateProfile.ts
├── schemas/
│ └── profileSchema.ts
├── services/
│ └── profileService.ts
└── types.ts

text

### 4.7. `features/search/`

search/
├── components/
│ ├── SearchBar.tsx
│ ├── SearchResults.tsx
│ └── SearchFilters.tsx
├── hooks/
│ ├── useSearch.ts
│ └── useSearchSuggestions.ts
├── schemas/
│ └── searchSchema.ts
├── services/
│ └── searchService.ts
└── types.ts

text

### 4.8. `features/authorization/`

Ez **nem** követi a `components/hooks/schemas/services` mintát, mert CASL konfiguráció.
authorization/
├── abilities.ts # CASL ability definíciók
├── Can.tsx # <Can> komponens
├── useAbility.ts # hook a store-ból
└── index.ts # exportok

text

---

## 5. `src/shared/`

A **shared** mappa az újrahasznosítható, feature-független elemeket tartalmazza.
shared/
├── components/
│ ├── ui/
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ ├── Textarea.tsx
│ │ ├── Select.tsx
│ │ ├── Checkbox.tsx
│ │ ├── Radio.tsx
│ │ ├── Dialog.tsx
│ │ ├── Modal.tsx
│ │ ├── Dropdown.tsx
│ │ ├── Tooltip.tsx
│ │ ├── Badge.tsx
│ │ ├── Avatar.tsx
│ │ ├── Spinner.tsx
│ │ ├── Skeleton.tsx
│ │ └── Pagination.tsx
│ │
│ ├── layout/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ ├── Sidebar.tsx
│ │ ├── Layout.tsx # fő layout (Header + Outlet + Footer)
│ │ └── Container.tsx
│ │
│ └── feedback/
│ ├── Toast.tsx
│ ├── ToastContainer.tsx
│ ├── ErrorBoundary.tsx
│ ├── ErrorMessage.tsx
│ ├── EmptyState.tsx
│ └── LoadingState.tsx
│
├── hooks/
│ ├── useDebounce.ts
│ ├── usePagination.ts
│ ├── useMediaQuery.ts
│ ├── useClickOutside.ts
│ └── useLocalStorage.ts
│
├── lib/
│ ├── firebase.ts # Firebase init
│ ├── queryClient.ts # react-query config
│ ├── brevo.ts # Cloud Function hívás (opcionális)
│ └── utils.ts # segédfüggvények (cn, formatDate, stb.)
│
├── services/ # OPCIONÁLIS, ha kell globális service
│ └── [ide kerülnek a globális service-ek, ha vannak]
│
└── types/
├── common.ts # Common típusok (ID, Timestamp, stb.)
└── index.ts # exportok

text

---

## 6. `src/config/`

config/
├── site.ts # SITE_CONFIG (név, URL, email, stb.)
├── routes.ts # Route konstansok (pl. ROUTES.ARTICLES)
└── permissions.ts # CASL action/subject konstansok

text

---

## 7. `src/stores/`

stores/
├── authStore.ts # user, role, ability
├── uiStore.ts # theme, sidebar, modal state
└── notificationStore.ts # unread count, notifications

text

**Megjegyzés:** ide kerülhet még később:

- `goldStore.ts` – ha kell globális gold state
- `searchStore.ts` – ha kell globális keresési state

---

## 8. `src/types/`

types/
├── user.ts # User, Role, UserPreferences
├── content.ts # Article, Comment, Media, Category
├── moderation.ts # Flag, ModerationStatus
├── gold.ts # GoldTransaction
├── notification.ts # Notification
├── search.ts # SearchResult
└── index.ts # exportok

text

**Megjegyzés:** a feature-specifikus típusok a `features/[feature]/types.ts`-ben vannak. A `types/` mappa csak a **globális, több feature-t érintő** típusokat tartalmazza.

---

## 9. `docs/`

docs/
├── open-questions.md # Nyitott kérdések
├── architecture.md # Architektúra leírás
├── folder-structure.md # Ez a dokumentum
├── legal/
│ ├── privacy-policy.md
│ ├── terms-of-service.md
│ └── community-guidelines.md
└── decisions/ # Döntési napló (ADR)
└── [döntések].md

text

---

## 10. `public/`

public/
├── favicon.ico
├── logo.svg
├── fonts/ # helyi fontok, ha vannak
└── images/ # statikus képek

text

---

## 11. Összefoglaló fa (csak mappák)

src/
├── pages/
│ ├── auth/
│ ├── articles/
│ ├── forum/
│ ├── media/
│ ├── profile/
│ ├── settings/
│ ├── admin/
│ └── legal/
├── features/
│ ├── auth/
│ ├── content/
│ │ ├── articles/
│ │ ├── comments/
│ │ ├── media/
│ │ └── categories/
│ ├── moderation/
│ ├── gold/
│ ├── notifications/
│ ├── profile/
│ ├── search/
│ └── authorization/
├── shared/
│ ├── components/
│ │ ├── ui/
│ │ ├── layout/
│ │ └── feedback/
│ ├── hooks/
│ ├── lib/
│ ├── services/
│ └── types/
├── config/
├── stores/
└── types/

docs/
public/

text

---

## 12. Fontos megjegyzések

1. **A `features/content/` gyűjtőmappa** – ha később úgy látod, hogy túl mély, akkor kiemelheted az `articles/`, `comments/`, `media/`, `categories/` mappákat közvetlenül a `features/` alá. De egyelőre a gyűjtőmappa logikus, mert mind a tartalomhoz kapcsolódik.

2. **A `media/` alatt minden médiatípus** – ha később külön akarod választani (pl. `images/`, `videos/`, `audio/`, `files/`), akkor megteheted, de egyelőre a közös logika miatt egy mappában van.

3. **A `shared/services/` opcionális** – csak akkor hozd létre, ha tényleg van globális service. Addig a feature-ökön belül legyenek a service-ek.

4. **A `docs/` mappa** – nem kötelező, de ajánlott a dokumentációk tárolására (open-questions, legal, architecture).

5. **A `public/` mappa** – Vite-nál a statikus fájlok helye (favicon, logo, fontok, képek).

6. **A `main.tsx` és `App.tsx`** – a `main.tsx`-ben van a `BrowserRouter` wrapper, az `App.tsx`-ben a route-ok. Nincs külön `router.tsx` vagy `providers.tsx`.

7. **A state management** – Zustand az elsődleges. React Context-et csak akkor használunk, ha prop drilling lép fel. A CASL ability is a Zustand store-ban van.

---

## 13. Verziótörténet

| Verzió | Dátum   | Változás                        |
| ------ | ------- | ------------------------------- |
| 1.0    | [DÁTUM] | Kezdeti verzió – mappastruktúra |

---

**Megjegyzés:** Ez a dokumentum a tervezési fázisban készült. A fejlesztési fázisban frissül, ahogy a struktúra változik.
