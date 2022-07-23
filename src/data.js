const info =[
    {
       "file":"public/js/bootstrap.js",
       "issues":[
          {
             "description":"User controlled data in a `$(...)` is an anti-pattern that can lead to XSS vulnerabilities",
             "details":"https://sg.run/W8NL\n\n         72┆ if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)\n          ⋮┆----------------------------------------\n         96┆ $(el).on(\\'click\\', dismiss, this.close)\n          ⋮┆----------------------------------------\n        190┆ this.$element  = $(element)\n          ⋮┆----------------------------------------\n        284┆ var $btn = $(e.target).closest(\\'.btn\\')\n          ⋮┆----------------------------------------\n        286┆ if (!($(e.target).is(\\'input[type=\"radio\"], input[type=\"checkbox\"]\\'))) {\n          ⋮┆----------------------------------------\n        295┆ $(e.target).closest(\\'.btn\\').toggleClass(\\'focus\\', /^focus(in)?$/.test(e.type))\n          ⋮┆----------------------------------------\n        316┆ this.$element    = $(element)\n          ⋮┆----------------------------------------\n        439┆ var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])\n          ⋮┆----------------------------------------\n        510┆ var $target = $($this.attr(\\'data-target\\') || (href = $this.attr(\\'href\\')) && href.replace(/.*(?=#[^\\s]+$)/, \\'\\')) // strip for ie7\n          ⋮┆----------------------------------------\n        555┆ this.$element      = $(element)\n          ⋮┆----------------------------------------\n        557┆ this.$trigger      = $(\\'[data-toggle=\"collapse\"][href=\"#\\' + element.id + \\'\"],\\' +\n          ⋮┆----------------------------------------\n        680┆ var $element = $(element)\n          ⋮┆----------------------------------------\n        700┆ return $(target)\n          ⋮┆----------------------------------------\n        769┆ $(element).on(\\'click.bs.dropdown\\', this.toggle)\n          ⋮┆----------------------------------------\n        782┆ var $parent = selector && $(selector)\n          ⋮┆----------------------------------------\n        935┆ this.$element            = $(element)\n          ⋮┆----------------------------------------\n        988┆ if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true\n          ⋮┆----------------------------------------\n       1241┆ var $target = $($this.attr(\\'data-target\\') || (href && href.replace(/.*(?=#[^\\s]+$)/, \\'\\'))) // strip for ie7\n          ⋮┆----------------------------------------\n       1308┆ this.$element  = $(element)\n          ⋮┆----------------------------------------\n       1310┆  ... $.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport)) ... \\x1b[0m\n          [shortened a long line from output, adjust with --max-chars-per-line]\n          ⋮┆----------------------------------------\n       1310┆  ... this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport)) ... \\x1b[0m\n          [shortened a long line from output, adjust with --max-chars-per-line]\n          ⋮┆----------------------------------------\n       1310┆  ... this.$element) : (this.options.viewport.selector || this.options.viewport)) ... \\x1b[0m\n          [shortened a long line from output, adjust with --max-chars-per-line]\n          ⋮┆----------------------------------------\n       1368┆ obj : $(obj.currentTarget).data(\\'bs.\\' + this.type)\n          ⋮┆----------------------------------------\n       1372┆ $(obj.currentTarget).data(\\'bs.\\' + this.type, self)\n          ⋮┆----------------------------------------\n       1405┆ obj : $(obj.currentTarget).data(\\'bs.\\' + this.type)\n          ⋮┆----------------------------------------\n       1409┆ $(obj.currentTarget).data(\\'bs.\\' + this.type, self)\n          ⋮┆----------------------------------------\n       1571┆ var $tip = $(this.$tip)\n          ⋮┆----------------------------------------\n       1715┆ self = $(e.currentTarget).data(\\'bs.\\' + this.type)\n          ⋮┆----------------------------------------\n       1718┆ $(e.currentTarget).data(\\'bs.\\' + this.type, self)\n          ⋮┆----------------------------------------\n       1904┆ this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)\n          ⋮┆----------------------------------------\n       1904┆ this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)\n          ⋮┆----------------------------------------\n       1999┆ var active = $(selector)\n          ⋮┆----------------------------------------\n       2077┆ this.element = $(element)\n          ⋮┆----------------------------------------\n       2234┆ this.$target = $(this.options.target)\n          ⋮┆----------------------------------------\n       2238┆ this.$element     = $(element)"
          },
          {
             "description":"JQuery's `.html()` is susceptible to Cross Site Scripting (XSS) attacks.  If you're just\n        passing text, consider `.text()` instead. Otherwise, use a  function that escapes HTML such\n        as edX's `HtmlUtils.setHtml()`.",
             "details":"https://sg.run/0Q9B\n\n       1834┆ if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()"
          }
       ]
    },
    {
       "file":"public/js/jquery-3.2.1-min.js",
       "issues":[
          {
             "description":"User controlled data in a HTML string may result in XSS",
             "details":"https://sg.run/4xAx\n\n          2┆  ... \"<a id=\\'\"+u+\"\\'></a><select id=\\'\"+u+\"-\\r\\\\\\' msallowcapture=\\'\\'><option selected=\\'\\'></option></select>\",a.querySelectorAll(\"[msallowcapture^=\\'\\']\").length&&q.push(\" ... \\x1b[0m\n          [shortened a long line from output, adjust with --max-chars-per-line]\n          ⋮┆----------------------------------------\n          2┆  ... \"<a id=\\'\"+u+\"\\'></a><select id=\\'\"+u+\"-\\r\\\\\\' msallowcapture=\\'\\'><option selected=\\'\\'></option></select>\",a.querySelectorAll(\"[msallowcapture^=\\'\\']\").length&&q.push(\" ... \\x1b[0m\n          [shortened a long line from output, adjust with --max-chars-per-line]\n          ⋮┆----------------------------------------\n          2┆  ... \"<a id=\\'\"+u+\"\\'></a><select id=\\'\"+u+\"-\\r\\\\\\' msallowcapture=\\'\\'><option selected=\\'\\'></option></select>\",a.querySelectorAll(\"[msallowcapture^=\\'\\']\").length&&q.push(\" ... \\x1b[0m\n          [shortened a long line from output, adjust with --max-chars-per-line]"
          },
          {
             "description":"User controlled data in a `$(...)` is an anti-pattern that can lead to XSS vulnerabilities",
             "details":"https://sg.run/W8NL\n\n          3┆  ... c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},r ... \\x1b[0m\n          [shortened a long line from output, adjust with --max-chars-per-line]"
          },
          {
             "description":"JQuery's `.html()` is susceptible to Cross Site Scripting (XSS) attacks.  If you're just\n        passing text, consider `.text()` instead. Otherwise, use a  function that escapes HTML such\n        as edX's `HtmlUtils.setHtml()`.",
             "details":" https://sg.run/0Q9B\n\n          3┆  ... f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,\"script\"),Fa),i=h.length ... \\x1b[0m\n          [shortened a long line from output, adjust with --max-chars-per-line]\n          ⋮┆----------------------------------------\n          4┆  ... g.html(d?r(\"<div>\").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each([\"ajaxS ... \\x1b[0m\n          [shortened a long line from output, adjust with --max-chars-per-line]"
          }
       ]
    },
    {
       "file":"setup/setup.go",
       "issues":[
          {
             "description":"Variable err is assigned from two different sources: 'createUsersTable()' and\n        'createProfileTable()'. Make sure this is intended, as this could cause logic bugs if they\n        are treated as they are the same object.",
             "details":" https://sg.run/gL3y\n\n         71┆ err = createUsersTable() //create users table\n         72┆ if err != nil {\n         73┆ \tres = append(res, JsonResp{\n         74┆ \t\tStatus:  \"0\",\n         75┆ \t\tMessage: err.Error(),\n         76┆ \t})\n         77┆ } else {\n         78┆ \tres = append(res, JsonResp{\n         79┆ \t\tStatus:  \"1\",\n         80┆ \t\tMessage: \"Create Users Table Success Please \" + string(loginUrl),\n           [hid 4 additional lines, adjust with --max-lines-per-finding]"
          }
       ]
    },
    {
       "file":"templates/setup.sidebar.html",
       "issues":[
          {
             "description":"Detected a template variable used in an anchor tag with the 'href' attribute. This allows a\n        malicious actor to input the 'javascript:' URI and is subject to cross- site scripting (XSS)\n        attacks. If using a relative URL, start with a literal forward slash and concatenate the\n        URL, like this: href='/{{link}}'. You may also consider setting the Content Security Policy\n        (CSP) header.",
             "details":" https://sg.run/8yOq\n\n         12┆ <a href=\"{{.weburl}}index\">\n          ⋮┆----------------------------------------\n         18┆ <a href=\"{{.weburl}}setup\">"
          },
          {
             "description":"Detected a template variable used in an anchor tag with the 'href' attribute. This allows a\n        malicious actor to input the 'javascript:' URI and is subject to cross- site scripting (XSS)\n        attacks. Use the 'url' template tag to safely generate a URL. You may also consider setting\n        the Content Security Policy (CSP) header.",
             "details":" https://sg.run/4x25\n\n         12┆ <a href=\"{{.weburl}}index\">\n          ⋮┆----------------------------------------\n         18┆ <a href=\"{{.weburl}}setup\">"
          }
       ]
    },
    {
       "file":"templates/template.header.html",
       "issues":[
          {
             "description":"Detected a template variable used in a script tag. Although template variables are HTML\n        escaped, HTML escaping does not always prevent cross-site scripting (XSS) attacks when used\n        directly in JavaScript. If you need this data on the rendered page, consider placing it in\n        the HTML portion (outside of a script tag). Alternatively, use a JavaScript-specific\n        encoder, such as the one available in OWASP ESAPI.",
             "details":"https://sg.run/gLDx\n\n         13┆ <script type=\"text/javascript\" src=\"{{.weburl}}public/js/jquery-3.2.1-min.js\"></script>\n          ⋮┆----------------------------------------\n         14┆ <script type=\"text/javascript\" src=\"{{.weburl}}public/js/bootstrap.min.js\"></script>"
          },
          {
             "description":"Detected a template variable used in an anchor tag with the 'href' attribute. This allows a\n        malicious actor to input the 'javascript:' URI and is subject to cross- site scripting (XSS)\n        attacks. Use the 'url' template tag to safely generate a URL. You may also consider setting\n        the Content Security Policy (CSP) header.",
             "details":"https://sg.run/4x25\n\n          7┆ <link href=\"{{.weburl}}public/css/font-awesome-4.7.0/css/font-awesome.css\" rel=\"stylesheet\">\n          ⋮┆----------------------------------------\n         10┆ <link rel=\"stylesheet\" type=\"text/css\" href=\"{{.weburl}}public/css/open-sans.css\" />\n          ⋮┆----------------------------------------\n         11┆ <link href=\"{{.weburl}}public/css/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n          ⋮┆----------------------------------------\n         16┆ <link href=\"{{.weburl}}public/css/main.css\" rel=\"stylesheet\">"
          },
          {
             "description":"Detected a template variable used in a script tag. Although template variables are HTML\n        escaped, HTML escaping does not always prevent cross-site scripting (XSS) attacks when used\n        directly in JavaScript. If you need this data on the rendered page, consider placing it in\n        the HTML portion (outside of a script tag). Alternatively, use a JavaScript-specific\n        encoder, such as the one available in OWASP ESAPI. For Django, you may also consider using\n        the 'json_script' template tag and retrieving the data in your script by using the element\n        ID (e.g., `document.getElementById`).",
             "details":"https://sg.run/Ge7q\n\n         13┆ <script type=\"text/javascript\" src=\"{{.weburl}}public/js/jquery-3.2.1-min.js\"></script>\n          ⋮┆----------------------------------------\n         14┆ <script type=\"text/javascript\" src=\"{{.weburl}}public/js/bootstrap.min.js\"></script>"
          }
       ]
    },
    {
       "file":"templates/template.sidebar.html",
       "issues":[
          {
             "description":"Detected a template variable used in an anchor tag with the 'href' attribute. This allows a\n        malicious actor to input the 'javascript:' URI and is subject to cross- site scripting (XSS)\n        attacks. If using a relative URL, start with a literal forward slash and concatenate the\n        URL, like this: href='/{{link}}'. You may also consider setting the Content Security Policy\n        (CSP) header.",
             "details":"https://sg.run/8yOq\n\n         12┆ <a href=\"{{.weburl}}index\">\n          ⋮┆----------------------------------------\n         18┆ <a href=\"{{.weburl}}setup\">\n          ⋮┆----------------------------------------\n         27┆ <li><a href=\"{{.weburl}}sqli1\">SQLI 1</a></li>\n          ⋮┆----------------------------------------\n         28┆ <li><a href=\"{{.weburl}}sqli2?uid={{.uid}}\">SQLI 2</a></li>\n          ⋮┆----------------------------------------\n         36┆ <li><a href=\"{{.weburl}}xss1\">XSS 1</a></li>\n          ⋮┆----------------------------------------\n         37┆ <li><a href=\"{{.weburl}}xss2?uid={{.uid}}\">XSS 2</a></li>\n          ⋮┆----------------------------------------\n         44┆ <li><a href=\"{{.weburl}}idor1\">IDOR 1</a></li>\n          ⋮┆----------------------------------------\n         45┆ <li><a href=\"{{.weburl}}idor2\">IDOR 2</a></li>\n          ⋮┆----------------------------------------\n         56┆ <a href=\"{{.weburl}}csa\">\n          ⋮┆----------------------------------------\n         63┆ <a href=\"{{.weburl}}setting\">\n          ⋮┆----------------------------------------\n         68┆ <a href=\"{{.weburl}}logout\">"
          },
          {
             "description":"Detected a template variable used in an anchor tag with the 'href' attribute. This allows a\n        malicious actor to input the 'javascript:' URI and is subject to cross- site scripting (XSS)\n        attacks. Use the 'url' template tag to safely generate a URL. You may also consider setting\n        the Content Security Policy (CSP) header.",
             "details":"https://sg.run/4x25\n\n         12┆ <a href=\"{{.weburl}}index\">\n          ⋮┆----------------------------------------\n         18┆ <a href=\"{{.weburl}}setup\">\n          ⋮┆----------------------------------------\n         27┆ <li><a href=\"{{.weburl}}sqli1\">SQLI 1</a></li>\n          ⋮┆----------------------------------------\n         28┆ <li><a href=\"{{.weburl}}sqli2?uid={{.uid}}\">SQLI 2</a></li>\n          ⋮┆----------------------------------------\n         36┆ <li><a href=\"{{.weburl}}xss1\">XSS 1</a></li>\n          ⋮┆----------------------------------------\n         37┆ <li><a href=\"{{.weburl}}xss2?uid={{.uid}}\">XSS 2</a></li>\n          ⋮┆----------------------------------------\n         44┆ <li><a href=\"{{.weburl}}idor1\">IDOR 1</a></li>\n          ⋮┆----------------------------------------\n         45┆ <li><a href=\"{{.weburl}}idor2\">IDOR 2</a></li>\n          ⋮┆----------------------------------------\n         56┆ <a href=\"{{.weburl}}csa\">\n          ⋮┆----------------------------------------\n         63┆ <a href=\"{{.weburl}}setting\">\n          ⋮┆----------------------------------------\n         68┆ <a href=\"{{.weburl}}logout\">"
          },
          {
             "description":"Detected a template variable used in an anchor tag with the 'href' attribute. This allows a\n        malicious actor to input the 'javascript:' URI and is subject to cross- site scripting (XSS)\n        attacks. Use 'url_for()' to safely generate a URL. You may also consider setting the Content\n        Security Policy (CSP) header.",
             "details":"https://sg.run/Do7o\n\n         28┆ <li><a href=\"{{.weburl}}sqli2?uid={{.uid}}\">SQLI 2</a></li>\n          ⋮┆----------------------------------------\n         37┆ <li><a href=\"{{.weburl}}xss2?uid={{.uid}}\">XSS 2</a></li>"
          }
       ]
    },
    {
       "file":"user/session/session.go",
       "issues":[
          {
             "description":"A session cookie was detected without setting the 'HttpOnly' flag. The 'HttpOnly' flag for\n        cookies instructs the browser to forbid client-side scripts from reading the cookie which\n        mitigates XSS attacks. Set the 'HttpOnly' flag by setting 'HttpOnly' to 'true' in the\n        Options struct.",
             "details":"https://sg.run/4xJZ\n\n         ▶▶┆ Autofix ▶ s/(HttpOnly\\s*:\\s+)false/\\1true/g\n         28┆ session.Options = &sessions.Options{\n         29┆ \tPath:     \"/\",\n         30┆ \tMaxAge:   3600,\n         31┆ \tHttpOnly: false, //set to false for xss :)\n         32┆ }\n          ⋮┆----------------------------------------\n         ▶▶┆ Autofix ▶ s/(HttpOnly\\s*:\\s+)false/\\1true/g\n         67┆ session.Options = &sessions.Options{\n         68┆ \tMaxAge:   -1,\n         69┆ \tHttpOnly: false, //set to false for xss :)\n         70┆ }"
          },
          {
             "description":"A session cookie was detected without setting the 'Secure' flag. The 'secure' flag for\n        cookies prevents the client from transmitting the cookie over insecure channels such as\n        HTTP.  Set the 'Secure' flag by setting 'Secure' to 'true' in the Options struct.",
             "details":"https://sg.run/PJdE\n\n         ▶▶┆ Autofix ▶ s/(Secure\\s*:\\s+)false/\\1true/g\n         28┆ session.Options = &sessions.Options{\n         29┆ \tPath:     \"/\",\n         30┆ \tMaxAge:   3600,\n         31┆ \tHttpOnly: false, //set to false for xss :)\n         32┆ }\n          ⋮┆----------------------------------------\n         ▶▶┆ Autofix ▶ s/(Secure\\s*:\\s+)false/\\1true/g\n         67┆ session.Options = &sessions.Options{\n         68┆ \tMaxAge:   -1,\n         69┆ \tHttpOnly: false, //set to false for xss :)\n         70┆ }"
          }
       ]
    },
    {
       "file":"user/user.go",
       "issues":[
          {
             "description":"Detected use of an insecure cryptographic hashing method. This method is known to be broken\n        and easily compromised. Use SHA256 or SHA3 instead.",
             "details":"https://sg.run/l2gj\n\n        160┆ hasher := md5.New()"
          },
          {
             "description":"Detected MD5 hash algorithm which is considered insecure. MD5 is not collision resistant and\n        is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead.",
             "details":"https://sg.run/2xB5\n\n        160┆ hasher := md5.New()"
          }
       ]
    },
    {
       "file":"util/cookie.go",
       "issues":[
          {
             "description":"Variable level is assigned from two different sources: \\'cookievalue\\' and \\'\"low\"\\'. Make sure\n        this is intended, as this could cause logic bugs if they are treated as they are the same\n        object.",
             "details":"https://sg.run/gL3y\n\n         10┆ level := cookievalue\n         11┆ if level == \"\" {\n         12┆ \tlevel = \"low\"\n         13┆ }"
          },
          {
             "description":"A session cookie was detected without setting the 'HttpOnly' flag. The 'HttpOnly' flag for\n        cookies instructs the browser to forbid client-side scripts from reading the cookie which\n        mitigates XSS attacks. Set the 'HttpOnly' flag by setting 'HttpOnly' to 'true' in the\n        Cookie.",
             "details":"https://sg.run/b73e\n\n         ▶▶┆ Autofix ▶ s/(HttpOnly\\s*:\\s+)false/\\1true/g\n         32┆ cookie := http.Cookie{\n         33┆ \t//Path : \"/\",\n         34┆ \t//Domain : \"localhost\",\n         35┆ \tName: name,\n         36┆ \tValue: value,\n         37┆ }\n          ⋮┆----------------------------------------\n         ▶▶┆ Autofix ▶ s/(HttpOnly\\s*:\\s+)false/\\1true/g\n         48┆ cookie := &http.Cookie{\n         49┆ \tName:     name,\n         50┆ \tValue:    \"\",\n         51┆ \tExpires: time.Unix(0, 0),\n         52┆ }"
          },
          {
             "description":"A session cookie was detected without setting the 'Secure' flag. The 'secure' flag for\n        cookies prevents the client from transmitting the cookie over insecure channels such as\n        HTTP.  Set the 'Secure' flag by setting 'Secure' to 'true' in the Options struct.",
             "details":"https://sg.run/N4G7\n\n         ▶▶┆ Autofix ▶ s/(Secure\\s*:\\s+)false/\\1true/g\n         32┆ cookie := http.Cookie{\n         33┆ \t//Path : \"/\",\n         34┆ \t//Domain : \"localhost\",\n         35┆ \tName: name,\n         36┆ \tValue: value,\n         37┆ }\n          ⋮┆----------------------------------------\n         ▶▶┆ Autofix ▶ s/(Secure\\s*:\\s+)false/\\1true/g\n         48┆ cookie := &http.Cookie{\n         49┆ \tName:     name,\n         50┆ \tValue:    \"\",\n         51┆ \tExpires: time.Unix(0, 0),\n         52┆ }"
          }
       ]
    },
    {
       "file":"util/database/database.go",
       "issues":[
          {
             "description":"String-formatted SQL query detected. This could lead to SQL injection if the string is not\n        sanitized properly. Audit this call to ensure the SQL is not manipulable by external data.",
             "details":"https://sg.run/ydEr\n\n         24┆ _, err = db.Exec(\"CREATE DATABASE IF NOT EXISTS \" + config.Dbname)"
          }
       ]
    },
    {
       "file":"util/template.go",
       "issues":[
          {
             "description":"Detected directly writing or similar in 'http.ResponseWriter.write()'. This bypasses HTML\n        escaping that prevents cross-site scripting vulnerabilities. Instead, use the\n        'html/template' package and render data using 'template.Execute()'.",
             "details":"https://sg.run/EkbA\n\n         35┆ w.Write(b)"
          },
          {
             "description":"Semgrep could not determine that the argument to 'template.HTML()' is a constant.\n        'template.HTML()' and similar does not escape contents. Be absolutely sure there is no user-\n        controlled data in this template. If user data can reach this template, you may have a XSS\n        vulnerability. Instead, do not use this function and use 'template.Execute()'.",
             "details":"https://sg.run/3xDb\n\n         45┆ return template.HTML(text)"
          }
       ]
    },
    {
       "file":"vulnerability/csa/csa.go",
       "issues":[
          {
             "description":"Detected use of an insecure cryptographic hashing method. This method is known to be broken\n        and easily compromised. Use SHA256 or SHA3 instead.",
             "details":"https://sg.run/l2gj\n\n         62┆ hasher := md5.New()"
          },
          {
             "description":"Detected MD5 hash algorithm which is considered insecure. MD5 is not collision resistant and\n        is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead.",
             "details":"https://sg.run/2xB5\n\n         62┆ hasher := md5.New()"
          }
       ]
    },
    {
       "file":"vulnerability/idor/idor.go",
       "issues":[
          {
             "description":"Variable uid is assigned from two different sources: \\'HTMLEscapeString(r.FormValue(\"uid\"))\\'\n        and \\'sid\\'. Make sure this is intended, as this could cause logic bugs if they are treated as\n        they are the same object.",
             "details":"https://sg.run/gL3y\n\n         88┆ uid := HTMLEscapeString(r.FormValue(\"uid\"))\n         89┆ name := HTMLEscapeString(r.FormValue(\"name\"))\n         90┆ city := HTMLEscapeString(r.FormValue(\"city\"))\n         91┆ number := HTMLEscapeString(r.FormValue(\"number\"))\n         92┆ \n         93┆ res := &DataResponse{}\n         94┆ if uid != cid || uid == \"\" || cid == \"\" {\n         95┆ \n         96┆ \tres.Status = \"0\"\n         97┆ \tres.Message = \"Missing User Id\"\n           [hid 17 additional lines, adjust with --max-lines-per-finding] \n        130┆ uid := HTMLEscapeString(r.FormValue(\"uid\"))\n        131┆ name := HTMLEscapeString(r.FormValue(\"name\"))\n        132┆ city := HTMLEscapeString(r.FormValue(\"city\"))\n        133┆ number := HTMLEscapeString(r.FormValue(\"number\"))\n        134┆ \n        135┆ signature := Md5Sum(uid)\n        136┆ \n        137┆ res := &DataResponse{}\n        138┆ if sign != signature{\n        139┆ \n           [hid 19 additional lines, adjust with --max-lines-per-finding] \n     go.lang.security.audit.crypto.bad_imports.insecure-module-used\n        Detected use of an insecure cryptographic hashing method. This method is known to be broken\n        and easily compromised. Use SHA256 or SHA3 instead.\n        https://sg.run/l2gj\n\n        164┆ hasher := md5.New()"
          },
          {
             "description":"Detected MD5 hash algorithm which is considered insecure. MD5 is not collision resistant and\n        is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead.",
             "details":"https://sg.run/2xB5\n\n        164┆ hasher := md5.New()"
          }
       ]
    },
    {
       "file":"vulnerability/xss/xss.go",
       "issues":[
          {
             "description":"Found a formatted template string passed to 'template.HTML()'.  'template.HTML()' does not\n        escape contents.  Be absolutely sure there is no user-controlled data in this template.  If\n        user data can reach this template, you may have a XSS vulnerability.",
             "details":"https://sg.run/weE0\n\n         52┆ notFound := fmt.Sprintf(\"<b><i>%s</i></b> not found\",term)\n         53┆ value := fmt.Sprintf(\"%s\", term)\n         54┆ \n         55┆ if term == \"\"{\n         56┆ \tdata[\"term\"] = \"\"\n         57┆ }else if vulnDetails == \"\"{\n         58┆ \tdata[\"value\"] = template.HTML(value)\n         59┆ \tdata[\"term\"] = template.HTML(notFound) //vulnerable function\n         60┆ }else{\n         61┆ \tvuln := fmt.Sprintf(\"<b>%s</b>\",term)\n           [hid 4 additional lines, adjust with --max-lines-per-finding] \n         53┆ value := fmt.Sprintf(\"%s\", term)\n         54┆ \n         55┆ if term == \"\"{\n         56┆ \tdata[\"term\"] = \"\"\n         57┆ }else if vulnDetails == \"\"{\n         58┆ \tdata[\"value\"] = template.HTML(value)\n         59┆ \tdata[\"term\"] = template.HTML(notFound) //vulnerable function\n         60┆ }else{\n         61┆ \tvuln := fmt.Sprintf(\"<b>%s</b>\",term)\n         62┆ \tdata[\"value\"] = template.HTML(value)\n           [hid 3 additional lines, adjust with --max-lines-per-finding] \n         61┆ vuln := fmt.Sprintf(\"<b>%s</b>\",term)\n         62┆ data[\"value\"] = template.HTML(value)\n         63┆ data[\"term\"] = template.HTML(vuln)\n          ⋮┆----------------------------------------\n         96┆ inlineJS := fmt.Sprintf(js,uid, p.Name, p.City, p.PhoneNumber)\n         97┆ \n         98┆ data[\"title\"] = \"Cross Site Scripting\"\n         99┆ \n        100┆ data[\"inlineJS\"] = template.HTML(inlineJS) //this will render the javascript on client browser"
          },
          {
             "description":"Semgrep could not determine that the argument to 'template.HTML()' is a constant.\n        'template.HTML()' and similar does not escape contents. Be absolutely sure there is no user-\n        controlled data in this template. If user data can reach this template, you may have a XSS\n        vulnerability. Instead, do not use this function and use 'template.Execute()'.",
             "details":"https://sg.run/3xDb\n\n         58┆ data[\"value\"] = template.HTML(value)\n          ⋮┆----------------------------------------\n         59┆ data[\"term\"] = template.HTML(notFound) //vulnerable function\n          ⋮┆----------------------------------------\n         62┆ data[\"value\"] = template.HTML(value)\n          ⋮┆----------------------------------------\n         63┆ data[\"term\"] = template.HTML(vuln)\n          ⋮┆----------------------------------------\n        100┆ data[\"inlineJS\"] = template.HTML(inlineJS) //this will render the javascript on client browser"
          }
       ]
    }
 ]
 
 export default info;