# Adatvédelmi Nyilatkozat

## Magyar Wesnoth Közösségi Portál

**Hatályos:** [DÁTUM]
**Verzió:** 1.0

---

## 1. Bevezetés

A **Magyar Wesnoth Közösségi Portál** (a továbbiakban: „Portál") üzemeltetője
[ADATKEZELŐ NEVE / VÁLLALKOZÁS NEVE] (a továbbiakban: „Adatkezelő", „mi", „minket")
ezúton tájékoztatja Önt (a továbbiakban: „Felhasználó", „Ön") személyes adatainak
kezeléséről.

A Portál egy nyílt forráskódú, közösségi oldal a Battle for Wesnoth magyar
játékosközössége számára. A Portál forráskódja nyílt, a felhasználói tartalom
Creative Commons licenc alatt érhető el.

Ez a Nyilatkozat megfelel az Európai Parlament és a Tanács (EU) 2016/679
rendeletének (általános adatvédelmi rendelet, „GDPR"), valamint az információs
önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII.
törvénynek („Infotv.").

---

## 2. Adatkezelő

|                                   |                                      |
| --------------------------------- | ------------------------------------ |
| **Név**                           | [ADATKEZELŐ NEVE / VÁLLALKOZÁS NEVE] |
| **Székhely / Telephely**          | [CÍM]                                |
| **Email**                         | [KAPCSOLATI EMAIL]                   |
| **Adatvédelmi tisztviselő (DPO)** | [NINCS KIJELÖLVE / NÉV + EMAIL]      |

**Megjegyzés:** A Portál nem végez olyan adatkezelést, amely a GDPR 37. cikke
szerinti kötelező adatvédelmi tisztviselő kinevezését indokolná.

---

## 3. Milyen Adatokat Kezelünk?

### 3.1. Regisztráció és bejelentkezés során

| Adat                         | Kötelező?                    | Cél                            |
| ---------------------------- | ---------------------------- | ------------------------------ |
| Email cím                    | Igen                         | Fiók azonosítás, bejelentkezés |
| Felhasználónév (displayName) | Igen                         | Közösségi megjelenés           |
| Profilkép URL                | Nem                          | Profil személyre szabása       |
| Jelszó (titkosított hash)    | Igen (email regisztrációnál) | Bejelentkezés                  |

Google-fiókkal történő bejelentkezés esetén a Google-től átvett adatok:
név, email cím, profilkép URL.

### 3.2. A Portál használata során keletkező adatok

- Fórumhozzászólások, kommentek, üzenetek
- Feltöltött tartalmak (képek, szövegek, linkek)
- Felhasználói beállítások (pl. téma, nyelv)
- Időbélyegek (létrehozás, módosítás dátuma)

### 3.3. Technikai adatok

- Firebase Authentication által kezelt munkamenet-tokenek
  (a Felhasználó böngészőjében, IndexedDB/localStorage formájában)
- Böngésző típusa, operációs rendszer (Firebase által naplózva)
- IP-cím (Firebase infrastruktúra szintjén)
- Hiba- és biztonsági naplók

### 3.4. Amit NEM kezelünk

- Különleges kategóriájú adatok (egészségügyi, vallási, politikai stb.)
- Fizetési adatok (a Portál ingyenes)
- Helymeghatározási adatok
- Biometrikus adatok

---

## 4. Az Adatkezelés Céljai és Jogalapja

| Cél                                               | Jogalap (GDPR 6. cikk)                 |
| ------------------------------------------------- | -------------------------------------- |
| Felhasználói fiók létrehozása és kezelése         | Szerződés teljesítése – 6. cikk (1) b) |
| Bejelentkezés, munkamenet kezelése                | Szerződés teljesítése – 6. cikk (1) b) |
| Közösségi funkciók biztosítása (fórum, kommentek) | Szerződés teljesítése – 6. cikk (1) b) |
| Biztonság, visszaélések megelőzése                | Jogos érdek – 6. cikk (1) f)           |
| Hiba- és biztonsági naplózás                      | Jogos érdek – 6. cikk (1) f)           |
| Jogi kötelezettségek teljesítése                  | Jogi kötelezettség – 6. cikk (1) c)    |
| Analitika (ha van)                                | Hozzájárulás – 6. cikk (1) a)          |

---

## 5. Adattovábbítás Harmadik Feleknek

### 5.1. Google Firebase (Authentication + Firestore)

|                                   |                                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Szolgáltató**                   | Google Ireland Limited (EU képviselet) / Google LLC (US)                                             |
| **Szolgáltatás**                  | Firebase Authentication, Cloud Firestore                                                             |
| **Cél**                           | Hitelesítés, adattárolás                                                                             |
| **Adattovábbítás jogalapja**      | EU–US Adatvédelmi Keretrendszer (Data Privacy Framework) és/vagy Standard Szerződési Kikötések (SCC) |
| **Tárolási régió**                | [europe-west1 / europe-west3 – a Firebase projekt beállítása szerint]                                |
| **Adatvédelmi nyilatkozat**       | <https://firebase.google.com/support/privacy>                                                        |
| **Adatfeldolgozási megállapodás** | <https://firebase.google.com/terms/data-processing-terms>                                            |

