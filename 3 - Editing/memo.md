<div align="center">
  <image src="../vim.png" height="100" width="100" />
  <h1>Editing 🧪</h1>
</div>

> Replace means delete then enter insert mode

- `i`: Insert mode
- `.`: Repeat previous motion

### Clipboard

- `dd`: Delete line (cut)
- `cc/S`: Replace line (cut)
- `yy`: Yank line (copy)

- `y{M}`: Yank resulting {M}
- `d{M}`: Delete resulting {M}
- `c{M}`: Replace resulting {M}

- `p/P`: Paste before/after

### Edit

- `o/O`: next/previous line
- `A`: Append from end of line
- `I`: Append from start of line
- `D/C`: Delete/Replace remaining

- `r`: Replace one character
- `R`: Enter replace mode

- `u`: Undo changes
- `c-r`: Redo changes

### Misc

- `~`: Toggle _UPPERCASE_ on selection
- `c-a`: Increment number
- `c-x`: Decrement number
- `g c-{a or x}`: increment selected in an ordered way

<a href="../4 - Visual mode/memo.md">Visual mode</a>
