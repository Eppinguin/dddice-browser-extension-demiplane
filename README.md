<!-- @format -->

# dddice Browser Extension - Demiplane Integration Fork

This is a custom fork that enables [dddice](https://dddice.com) integration on Demiplane. With this fork, you can roll 3D dice directly in the Charactersheet for multiple game systems including Daggerheart, CosmereRPG, Avatar Legends, and other systems.

## Supported Systems on Demiplane

-   Daggerheart (with full special dice support)
-   CosmereRPG (with Plot Die Support)
-   Avatar Legends (Miss, Weak and Strong Hits)
-   Other systems with standard dice mechanics should work as well

## Usage Notes

-   Daggerheart and CosmereRPG have system-specific dice settings in the Settings Menu, allowing you to customize the appearance of special dice (like Hope and Fear dice for Daggerheart, or Plot Die for CosmereRPG)
-   Game-specific dice settings are only available when viewing the corresponding game's character sheet and may require reloading the site
-   Due to dddice limitations, disadvantage is not rendered as a die roll but as a modifier (dddice does not support subtracting dice rolls)

# Original Readme

# dddice Browser Extension

Roll 3D dice from your favorite VTT! Integrates [dddice](https://dddice.com) with browser-based virtual tabletops,
providing you with a seamless dice rolling experience. Use dddice to overlay dice on your stream, or simply share the fun
of dice rolling in a private room.

Supports:

-   D&D Beyond
-   Roll20
-   Dungeon Master's Vault

## Installation

Install this extension for [Chrome](https://chrome.google.com/webstore/detail/dddice/npmficphbhbhebhjfekjopgkpojjcfem) or
[Edge](https://microsoftedge.microsoft.com/addons/detail/dddice/lphfbgpflpoenhfbffkmpjpepmcpcnnj).

## Development

If you would like to contribute to this extension (i.e. add support for your favorite VTT), follow the instructions
below.

You will need [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/).

### Chromium Browsers

```shell
# Clone this repository
git clone git@github.com:dddice/dddice-browser-extension.git

# Install dependencies
npm i

# Start the browser extension for chromium browsers
npm run start
```

In Chrome, navigate to `chrome://extensions/` (`edge://extensions` in Edge) and toggle **Developer Mode** in the
upper-right corner (bottom-left in Edge).

Click **Load unpacked** and locate the `manifest_v3/` directory that was built in this repository.

### Firefox

```shell
# Clone this repository
git clone git@github.com:dddice/dddice-browser-extension.git

# Install dependencies
npm i

# Start the browser extension for chromium browsers
npm run start:firefox
```

You need the developer version of Firefox. Navigate to `about:addons/` then click the cog button
and select "Debug Add-ons"

Click **Load temporary addon** and locate the `manifest_v2/` directory that was built in this repository.

### Debug Logging

In order to enable debugging messages, which show in the console, you must set the `localStorage` key `debug` to `*`. This
can be done by entering the following code in the browser's console:

```javascript
localStorage.setItem('debug', '*');
```

If you plan on contributing your changes upstream (always appreciated!), then do the following:

-   To conform to our code style, either run `npx husky install` to install our git hooks, or run
    `npx prettier src --write && npx eslint src --fix` before comitting.
-   Rebase/squash your commits to submit one clean commit.
-   Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) prefixes in your commit message. See
    examples in our `git log`. This helps our automation update the changelog. Here's a few examples:
    -   `feat:` for new features.
    -   `fix:` for general fixes.
    -   `fix(d&db):`, `fix(roll20):`, `fix(dmv):` or `fix(pb2e):` for D&D Beyond, Roll20, Dungeon Master's Vault, or
        Pathbuilder 2e fixes, respectively.

If you have any questions at all, please join our [Discord server](https://discord.gg/VzHq5TfAr6). We'll be happy to help
in any way we can.

## License

MIT
