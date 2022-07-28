rules = {
    "secrets": ["semgrep", "--config", "p/secrets"],
    "bsa": ["semgrep", "--config", "p/owasp-top-ten"],
    "sql": ["semgrep", "--config", "p/sql-injection"],
    "jwt": ["semgrep", "--config", "p/jwt"],
    "r2c": ["semgrep", "--config", "p/r2c"],
    "nodejs": ["semgrep", "--config", "p/nodejsscan"],
    "react": ["semgrep", "--config", "p/react"],
    "golang": ["semgrep", "--config", "p/golang"],
    "javascript": ["semgrep", "--config", "p/javascript"],
    "kotlin": ["semgrep", "--config", "p/kotlin"],
    "django": ["semgrep", "--config", "p/django"],
    "full": ["semgrep", "--config=auto"],
}


pattern = "⋮┆----------------------------------------\\n\s\s\s\s\s[a-z]"
