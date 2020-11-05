# Jacob Dental Group

## Use the dev branch

## to switch from main to

```git
git add . && git commit -m "switching to dev" && git checkout -b dev
```

### Generate a random secret

- open the terminal, type "node", hit enter
- next, input the following:

```git
require('crypto').randomBytes(64).toString('hex')
```
