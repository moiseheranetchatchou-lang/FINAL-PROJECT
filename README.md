# FINAL-PROJECT
A small single-page web application (no framework) to create and manage events, and register users.
Event Manager — TypeScript (Final Project)
Event Manager — TypeScript (Final Project)

PRESENTATION

A small single-page web application (no framework) to create and manage events, and register users.

 FEATURES IMPLEMENTED
 
- Create event (title, description, date, location, category, capacity)
- Display events
- Filter by category and date
- Event detail view
- User registration with validation
  - refuse when event is full
  - refuse when date passed
  - refuse duplicate registration

Project structure
See repository root. All TypeScript code lives in `src/` and compiles to `dist/`.

Requirements
- Node.js & npm
- Optional: Live Server extension or use `npm run start`.

How to use

1. Fill the form to create events.
2. Use filters to search events.
3. Click *Details* for an event and register with name + institutional email.

Notes & limitations

* Data is stored in memory (arrays). Reloading the page clears runtime data.
* No backend, as required

Author
Full name: <TCHATCHOU TCHATCHOU MOISE HERANE>
* Student ID: <2425L090>
* Email: <moise.tchatchou@saintjeaningenieur.org>
* GITHUB LINK:https://github.com/moiseheranetchatchou-lang/FINAL-PROJECT.git
11) Google Doc to create in the shared folder

Document name: FINAL PROJECT

Contents to include:
- URL to GitHub repository (once created)
- Commands to run the project (see README `npm install`, `npm run build`)
- Short usage instructions

12) Remarques pédagogiques / Checklist (pour toi)

- [ ] Respecter l'architecture `src/models`, `dist`, `styles`.
- [ ] Ne pas utiliser de frameworks.
- [ ] Pas de base de données externe (les tableaux en mémoire suffisent).
- [ ] Préparer des screenshots: homepage, event detail, registration form.
- [ ] Ajouter une section "Limitations" et "Améliorations possibles" dans README.
