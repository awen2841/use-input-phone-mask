# useInputPhoneMask

## Installation

#### Yarn

```bash
yarn add use-input-phone-mask
```

#### NPM

```bash
npm install use-input-phone-mask
```

-----
[![npm](https://img.shields.io/npm/v/use-input-phone-mask?style=flat)](https://www.npmjs.com/package/use-input-phone-mask)
-----

Then, require it and use it.

```js
import React from 'react'
import { useInputPhoneMask } from 'use-input-phone-mask';

export default () => {
  const { ref: inputRef, onChange } = useInputPhoneMask({ mask: '+# (###)###-####' });
  
  return (
    <div>
      <input ref={inputRef} onChange={onChange} />
    </div>
  )
}
```

## Example

To see an example of the code running, follow these steps:

1. Clone the repo, `git clone https://github.com/awen2841/use-input-phone-mask.git`
1. `cd use-input-phone-mask/exemple`
1. `npm install`
1. `npm run storybook`
1. Open [http://localhost:6001](http://localhost:6001)

The code of the example is in [`exemple`](https://6372bcd0ee690db14a761db2-ycvwbtcbzk.chromatic.com/).
