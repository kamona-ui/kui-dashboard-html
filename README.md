## K UI Admin Dashboard Template (HTML)

> ⚠️ This template is not finished yet and still in design phase. We are building it in public.

### [Live preview](https://kamona-ui.github.io/kui-dashboard-html/)

### [Figma file](https://www.figma.com/community/file/1019844542917981418/)

##### [Vue SFC version](https://github.com/kamona-ui/kui-dashboard-vue/)

##### [Vue JSX version](https://github.com/kamona-ui/kui-dashboard-vue-jsx/)

##### To get started:

```bash
# 1. Clone the repository:
git clone https://github.com/kamona-ui/kui-dashboard-html.git

cd kui-dashboard-html

# 2. Install the dependencies:
npm install # Using npm
# or
yarn # Using Yarn

# 3. Start the development server:
npm run dev # Using npm
# or
yarn dev # Using Yarn
```

##### Build

```bash
yarn build # or npm run build

# Preview
yarn previw # or npm run preview
```

##### CLI:

```bash
# Display available commands.
yarn cli help

Usage: kui-dashboard-html [options] [command]

Options:
  -V, --version     output the version number
  -h, --help        display help for command

Commands:
  html [options]    Compile `Edge` files to html
  js [options]      Build javascript
  vendor [options]  Copy vendor files from `node_modules` to `public` directory.
  images [options]  Copy images from `src` to `public` directory.
  serve [options]   Serve
  help [command]    display help for command

# Display help for command.
yarn cli html --help

Usage: kui-dashboard-html html [options]

Compile `Edge` files to html

Options:
  -r, --root <root>       Root of `Edge` files (default: "src/edge")
  -i, --input <input...>  Input patterns (default: ["**/*.edge"])
  -o, --output <output>   Output directory (default: "public")
  -d, --data-path <data>  Global data `relative to root` (default: "data/data.js")
  -w, --watch             Watch files
  -a, --all-in-output     Reserve nested structure (default: false)
  -s, --skip <skip...>    Patterns to skip (default: ["**/layouts/**","**/components/**","**/partials/**"])
  -h, --help              display help for command

```
