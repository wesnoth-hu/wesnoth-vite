Nyitott Kérdések – Fejlesztési Fázisban Eldöntendő
Projekt: Magyar Wesnoth Közösségi Portál
Verzió: 1.1
Utolsó frissítés: 2026-11-13
Státusz: Fejlesztés előtti tervezési fázis

📋 Áttekintés
Ez a dokumentum azokat a nyitott kérdéseket tartalmazza, amelyeket a fejlesztési fázis megkezdésekor kell tisztázni és eldönteni. A kérdések a jelenlegi architektúra-tervezés során merültek fel, és a végleges implementáció előtt döntést igényelnek.

Használat: A fejlesztés megkezdésekor ezt a listát vegyük elő, és egyenként menjünk végig rajta. Minden kérdésnél jelöljük a döntést és a döntés dátumát.

1. Gold rendszer mennyiségek
   Kontextus: A gold a játékbeli valutát utánozza, és activity alapján jár (poszt, komment, média feltöltés). Flag → moderation → szabálysértés esetén levonás.

Eldöntendő:

☑ Mennyi gold jár egy posztért, kommentért, média feltöltésért? → Fibonacci-sorozatot követ
□ Van-e napi limit (spam elleni védelem)?
□ Regisztrációkor jár-e kezdő gold? Ha igen, mennyi?
□ Van-e különbség a tartalomtípusok között a gold mennyiségben?
Döntés: A gold mennyiségek a Fibonacci-sorozatot követik (1, 1, 2, 3, 5, 8, 13, 21, ...). A pontos hozzárendelés (melyik eseményhez melyik szám tartozik) a fejlesztés során kerül kidolgozásra. A gold jóváírást Cloud Function végzi a biztonság érdekében.

2. Auto-approve szabályok
   Kontextus: A diagramon a felhasználói cikkeknél „mod. approval" szerepel, de a hozzászólásoknál nem. Minden tartalom pending állapotban jön létre, és moderátor approve-olja.

Eldöntendő:

☑ Megbízható felhasználóknál (pl. 1 hónap tagság + 100 gold) automatikus approve? → Igen, megbízható felhasználóknál auto-approve
□ Vagy minden tartalom moderációra vár?
□ Mely tartalomtípusoknál van approve egyáltalán? (cikk, komment, média)
☑ Van-e „trust level" rendszer (pl. új felhasználó, megbízható, veterán)? → Igen, badge jelzi a profilon és a név mellett
□ Mi történik, ha egy megbízható felhasználó szabálysértést követ el? (visszaesik?)
Döntés: Auto-approve működik a megbízható felhasználóknál. A megbízhatóságot egy badge jelzi a profilon és a felhasználónév mellett. A pontos feltételek (pl. mennyi gold, mennyi idő után válik valaki megbízhatóvá) a fejlesztés során kerülnek kidolgozásra. A badge megjelenítése a profile feature része lesz.

3. Kategóriák
   Kontextus: A diagramon szerepel, de még nincs eldöntve, hogy lesznek-e, és milyen struktúrában.

Eldöntendő:

□ Lesznek-e kategóriák?
□ Ha igen, milyen struktúrában (lapos vagy hierarchikus)?
□ Mely tartalomtípusokhoz tartoznak kategóriák? (csak cikkek? minden?)
□ Ki hozhat létre kategóriákat? (csak admin?)
□ Van-e színjelölés vagy ikon a kategóriáknál?
□ Egy tartalom több kategóriába is tartozhat?
Döntés: [fejlesztéskor kitöltendő]

4. Search engine választás
   Kontextus: react-query + ingyenes, de capable search engine. A Firestore full-text search korlátozott.

Eldöntendő:

☑ Meilisearch, Typesense, Algolia, vagy egyéb? → Algolia
□ Self-hosted vagy cloud?
□ Milyen gyakran szinkronizáljunk? (valós időben, óránként, naponta?)
□ Milyen tartalomtípusokat indexeljünk? (cikk, komment, média, felhasználó?)
□ Van-e szükség faceted search-re (szűrés kategóriára, dátumra, szerzőre)?
□ Hogyan kezeljük a magyar nyelvű keresést? (ékezetek, toldalékok)
Döntés: Algolia lesz a search engine. A szinkronizáció gyakorisága, az indexelendő tartalomtípusok és a faceted search részletei a fejlesztés során kerülnek kidolgozásra.