A Firebase a Google adatfeldolgozójaként jár el az Adatkezelő utasításai szerint.
Az Adatkezelő a Firebase Console-ban elfogadta a Google Adatfeldolgozási
Megállapodását (DPA).

### 5.2. Google Sign-In (opcionális)

Amennyiben a Felhasználó Google-fiókkal jelentkezik be, a Google-tól az alábbi
adatokat kapjuk: név, email cím, profilkép URL. A Google saját adatkezelésére
a Google adatvédelmi nyilatkozata vonatkozik:
<https://policies.google.com/privacy>

### 5.3. Tárhelyszolgáltató

|                 |                                                                 |
| --------------- | --------------------------------------------------------------- |
| **Szolgáltató** | [HOSTING SZOLGÁLTATÓ – pl. Firebase Hosting / Netlify / Vercel] |
| **Cél**         | Statikus fájlok kiszolgálása                                    |
| **Megjegyzés**  | A Portál statikus SPA build, a Felhasználó böngészőjében fut    |

### 5.4. Brevo (Sendinblue SAS)

- **Cél:** Hírlevél és tranzakciós e-mailek küldése
- **Székhely:** 106 rue de Trèves, 75008 Párizs, Franciaország (EU)
- **Adatvédelmi nyilatkozat:** <https://www.brevo.com/legal/privacypolicy/>
- **Adatfeldolgozási megállapodás:** <https://www.brevo.com/legal/termsofuse/#dpa>

### 5.5. Egyéb harmadik felek

A Portál nem ad el, nem ad bérbe és nem oszt meg személyes adatokat
harmadik felekkel marketingcélra.

---

## 6. Adatmegőrzési Időszak

| Adatkategória                   | Megőrzési idő                                                |
| ------------------------------- | ------------------------------------------------------------ |
| Aktív felhasználói fiók         | A fiók törléséig                                             |
| Inaktív fiók                    | 3 év inaktivitás után törlésre kerül (előzetes értesítéssel) |
| Felhasználói tartalom (posztok) | A fiók törléséig, vagy a Felhasználó kérésére                |
| Firebase Authentication naplók  | Google által meghatározott (jellemzően 180 nap)              |
| Biztonsági naplók               | 1 év                                                         |
| Analitikai adatok (ha van)      | 14 hónap                                                     |

---

## 7. Az Adatok Tárolása és Biztonsága

### 7.1. Tárolási hely

- **Cloud Firestore:** [europe-west régió]
- **Firebase Authentication:** Google globális infrastruktúra
  (EU–US Adatvédelmi Keretrendszer alapján)
- **Munkamenet-tokenek:** a Felhasználó böngészőjében (IndexedDB/localStorage)

### 7.2. Technikai és szervezési intézkedések

- **HTTPS/TLS** titkosítás minden adatátvitelnél
- **Firebase Security Rules** – szigorú hozzáférés-vezérlés adatbázis szinten
- **Firebase Authentication** – jelszókezelés, OAuth2 token kezelés
- **Zod validáció** – bemeneti adatok ellenőrzése kliensoldalon
- **Rate limiting** – Firebase beépített védelem
- **Audit logging** – Firebase Authentication naplók
- **Legkisebb jogosultság elve** – a Felhasználó csak a saját adataihoz fér hozzá

### 7.3. Felhasználói felelősség

Mivel a Portál **Single Page Application (SPA)** architektúrájú:

- A bejelentkezési munkamenet a böngészőben tárolódik
- A Felhasználó felelős eszköze biztonságáért
- Közös használatú eszközön javasolt a kijelentkezés
- A jelszó titokban tartása a Felhasználó felelőssége

---

## 8. Az Érintett Jogai

A GDPR III. fejezete alapján Önt az alábbi jogok illetik meg:

1. **Hozzáférési jog (15. cikk):** Kérheti, hogy tájékoztassuk arról, hogy
   kezeljük-e személyes adatait, és kérheti azok másolatát.
2. **Helyesbítési jog (16. cikk):** Kérheti a pontatlan vagy hiányos adatok
   javítását.
3. **Törlési jog / „elfeledtetéshez való jog" (17. cikk):** Kérheti adatai
   törlését, ha az adatkezelés jogalapja megszűnt, vagy ha visszavonta
   hozzájárulását.
4. **Adatkezelés korlátozásához való jog (18. cikk):** Kérheti az adatkezelés
   korlátozását bizonyos esetekben.
5. **Adathordozhatósághoz való jog (20. cikk):** Kérheti adatai géppel
   olvasható formátumban (JSON) történő kiadását.
6. **Tiltakozási jog (21. cikk):** Tiltakozhat a jogos érdeken alapuló
   adatkezelés ellen.
