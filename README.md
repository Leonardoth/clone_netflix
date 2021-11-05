My clone of the Netflix site

## Approach:

Mobile First

## Technologies:

- React
- Sass

### Todo:

- Add Fonts
- Change Favicon
- Fix React Warnings
- Progress bar for shows
- Cleanup unused assets/code
- Use lorem Picsum for every image.
- Finish desktop lists (too small atm)
- Get better icons, same stroke width, more uniform.
- Banners be dinamically, get random banner from array, use it's tags/image, show mobile or full image dependig on device.

- ~~Add icons for More page~~
- ~~Fix height/scrollable screen Soon~~
- ~~Add Soon to data, fill dynamically~~
- ~~Fix spacing of ::before on Soon screen~~
- ~~Change Icons for Footer, banner and List~~

## Bugs:

## Learned:

- Problem: Adding the separators for the tags in the "Soon" page.

  - Tried:

    - using ::before and ::after, but those wouldn't act as a flexitem correctly.
    - adding padding to the pseudoelements, but it would break if there were more tags to handle. (Not good for dynamic data)

  - Solution:
    - Creating a new array and inserting the separators, as a new item, without messing with the first array of tags.
    - Used a css selector nth-of-type(2n) to style them, to select every even element, that will always be a separator.
