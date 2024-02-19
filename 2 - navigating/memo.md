<div align="center">
  <image src="../vim.png" height="100" width="100" />
  <h1>Navigating 🧪</h1>
</div>

> Press `ESC` to enter normal mode (block cursor).

### Basic Movement

- `k`: Move up
- `l`: Move right
- `j`: Move down
- `h`: Move left

#### Word Navigation

- Prefer using `w` / `b` instead of smashing "llll" and "hhhh"
- `b` / `w`: Move to the previous / next word or punctuation chars
- `ge` / `e`: Move to the previous / next end of punctuation chars

#### Repeating Moves

- Moves can be repeated using `{number}M`
- Example: `"j j j"` = `"2j j"` = `"3j"`

### Line Navigation

- `0`: Start of line
- `^`: Start of line (after whitespace)
- `$`: End of line

### Document Navigation

- `gg`: First line
- `G`: Last line
- `:{number}`: Go to line `{number}`

### Block navigation

- `}`: Next empty line
- `{`: Previous empty line
- `%`: Go to matching braces [{()}]

### Character Navigation

- `f{character}`: Move to the next `{character}`
- `t{character}`: Move to just before the next `{character}`
- `F{character}`: Move to the previous `{character}`
- `T{character}`: Move to just before the previous `{character}`

### Search for pattern (text/regex)

- `/{what}`
- `n`: Next matching search pattern

<a href="../3 - Editing/memo.md">Editing</a>