5. Fájl hosting
   Kontextus: Ingyenes, de generous hosting kell. Videók lehet YouTube embed, képek Cloudinary/ImageKit, fájlok még eldöntendő.

Eldöntendő:

Képek:

☑ Cloudinary vagy ImageKit? → Cloudinary
□ Milyen transzformációk kellenek? (méret, formátum, watermark)
□ Van-e méretlimit?
Videók:

☑ YouTube embed (unlisted) vagy más? → YouTube embed (unlisted)
□ Ha YouTube, hogyan kezeljük a videó metaadatokat?
□ Van-e lehetőség feltöltésre is (nem csak embed)?
Audió:

□ Cloudinary (audió is megy) vagy külön szolgáltatás?
□ Milyen formátumok támogatottak? (mp3, ogg, wav)
□ Van-e méretlimit?
Fájlok:

☑ Cloudflare R2 vagy Firebase Storage? → Cloudflare R2 (ingyenes egress, 10 GB tárhely)
□ Milyen fájltípusok engedélyezettek? (PDF, zip, doc, stb.)
□ Van-e méretlimit?
□ Van-e vírusellenőrzés?
Döntés:

Képek: Cloudinary

Videók: YouTube embed (unlisted)

Fájlok: Cloudflare R2 (S3-kompatibilis, ingyenes egress, 10 GB ingyenes tárhely)

Audió: [fejlesztéskor kitöltendő]

6. Gold levonás flagged tartalomnál
   Kontextus: Flag → moderation → ha szabálysértés, admin/moderator levonja a goldot.

Eldöntendő:

□ Automatikus levonás flag esetén, vagy csak moderation után?
□ Mennyi levonás jár egy szabálysértésért? (fix összeg, vagy a megszerzett gold visszavonása?)
□ Van-e „figyelmeztetés" először, és csak ismételt szabálysértésnél levonás?
□ Van-e fellebbezési lehetőség a levonás ellen?
□ A levont gold „visszakerül" a rendszerbe, vagy elvész?
Döntés: [fejlesztéskor kitöltendő]

7. Komment hierarchia részletei
   Kontextus: Flat, de referenciával az előző hozzászólásra/posztra.

Eldöntendő:

□ A replyToId hogyan jelenjen meg? (idézet, @említés, vagy mindkettő)
□ Maximum hány szintű válasz (bár flat, de van referencia)?
□ Ha egy komment törölve van, mi történik a rá adott válaszokkal?
□ Van-e „megoldás" jelölés (pl. fórumon a válasz, ami megoldotta a kérdést)?
□ Hogyan jelenjenek meg a mélyen beágyazott válaszok? (összecsukva, lapítva)
Döntés: [fejlesztéskor kitöltendő]

8. Admin panel scope
   Kontextus: Külön protected route CASL.js implementációval.

Eldöntendő:

Dashboard:

□ Milyen statisztikák legyenek? (felhasználók, tartalmak, flag-ek, gold)
□ Van-e grafikonos megjelenítés?
□ Milyen időszakot mutasson? (napi, heti, havi)
Felhasználókezelés:

□ Milyen műveletek? (szerepkör váltás, ban, gold adjust, fiók törlés)
□ Van-e keresés/szűrés a felhasználók között?
□ Van-e „felhasználó előzmény" nézet? (posztok, flag-ek, gold tranzakciók)
Moderációs queue:

□ Milyen szűrőket kapjon? (típus, dátum, státusz, flag ok)
□ Van-e „batch" művelet? (több flag egyszerre)
□ Hogyan jelenjenek meg a flag-elt tartalmak? (előnézet, kontextus)
Döntés: [fejlesztéskor kitöltendő]

9. Értesítések
   Kontextus: In-app + e-mail (Brevo) kombináció. Felhasználó beállíthatja, mit kér.

Eldöntendő:

