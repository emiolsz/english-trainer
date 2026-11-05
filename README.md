# English Trainer — B1 → B1+ → B2

Responsywna aplikacja do nauki angielskiego (telefon, tablet, komputer). Projekt pod GitHub i Vercel.

## Co działa w wersji 0.1
- Codzienna rozgrzewka **20 pytań** z mieszanych czasów; poziom B1 / B1+ / B2.
- Każda odpowiedź (także błędna) ma **konkretne wyjaśnienie**; można rozwinąć uzasadnienia wszystkich czterech opcji.
- **Writing**: temat, pole do wpisania odpowiedzi, licznik słów, automatyczny zapis szkicu i przycisk analizy.
- Bez klucza API: podstawowa, jawnie ograniczona analiza kilku typowych błędów i interpunkcji.
- Z `OPENAI_API_KEY`: analiza tekstu przez AI z objaśnieniami po polsku i propozycją poprawionej wersji. AI może się mylić.
- Historia wyników rozgrzewek w `localStorage` na danym urządzeniu.
- Strony dla Grammar, Reading, Listening, Speaking, Vocabulary i EF SET — **na razie szkielety**, nie pełne moduły.

## Uruchomienie lokalne
Wymagany Node.js 20+.

```bash
npm install
npm run dev
```

Otwórz http://localhost:3000

## Opcjonalne AI do Writing
Skopiuj `.env.example` do `.env.local` i wpisz `OPENAI_API_KEY` (klucz wyłącznie po stronie serwera). `OPENAI_MODEL` można zmienić na model dostępny na Twoim koncie API. Funkcja AI jest płatna zgodnie z cennikiem dostawcy. **Nigdy nie wpisuj klucza w kodzie frontendowym ani nie przesyłaj `.env.local` na GitHub.**

## GitHub → Vercel
1. Utwórz puste repozytorium GitHub, np. `english-b1-trainer`.
2. Rozpakuj ZIP i wgraj **zawartość folderu** `english-b1-trainer` do głównego katalogu repozytorium.
3. W Vercel wybierz **Add New → Project → Import Git Repository**.
4. Framework powinien zostać rozpoznany jako **Next.js**. Kliknij **Deploy**.
5. Jeśli chcesz pełną korektę Writing, dodaj w Vercel → Project Settings → Environment Variables `OPENAI_API_KEY` i ewentualnie `OPENAI_MODEL`, następnie wykonaj redeploy.

## Ważne ograniczenia
- Ta wersja nie ma jeszcze rzeczywistych ćwiczeń Reading/Listening/Speaking ani nagrań; są przygotowane strony.
- Pytania w rozgrzewce są losowane z przygotowanej bazy. Nie jest to generator nowych pytań AI.
- Zapis lokalny nie synchronizuje się między telefonem i komputerem. Konta i synchronizacja wymagają późniejszego wdrożenia bazy danych.
- Nie ma jeszcze instalowalnego PWA/offline; interfejs jest responsywny. PWA jest zaplanowane.
- Wybór poziomu jest zapamiętywany lokalnie. Poziom B1+ jest umownym etapem przejściowym.
- Teksty wpisane w Writing są wysyłane do własnego endpointu aplikacji; przy włączonym AI są dalej wysyłane do dostawcy modelu. Nie wpisuj danych poufnych.

## Plan rozbudowy
1. Poszerzenie banku pytań, lekcje gramatyczne i ćwiczenia błędów.
2. Reading i Vocabulary z treścią.
3. Listening z legalnymi nagraniami i transkrypcjami.
4. Speaking, ocena wypowiedzi, ćwiczenia wymowy.
5. Konta, synchronizacja, PWA i tryb offline dla wybranych ćwiczeń.
6. Trening EF SET Reading/Listening (autorskie materiały).
