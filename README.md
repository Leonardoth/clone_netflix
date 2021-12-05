My clone of the Netflix site

## Approach:

Mobile First

## Technologies:

- React
- Sass

### Todo:

- Fix React Warnings
- Add Info icon to ShowInfo (mobile)
- Progress bar for shows
- Cleanup unused assets/code
- Get better icons, same stroke width, more uniform.
- Add other pages for desktop (series, movies, trending...)
- Fix not being able to scroll when hovering shows (Desktop) (Maybe using only css?)
- Clean CSS, maybe find another way of doing the mobile/desktop adaptation.

- ~~Add Fonts~~
- ~~Change Favicon~~
- ~~Hide scrollbar!~~
- ~~Add icons for More page~~
- ~~Hide Mobile bar on Desktop~~
- ~~Netflix Header (Desktop only);~~
- ~~Use lorem Picsum for every image.~~
- ~~Fix height/scrollable screen Soon~~
- ~~Add Soon to data, fill dynamically~~
- ~~Finish desktop lists (too small atm)~~
- ~~Fix spacing of ::before on Soon screen~~
- ~~Change Icons for Footer, banner and List~~
- ~~Only show "PlayIcon" in the list being hovered.~~
- ~~Fix Soon page on mobile (button varies position on different devices)~~
- ~~Banners be dinamically, get random banner from array, use it's tags/image, show mobile or full image dependig on device.~~
- ~~Fix the padding on Desktop? On the Netflix site, everything has a padding (or appears to have) of 100px from the left.~~

## Bugs:

## Learned:

- Challenge: Adding the separators for the tags in the "Soon" page.

  - Tried:

    - using ::before and ::after, but those wouldn't act as a flexitem correctly.
    - adding padding to the pseudoelements, but it would break if there were more tags to handle. (Not good for dynamic data)

  - Solution:
    - Creating a new array and inserting the separators, as a new item, without messing with the first array of tags.
    - Used a css selector nth-of-type(2n) to style them, to select every even element, that will always be a separator.

- Challenge: Using github pages with React Js

  - Solution:

    - Installed gh-pages (yarn add gh-pages --save-dev)
    - Added the lines (inside scripts):

    ```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    ```

    - Added the homepage (at the first level):

    ```
    "homepage": "https://leonardoth.github.io/{repository-name}/",
    ```

    - Ran "yarn deploy"
    - Commited the changes and pushed to the repository, it automatically created a branch (gh-pages) and went online on the homepage specified.

- Challenge: Using hover both on web and mobile
  Web is fine, but hover doesn't work as simple on mobile, i wanted to only show the playbutton, when the list is being hovered.

  - Solution:
    - By using element:hover, element:active, it'll work both for mobile and for web.
