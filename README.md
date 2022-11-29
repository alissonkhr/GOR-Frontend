# GOR-Frontend
## Gamers, On Record
>React app created using the RAWG API, Flask, Node.js, and Material UI.
<br />
I have always liked video games and wanted to share that with others, as well as connect with them on the subject! I thought it would be a fun idea to make an app where people could just look at games if they wanted or they could also talk about them and see what others are playing or talking about as well. Users will be able to register and log in to create a post about games of their choosing and browse through other posts from different users. Users can also vist this app to search for games and details on them, provided by data from RAWG API, https://api.rawg.io/. On a side note, the color theme of grey and purple tones was inspired by Twitch.tv which is a livestreaming content site, primarily of gaming content, and I felt it was fitting for the concept I had for this app!

## If Running Locally:
>Install and follow documentation steps for...
- Python
- Flask
- Node.js
- Create React app
- Backend: https://github.com/alissonkhr/GOR-Backend

## User Stories
- As a user or registered user, I want to be able to browse the different games using the populated data or searching for it myself, so that I can get more details about the one I am looking for.
- As a user or registered user, I want to be able to view a page for the game that was selected so I can get more information about it.
- As a user or registered user, I want to be able to see the discussions from other users about the games so I can get a sense of what other users think about them.
- As a registered user, I want to be able to create a discussion entry about a game so other users know what I think about it.
- As a registered user, I want to be the only one that has the ability to delete or edit my posts so that no other users can remove or change it.

## Wireframes
- [Main Page Sketch](https://media.git.generalassemb.ly/user/43147/files/e3b95977-9734-47ac-8e11-25c91d3f0b03)
- [Game Show Page Sketch](https://media.git.generalassemb.ly/user/43147/files/3b960757-e662-47ee-8377-8333e9dbd114)
- [Post Index Page Sketch](https://media.git.generalassemb.ly/user/43147/files/b74ece6c-453f-437a-b311-00089d161226)

## Entity Relationship Diagram
[Linked Here](https://lucid.app/lucidchart/7cdce809-de93-4355-ad41-a8da50a1fef5/edit?page=0_0&invitationId=inv_2a63b604-4ff5-4b55-8938-398c78d00ffa#)

## Unsolved Problems/Future Features
- Fix update and delete options for posts to be only authenticated if they belong to the current user.
- Implement the video clips and other game details on the show page.
- Make posts and game show pages relational to where the components populate on their show pages if they have the same id's.