7. **Hozzájárulás visszavonása (7. cikk (3)):** Bármikor visszavonhatja
   hozzájárulását; ez nem érinti a visszavonás előtti adatkezelés
   jogszerűségét.

**Jogai gyakorlása:** A [KAPCSOLATI EMAIL] címen. Kérését 30 napon belül
teljesítjük.

**Fiók- és adattörlés:** A Portálon belül elérhető a fiók törlése funkció,
amely a Firebase Authentication fiók és a kapcsolódó Firestore adatok
törlését eredményezi.

---

## 9. Adatvédelmi Incidensek

Adatvédelmi incidens (személyes adatok jogosulatlan hozzáférése, elvesztése,
megsemmisítése, módosítása) esetén:

1. Az Adatkezelő a lehető leghamarabb, de legkésőbb **72 órán belül**
   értesíti a NAIH-ot (GDPR 33. cikk).
2. Ha az incidens magas kockázattal jár az érintettekre, az érintetteket
   is értesítjük (GDPR 34. cikk).
3. Megtesszük a szükséges intézkedéseket a hozzáférés megszüntetésére és
   a jövőbeli incidensek megelőzésére.

---

## 10. Cookie-k és Helyi Tárolás

### 10.1. Szükséges cookie-k / localStorage

- **Firebase Authentication munkamenet-token** – a bejelentkezési állapot
  fenntartásához (IndexedDB/localStorage)
- **CSRF / biztonsági tokenek** – a Firebase által kezelve

### 10.2. Funkcionális tárolás

- **Felhasználói beállítások** (téma, nyelv) – localStorage-ban

### 10.3. Analitikai cookie-k

[HA NINCS ANALITIKA:] A Portál jelenleg nem használ analitikai cookie-kat.

[HA VAN ANALITIKA:] A Portál [eszköz neve] analitikai cookie-kat használ.
Ezek csak a Felhasználó hozzájárulásával aktiválódnak.

---

## 11. Gyermekek Adatvédelme

A Portál nem gyűjt tudatosan **16 év alatti** gyermekek személyes adatait.
Ha tudomást szerzünk 16 év alatti gyermek adatainak gyűjtéséről, azokat
haladéktalanul töröljük. Ha Ön 16 év alatti, kérjük, ne regisztráljon.

---

## 12. Szellemi Tulajdon és Licencelés

### 12.1. Felhasználói tartalom

A Felhasználó által feltöltött tartalom (szöveg, kép, egyéb kreatív anyag)
esetében:

- A Felhasználó megtartja a szerzői jogokat.
- A Felhasználó a tartalmat a **Creative Commons Nevezd meg! – Így add
  tovább! 4.0 Nemzetközi (CC BY-SA 4.0)** licenc alatt teszi közzé.
- A licenc részletei: <https://creativecommons.org/licenses/by-sa/4.0/deed.hu>

### 12.2. Portál forráskódja

A Portál forráskódja nyílt forráskódú, elérhető: [GITHUB LINK]
Licenc: [MIT / GPL-3.0 / stb.]

### 12.3. Személyes adatok

**Fontos:** A személyes adatok (email cím, név, profilinformációk) **NEM**
tartoznak a Creative Commons licenc hatálya alá. Ezek kezelésére a jelen
Adatvédelmi Nyilatkozat vonatkozik.

### 12.4. Battle for Wesnoth tartalmak

A Battle for Wesnoth játékhoz kapcsolódó tartalmak a játék saját
licencfeltételei alá tartoznak (GPL v2+ és CC BY-SA 4.0). A Portál nem
hivatalos közösségi oldal, és nincs kapcsolatban a játék hivatalos
fejlesztőivel.

---

## 13. Változtatások a Nyilatkozatban

Az Adatkezelő jogosult módosítani ezt a Nyilatkozatot. A lényeges
változásokról a Portálon keresztül, legalább **30 nappal** előre értesítjük
a Felhasználókat. A változások közzététele után történő további Portál
használat a módosított Nyilatkozat elfogadását jelenti.

A Nyilatkozat korábbi verziói kérésre elérhetők.

---

## 14. Kapcsolat és Jogorvoslat

### 14.1. Adatkezelő elérhetősége

- **Email:** [KAPCSOLATI EMAIL]
- **Levélcím:** [POSTAI CÍM]

### 14.2. Hatósági jogorvoslat

Panasszal élhet a **Nemzeti Adatvédelmi és Információszabadság Hatóságnál
(NAIH):**

- **Cím:** 1055 Budapest, Falk Miksa utca 9-11.
- **Postacím:** 1363 Budapest, Pf. 9.
- **Telefon:** +36 1 391-1400
- **Fax:** +36 1 391-1410
- **Email:** <ugyfelszolgalat@naih.hu>
- **Web:** <https://www.naih.hu>

### 14.3. Bírósági jogorvoslat

Ön jogosult bírósághoz fordulni, ha úgy véli, hogy adatainak kezelése
sérti a GDPR-t. A pert a lakóhelye vagy tartózkodási helye szerinti
törvényszék előtt is megindíthatja (GDPR 79. cikk).
