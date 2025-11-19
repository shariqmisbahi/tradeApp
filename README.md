# FastAPI + Angular (Vite-ready) Starter

This repository is a **full-stack starter** with:

- `pythonAPI/` → FastAPI backend
- `angularUI/` → Angular 20+ style frontend (standalone components, Vite-ready)
- `docker-compose.yml` → Run both services together
- GitHub Actions CI workflow
- VS Code icon theme + folder color associations (UST-style)

---

## 🧱 Tech Stack

- **Backend**: FastAPI, Uvicorn
- **Frontend**: Angular (standalone, HttpClient, simple home page)
- **Runtime**: Docker + Docker Compose
- **CI**: GitHub Actions (build + test for both backend and frontend)

---

## 🚀 Quick Start (Local, No Docker)

### 1. Backend (FastAPI)

```bash
cd pythonAPI
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

FastAPI will be available at: `http://localhost:8000`  
Docs: `http://localhost:8000/docs`

### 2. Frontend (Angular)

```bash
cd angularUI
npm install
npm start
```

Angular dev server (by default): `http://localhost:4200`

The home page has a **button** that calls the FastAPI backend and displays the response.

---

## 🐳 Run with Docker (Backend + Frontend)

From the **root** of the project:

```bash
docker compose up --build
```

- Backend: `http://localhost:8000`
- Frontend: `http://localhost:4200`

In Docker, the Angular app talks to the backend using the internal host `python-api` via
`environment.docker.ts` configuration.

---

## 🌍 Environment Switching (Local vs Docker)

### Backend

- Uses `API_ENV` environment variable (defaults to `local`).
- In Docker, `API_ENV=docker` is set in the backend `Dockerfile`.

### Frontend

- `src/environments/environment.ts` → local dev (`http://localhost:8000`)
- `src/environments/environment.docker.ts` → Docker (`http://python-api:8000`)

`angular.json` defines a `docker` configuration that replaces the environment file during
`ng build --configuration=docker` (called automatically in the Dockerfile).

---

## ✅ GitHub Actions CI

- Workflow file: `.github/workflows/ci.yml`
- Jobs:
  - **backend**: install dependencies and run basic checks/tests for FastAPI.
  - **frontend**: install npm packages and run `npm run build`.

Update the badge repo name in README once you push to your own GitHub repo.

---

## 🎨 UST-style Folder Color Coding (VS Code)

This project includes `.vscode/settings.json` that:

- Enables **Material Icon Theme** (if installed).
- Assigns custom icons/colors for `pythonAPI` and `angularUI`.

---

## 🔧 Next Steps for You

1. Create a new GitHub repo.
2. Initialize git in this folder and push.
3. Update the README CI badge with your GitHub `USER/REPO`.
4. Extend the FastAPI routes and Angular pages as your app grows.



Backend local run:

cd pythonAPI
python -m venv .venv
# Windows:
.venv\Scripts\activate
# Linux/mac:
# source .venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000


Frontend local run:
cd angularUI
npm install
npm start

GIT Full Command Set cd fastapi-angular20-starter

git init
git remote set-url origin https://github.com/YOUR_USERNAME/tradeApp.git
git branch -M main

git add .
git commit -m "Updated to v 1.1"

git push -u origin main

