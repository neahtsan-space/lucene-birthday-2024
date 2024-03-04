# Lucene Birthday 2024


## **Run in local**


### For production , Clone from this version
-   Due to latest commit is only for readme update
  
``` git clone https://github.com/neahtsan-space/lucene-birthday-2024.git  ```
``` git checkout 79949b6dd0f2eb741bc8e5d4a084a08f6840a1f4 ```

### Frontend ( Next JS )
- change directory to ./frontend
- Setup an enviroment
- create a .env.local file in ./frontend with this content
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3080/ (Assume you use our Backend)
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY=(get it from google reCAPTCHA)
    RECAPTCHA_SECRET_KEY=(get it from google reCAPTCHA)
    ```
- Register to reCAPTCHA, create site ky & secret key (also add localhost to reCAPTCHA domain)

- Install dependencies by running
  
  ```
  yarn install or npm install
  ```
- Run the application in local by running

  ```
  yarn dev or npm run dev
  ```
#### All available path

-  **A page that show all wish in a form of grid**
    ```
    /view-all-wish
    ```
-  **A credit page for contributors**
    ```
    /credit
    ```
-  **A meme page with popcat minigame**
    ```
    /popcat
    ```
#### Important features

-   **create wish card**
    a wish card that contain 2 stickers and wish text
-   **view all wish card**
    look up all wish cards that has been sent
-   **search a wish card**
    find a wishcard by sender name
-   **recent wish card**
    show recent 4 wish cards
#### Configuration

-   **CSS**
    color and size of content defined in css directory 
-   **Params**
    text and linkurl defined in params directory
### Backend ( Nest JS )
- change directory to ./backend
- Setup an enviroment
- create a .env file in ./backend with this content
   ```
    DB_URI=(your mongodb connection string)
    ```
-  Register to MongoDB Atlas, create a cluster and put the connection URI in DB_URI

- Install dependencies by running
  
  ```
  yarn install or npm install
  ```
- Run the application in local by running

    ```
    yarn start:dev or npm run start:dev
    ```
#### All available RestAPI

-   **fetch all data from mongoDB database**
    ```
    GET /wish-card
    ```
-   **create new wish card **
    >require six parameters [name, wish, stickerUp, stickerDown, picture, borderColor : string]
    >
    ```
    POST /wish-card/new
    ```
-   **fetch a data using sender name**
    ```
    GET /wish-card/search
    ``` 
-   **fetch 4 recent data**
    ```
    GET /wish-card/lastest-four
    ```
-   **update a wishcard**
    >require two parameters [name, wish : string]
    >
    ```
    PUT /wish-card/update
    ```
-   **delete a wish card**
    >require a parameter [name : string]
    >
    ```
    DELETE /wish-card/delete
    ```
-   **delete all wish card from database**
    ```
    DELETE /wish-card/nuclear-option
    ```
-   **fetch all wish card and compare with slang database whether it has a slangword**
    ```
    GET /wish-card/slang-check
    ```