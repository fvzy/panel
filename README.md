[![Logo Image](https://cdn.pterodactyl.io/logos/new/pterodactyl_logo.png)](https://sekaihost.online)
#### INSTALLATION/UPDATE INSTRUCTIONS
================================
```bash
1. Install Pterodactyl. (Not required with a previous installation of Pterodactyl/Professional)
```
```bash
2. Put Pterodactyl in maintenance mode. (Optional but recommended)
	- php artisan down

2. Copy this ZIP archive to your host's `/var/www` directory.
```
```bash
3. Install unzip, node and yarn. Unless you know what you're doing, you should get the LTS version of Node.
    - Debian/Ubuntu: sudo apt install unzip
    - https://github.com/nodesource/distributions/blob/master/README.md
    - https://yarnpkg.com/getting-started/install
```
```bash
4. Extract the ZIP archive into "pterodactyl".
	- unzip ../Professional.zip

4a. If you're coming from Professional 1.5.3 or earlier, you'll need to replace your package.json and
    yarn.lock with versions from stock Pterodactyl. For your convenience, they've been provided in the
    "original" folder.
```
```bash
5. Install dependencies and build the panel.
    - yarn install
    - yarn build:production
```
```bash
6. Clear your view cache to apply PHP changes.
    - php artisan view:clear
```
```bash
7. Disable maintenance mode.
    - php artisan up
```
