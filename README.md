# Jacob Dental Group

## Use the dev branch

## to switch from main to dev

```git
git add . && git commit -m "switching to dev" && git checkout -b dev
```

### Generate a random secret

- open the terminal, type "node", hit enter
- next, input the following:

```git
require('crypto').randomBytes(64).toString('hex')
```

---

title: Configuring WordPress with Amazon LightSail
slug: lesson_00.08
description: Configuring a WordPress Instance with Amazon LightSail.
role: "CONFIGURING A WORDPRESS ENVIRONMENT"
privateVideoUrl:
isPublicLesson: true

---

## Create Instance (Linux)

- https://www.youtube.com/watch?v=1GsW3QUqDn4
- LightSail is essentially a GUI built on top of Cloudfront
- Configure Static IP and attach to newly created Instance
- Then, go back to networking on the home page and create a distribution
  - WordPress cache behavior preset?
  - LightSail has taken configuration you'd otherwise have to do inside of Cloudfront interface and they've come up with
  - Can select various preset options based on website type (dynamic, static, best for WP, etc)
  - choose 50GB/month plan, free for first year, \$2.50/month thereafter
  - if you exceed 50GB/month, then wordpress will charge you a minimum of \$0.09 USD per GB over (varies by AWS Region)
  - keep distribution content pulling from origin as http if setting up from scratch (yes)
  - can reset the cache under Cache tab -- good to do if making major modifications to your WP site
- Custom Domains
  - this is where https can be configured
  - must have a valid SSL certificate to enable custom domains
  - each wordpress instance allows for the creation of an SSL/TLS certificate
  - for example `windy-city-headless.me`
  - as an alternate domain, use the `www.windy-city-headless.me` url
  - Purchase the domain, using namecheap, for example
  - create two CNAME records for each domain with generated values (autogenerated)
  - Navigate to advanced DNS, and add two HOST RECORDS
  - this asks for a CNAME record type and gives a name and a value
  - omit the appended domain name from the name portion of the CNAME record or it will be duplicated
  - namecheap automatically appends the name of your domain onto the end of the CNAME record name
  - for the www. record, keep only the `www` snippet appended 👍
  - Takes 30-60min for validation to complete
  - https://lightsail.aws.amazon.com/ls/docs/en_us/articles/verify-tls-ssl-certificate-using-dns-cname-https
- After this is validated, toggle the switch to enable custom domains
  - It will state that your distribution always serves content using its default domain name
    - xyz123.cloudfront.net
  - Copy this value, then head back to namecheap
  - add two more records
    - one CNAME record with the host having the `www` subdomain prepended
    - the other as an ALIAS record to point to the root domain by Host `@` (CNAME records do not support this -- womp womp)
      - both of their values should target the `xyz123.cloudfront.net` address of your default domain name distribution
- ONLY TOOK 11 MINUTES (528-539)
- ~~Custom Nameservers with Namecheap (revisit, used alternative method, can ignore this part for now)~~
  - navigate to nameservers on the domain control panel (under domains)
  - choose "custom DNS"
  - enter the four `ns-` nameservers specified by amazon lightsail here
  - revisit this in docs
- _While this is validating_, head to the home screen and create a DNS zone using your custom domain name
  - Add two A records to this, pointing at (resolves to) your distribution (distribution-1)
  - Then, create two CNAME records, and repeat the process you completed above

## Get wp-admin portal password for your instance via Bitnami

- click connect using SSH
- When the Bitnami terminal starts, enter the following

```git
cat $HOME/bitnami_application_password
```

- copy the returned password
  - insert bitnami terminal jpg here
- enter your username and password into wp-admin portal

```
username: user
password: <Value returned from executing bitnami command above>
```

## HTTPS connections to Amazon LightSail HWP Server

- Connect to Linux instance using SSH
- Bitnami terminal opens
- Enter the following to access wp-config.php

```git
sudo vi /opt/bitnami/apps/wordpress/htdocs/wp-config.php
```

- this opens VIM
- enable -- INSERT -- mode

```vim
I
```

- Delete the following two lines of code

```vim
define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/');
define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/');
```

- Add the following in its place

```vim
define('WP_SITEURL', 'https://' . $_SERVER['HTTP_HOST'] . '/');
define('WP_HOME', 'https://' . $_SERVER['HTTP_HOST'] . '/');if (isset($_SERVER['HTTP_CLOUDFRONT_FORWARDED_PROTO'])
&& $_SERVER['HTTP_CLOUDFRONT_FORWARDED_PROTO'] === 'https') {
$_SERVER['HTTPS'] = 'on';
}
```

- Save the file; press escape, then

```
:wq!
```

- restart the apache web server

```git
sudo /opt/bitnami/ctlscript.sh restart Apache
```

## Useful supps

- https://github.com/arunoda/bulletproof-next-app/tree/using-dynamic-imports-final

### Generate a random secret

- open the terminal, type "node", hit enter
- next, input the following:

```git
require('crypto').randomBytes(64).toString('hex')
```

- this returns a 122-character hexadecimal string

## Accessing wp-config.php through bitnami in Amazon LightSail

- open bitnami and enter

```git
sudo vim /opt/bitnami/apps/wordpress/htdocs/wp-config.php
```

- this opens VIM
- Next, press `I`

```vim
I
```

- this enables --&nbsp;INSERT&nbsp;-- mode in Vim
- proceed with editing, define `GRAPHQL_JWT_AUTH_SECRET_KEY` towards the bottom of the file

```php
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

define('WP_TEMP_DIR', '/opt/bitnami/apps/wordpress/tmp');
define('GRAPHQL_JWT_AUTH_SECRET_KEY', '122-digit-hex-value generated using node terminal');
```

- to save changes, enter

```vim
:wq!
```

- to exit without saving, enter

```vim
:qa!
```

- this successfully saves and exits the Vim editor
- if no changes are required after opening the Vim editor, then

```git
:qa!
```

- this exits the vim editor without saving any changes
- whew, lad
- https://www.vim.org/
- https://developer.wordpress.org/cli/commands/

## Enable WPGraphQL JWT Authentication Plugin via WPGraphiQL plugin

- after enabling, open GraphiQL interface

```gql
mutation Login {
	login(
		input: {
			clientMutationId: "uniqueId"
			password: "insert password"
			username: "nextjsheadless"
		}
	) {
		refreshToken
	}
}
```

- this returns a refresh token value for the WORDPRESS_AUTH_REFRESH_TOKEN key in .env.local
- set the value of the WORDPRESS_PREVIEW_SECRET key to any url-friendly string

```ts
href={`localhost:3000/api/preview?secret=${process.env.WORDPRESS_PREVIEW_SECRET}&id=${draft.id}`}
```