□ Mely események generálnak értesítést? (válasz, említés, approve, flag, gold, stb.)
□ Mely értesítések mennek e-mailben is? (csak fontosak, vagy minden)
□ Felhasználó mely típusokat kapcsolhat ki?
□ Van-e „összefoglaló" e-mail? (napi/heti digest)
□ Hogyan jelenjenek meg az in-app értesítések? (bell icon, toast, oldal)
Döntés: [fejlesztéskor kitöltendő]

10. Média típusok pontosítása
    Kontextus: A diagramon „Mozgóképek (Videók)", „Képek", „Állományok (Fájlok)" szerepel. Az audió (music, ringtones) külön kategória lehet.

Eldöntendő:

□ „Audió" alatt pontosan mi? (music, ringtones, podcast, sound effects)
□ Van-e külön kategória a GIF-eknek?
□ Van-e méretlimit típusonként?
□ Van-e formátumkorlát? (pl. csak mp3, csak jpg/png)
□ Van-e előnézet a feltöltés előtt?
Döntés: [fejlesztéskor kitöltendő]

11. Fióktörlés (GDPR)
    Kontextus: A felhasználó bármikor kérheti fiókja törlését.

Eldöntendő:

□ Mi történik a felhasználó tartalmaival törléskor? (törlődnek, anonimizálódnak, megmaradnak?)
□ Gold tranzakciók megmaradnak-e?
□ Kommentek hogyan kezelődnek? (törlődnek, „törölt felhasználó" néven megmaradnak?)
□ Van-e „türelmi idő" a törlés előtt? (pl. 30 nap, amíg visszavonható)
□ Hogyan történik a Brevo-ból való törlés?
□ Mi történik a search engine indexszel?
Döntés: [fejlesztéskor kitöltendő]

12. Regisztrációs flow
    Kontextus: Firebase Authentication + Google Sign-In.

Eldöntendő:

☑ Email verification kötelező? → Igen
☑ Google Sign-In kötelező opció vagy alternatíva? → Alternatíva (választható)
☑ Van-e „meghívásos" rendszer vagy nyílt regisztráció? → Nyílt regisztráció
□ Van-e CAPTCHA vagy botvédelem?
☑ Regisztrációkor kötelező-e az ÁSZF és Adatvédelmi Nyilatkozat elfogadása? → Igen, GDPR miatt kötelező
□ Van-e „onboarding" folyamat? (profil beállítás, bemutatkozás)
Döntés:

Email/Jelszó + Google Sign-In (mindkettő elérhető, a felhasználó választhat)

Nyílt regisztráció (nincs meghívásos rendszer)

Email verification kötelező

ÁSZF és Adatvédelmi Nyilatkozat elfogadása kötelező a regisztrációkor

Passwordless (jelszó nélküli) belépés NEM lesz

📝 Döntési Napló
Az alábbi táblázatba kerülnek a döntések, amikor megszületnek:

# Kérdés Döntés Dátum Megjegyzés

1 Gold mennyiségek Fibonacci-sorozat 2025-01-15 Cloud Function számolja
2 Auto-approve Megbízható usereknél auto-approve + badge 2025-01-15 Badge a profilon és név mellett
3 Kategóriák [fejlesztéskor]
4 Search engine Algolia 2025-01-15
5 Fájl hosting Képek: Cloudinary, Videók: YouTube, Fájlok: Cloudflare R2 2025-01-15 Audió: TBD
6 Gold levonás [fejlesztéskor]
7 Komment hierarchia [fejlesztéskor]
8 Admin panel [fejlesztéskor]
9 Értesítések [fejlesztéskor]
10 Média típusok [fejlesztéskor]
11 Fióktörlés [fejlesztéskor]
12 Regisztráció Email/Jelszó + Google, nyílt, email verify, ÁSZF kötelező 2025-01-15 Passwordless nincs
🔄 Verziótörténet
Verzió Dátum Változás
1.0 [DÁTUM] Kezdeti verzió – nyitott kérdések listája
1.1 2025-01-15 Döntések frissítve: auth flow, gold, auto-approve, search, fájl hosting
Megjegyzés: Ez a dokumentum a fejlesztési fázis elején lesz elővéve. Addig is, ha bármelyik kérdésre időközben döntést hozol, frissítsd a „Döntés" mezőt és a döntési naplót.
