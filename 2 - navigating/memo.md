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
- `b` / `w`: Move to the previous / next word
- `ge` / `e`: Move to the previous / next end of word

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

### Character Navigation

- `f{character}`: Move to the next `{character}`
- `t{character}`: Move to just before the next `{character}`

### Search for pattern (text/regex)

- `/{what}`
- `n`: Next matching search pattern

<a href="../3 - Editing/memo.md">Editing</a>
