rules = {
    "secrets": ["semgrep", "--config", "p/secrets"],
    "bsa": ["semgrep", "--config", "p/owasp-top-ten"],
    "full": ["semgrep", "--config=auto"],
}


pattern = "⋮┆----------------------------------------\\n\s\s\s\s\s[a-z]"
