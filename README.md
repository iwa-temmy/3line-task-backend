<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<img src="./src/assets/logo.svg " alt="Logo" height=50">
<h3 align="center">3Line Backend Assessment Task</h3>

  <p align="center">
    A simple REST API built with Node.js and Express for fetching and displaying user roles, developed as part of the assessment for the role of a Backend Engineer at 3Line.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies">Technologies Used</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#api-endpoints">API Endpoints</a></li>
        <li><a href="#conventions-followed">Conventions Followed</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#working-on-the-project">Working on the Project</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A lightweight REST API that serves user role data — including role name, type, status, date created, and associated users — structured to match a role management dashboard UI. The API supports filtering by role `status` and `type`, and includes interactive Swagger documentation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies Used

- **Runtime:** Node.js
- **Framework:** Express
- **API Docs:** Swagger UI Express + Swagger JSDoc
- **Deployment:** Vercel

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Project Structure

    .
    ├── src                             # All project source files
    │   ├── controllers
    │   │   └── rolesController.js      # Business logic for role endpoints
    │   ├── data
    │   │   └── roles.js                # Mock roles data
    │   ├── routes
    │   │   └── roles.js                # Route definitions with Swagger JSDoc annotations
    │   ├── swagger.js                  # Swagger/OpenAPI spec configuration
    │   └── index.js                    # Express app entry point
    ├── .gitignore
    ├── package.json                    # Project metadata, dependencies and scripts
    ├── vercel.json                     # Vercel deployment configuration
    └── README.md

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### API Endpoints

| Method | Endpoint                   | Description                                                 |
| ------ | -------------------------- | ----------------------------------------------------------- |
| `GET`  | `/api/roles`               | Fetch all roles                                             |
| `GET`  | `/api/roles?status=Active` | Filter roles by status (`Active` / `Inactive`)              |
| `GET`  | `/api/roles?type=DEFAULT`  | Filter roles by type (`DEFAULT`, `CUSTOM`, `SYSTEM-CUSTOM`) |
| `GET`  | `/api/roles/:id`           | Fetch a single role by ID                                   |

Interactive documentation is available at:

```
http://localhost:8080/api/docs
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Conventions Followed

- All folders are lowercase.
- File names are camelCase (`rolesController.js`, `swagger.js`).
- Route files use the resource name as the filename (e.g. `roles.js`).
- Controllers handle all business logic; routes stay thin.
- Mock data is isolated in `src/data/` to make it easy to swap for a real database layer.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow these steps to get a local copy up and running.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/iwa-temmy/3line-task-backend.git
   ```
2. cd into the project
   ```sh
   cd 3line-task-backend
   ```
3. Install packages
   ```sh
   npm install
   ```
4. Start the development server (with auto-reload)
   ```sh
   npm run dev
   ```
5. Start the production server
   ```sh
   npm start
   ```

The server runs on `http://localhost:8080` by default. Set a `PORT` environment variable to override.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Working on the Project

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. To add a new resource, create its data file in `src/data/`, controller in `src/controllers/`, and route in `src/routes/`, then register the route in `src/index.js`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/iwa-temmy/3line-task-backend.svg?style=for-the-badge
[contributors-url]: https://github.com/iwa-temmy/3line-task-backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/iwa-temmy/3line-task-backend.svg?style=for-the-badge
[forks-url]: https://github.com/iwa-temmy/3line-task-backend/network/members
[stars-shield]: https://img.shields.io/github/stars/iwa-temmy/3line-task-backend.svg?style=for-the-badge
[stars-url]: https://github.com/iwa-temmy/3line-task-backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/iwa-temmy/3line-task-backend.svg?style=for-the-badge
[issues-url]: https://github.com/iwa-temmy/3line-task-backend/issues
