<div align="center">
    <h1>Tugas Besar</h1>
    <h3>II3120 - Information System & Technology Services</h3>
    <h4>Kelompok 13</h4>
</div>
<br>

<div align="center">
    <img src="https://readme-typing-svg.herokuapp.com?font=Itim&size=48&pause=1000&color=20C20E&center=true&vCenter=true&random=false&width=1000&height=60&lines=Intelligente+Landwirtschaft+-+Backend;Backend+for+A+Smart+Farming+Prototype" alt="Typing SVG">
</div>

## List of Contents

1. [Description](#description)
2. [Group's Members](#groups-members)
3. [Tech Stack](#tech-stack)
4. [How to Run](#how-to-run)
5. [API Endpoints](#api-endpoints)
6. [Deployment](#deployment)

## Description

Service ini menyediakan API yang digunakan sebagai backend untuk aplikasi [Intelligente Landwirtschaft - Frontend](https://github.com/rasyadanfz/intelligente-landwirtschaft-frontend). Service ini dibuat untuk mendukung proses bisnis penanaman dan pemeliharaan berdasarkan rancangan SoaML (Service-oriented architecture Modelling Language) smart farming.

## Group's Members

<table>
    <tr align="center">
        <th>No.</th>
        <th>Nama</th>
        <th>NIM</th>
    </tr>
    <tr>
        <td>1.</td>
        <td>Frendy Sanusi</td>
        <td>18221041</td>
    </tr>
    <tr>
        <td>2.</td>
        <td>Fawwaz Abrial Saffa</td>
        <td>18221067</td>
    </tr>
    <tr>
        <td>3.</td>
        <td>Jonathan Arthurito Aldi Sinaga</td>
        <td>18221079</td>
    </tr>
    <tr>
        <td>4.</td>
        <td>Rasyadan Faza Safiqur Rahman</td>
        <td>18221103</td>
    </tr>
    <tr>
        <td>5.</td>
        <td>Hugo Benedicto Tanidi</td>
        <td>18221131</td>
    </tr>
</table>

## Tech Stack

- ExpressJS v4.17.21
- NodeJS v20.10.1
- MongoDB
- Prisma v5.6.0

## How to run

1. Clone respository ini

2. Masuk ke directory

```
cd /intelligente-landwirtschaft-backend
```

3. Buat file .env yang berisikan

```
DATABASE_URL=<your_database_url>
SECRET_AUTH_KEY=<your_secret_token_for_frontend>
```

4. Jalankan aplikasi menggunakan command berikut

```
npm install
npm run dev
```

5. Service berjalan pada http://localhost:8000 pada browser Anda

## API Endpoints

### Seeds API

| No  | HTTP Method | URL       | Description                          |
| --- | ----------- | --------- | ------------------------------------ |
| 1   | GET         | /seed     | Fetches all seeds in the database    |
| 2   | GET         | /seed/:id | Fetches seed with id                 |
| 3   | POST        | /seed     | Creates new seed in the database     |
| 4   | PUT         | /seed/:id | Updates seed with id in the database |
| 5   | DELETE      | /seed/:id | Deletes seed from the database       |

### Fields API

| No  | HTTP Method | URL        | Description                           |
| --- | ----------- | ---------- | ------------------------------------- |
| 1   | GET         | /field     | Fetches all fields in the database    |
| 2   | GET         | /field/:id | Fetches field with id                 |
| 3   | POST        | /field     | Creates new field in the database     |
| 4   | PUT         | /field/:id | Updates field with id in the database |
| 5   | DELETE      | /field/:id | Deletes field from the database       |

### Monitor Logs API

| No  | HTTP Method | URL               | Description                                 |
| --- | ----------- | ----------------- | ------------------------------------------- |
| 1   | GET         | /monitor          | Fetches all monitor logs in the database    |
| 2   | GET         | /monitor/:fieldId | Fetches all monitor log for fieldId         |
| 3   | POST        | /monitor          | Creates new monitor log in the database     |
| 4   | PUT         | /monitor/:id      | Updates monitor log with id in the database |
| 5   | DELETE      | /monitor/:id      | Deletes monitor log from the database       |

### Deployment
Buka deployment pada link https://intelligente-landwirtschaft-be.up.railway.app
