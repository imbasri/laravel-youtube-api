## Laravel and Inertia.js with React

This project uses Laravel with Inertia.js and React to create a modern single-page application (SPA).

### Technologies Used

<div align="center">

|                                                                                   |                                                                          |
| :-------------------------------------------------------------------------------: | :----------------------------------------------------------------------: |
| <img src="https://laravel.com/img/logomark.min.svg" height="100px" width="100px"><br>Laravel | <img src="https://reactjs.org/logo-og.png" height="100px" width="100px"><br>React |

</div>

### Demo API

```
-- ROUTE WEB API (VIEW) --

| HTTP Method | Endpoint       | Description                  |
|-------------|----------------|------------------------------|
| GET         | /              | Display the dashboard        |
| GET         | /{dashboard}   | Display a specific dashboard |
                               | Default to dashboard         |
| GET         | /report        | Display the report page      |
| GET         | /management    | Display the management page  |
```

```
-- ROUTE API (ONLY API) --
| HTTP Method | Endpoint                        | Description                       |
|-------------|---------------------------------|-----------------------------------|
| GET         | /youtube/channel/{channel_id}   | Get details of a specific channel |
| GET         | /youtube/videos/{channel_id}    | Get videos of a specific channel  |
| GET         | /youtube/statistic/{channel_id} | Get statistics of a specific channel |
```

#### Image

![Demo Image](/demo/demo.png)

#### Video

![Demo Video](/demo/Demo.gif)

### Installation

To get started, follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/your-username/your-repo.git
    ```
2. Navigate to the project directory:
    ```
    cd your-repo
    ```
3. Install the dependencies:
    ```
    composer install
    npm install
    ```
4. Set up the environment file:
    ```
    cp .env.example .env
    php artisan key:generate
    ```
5. Run the migrations:
    ```
    php artisan migrate
    ```

### Usage

To start the development server, run:

```
php artisan serve
npm run dev
```

### Resources

-   [Laravel Documentation](https://laravel.com/docs)
-   [Inertia.js Documentation](https://inertiajs.com/)
-   [React Documentation](https://reactjs.org/docs/getting-started.html)
