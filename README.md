My clone of the Netflix site

## Approach:

Mobile First

## Technologies:

- React
- Sass

### Todo:

- Add Fonts
- Change Favicon
- Hide scrollbar!
- Fix React Warnings
- Progress bar for shows
- Cleanup unused assets/code
- Netflix Header (Desktop only);
- Get better icons, same stroke width, more uniform.
- Fix not being able to scroll when hovering shows (Desktop)
- Clean CSS, maybe find another way of doing the mobile/desktop adaptation.

- ~~Add icons for More page~~
- ~~Hide Mobile bar on Desktop~~
- ~~Use lorem Picsum for every image.~~
- ~~Fix height/scrollable screen Soon~~
- ~~Add Soon to data, fill dynamically~~
- ~~Finish desktop lists (too small atm)~~
- ~~Fix spacing of ::before on Soon screen~~
- ~~Change Icons for Footer, banner and List~~
- ~~Only show "PlayIcon" in the list being hovered.~~
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

    - Installed gh-pages (npm install gh-pages --save-dev)
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
