# Project Starter Files

### Description

These are the files I use when I'm starting a new project.

## Installation

1. Clone the repository
2. [Install Grunt](http://gruntjs.com)
3. Run `npm install` in the terminal
4. If you don't have a server running already, run `php -S localhost:8080 -t .` in the terminal

## Usage

This is the basic structure of the files inside Corkscrew:

```
assets/
├── css/
│   ├── app.css
│   ├── fonts.css
│   ├── stylesheets/
│   │   ├── manifest.scss
│   │   ├── base/
│   │   ├── config/
│   │   ├── layout/
│   │   ├── modules/
│   │   ├── vendor/
├── images/
│   ├── .gitkeep
├── js/
│   ├── app.js
│   ├── app.utilities.js
│   ├── vendor/
│   │   ├── polyfill.addeventlistener.js
│   │   ├── polyfill.indexof.js
│   │   ├── polyfill.matches.js
│
tasks/
├── options/
│   ├── *.js
├── custom.js
├── dev.js
│
.editorconfig
.gitignore
Gruntfile.js
LICENSE
index.html
package.json
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits

- [Tim Wright](http://github.com/timwright12) ( [@csskarma](http://twitter.com/csskarma) )

## License

Code and documentation are released under the MIT license.
