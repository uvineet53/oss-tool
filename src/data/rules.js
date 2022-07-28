const rulesBasic = [
    { name: "Basic Security Audit", value: "bsa" },
    { name: "Secrets", value: "secrets" },
    { name: "Full Scan", value: "full" },
]
const rulesAdvanced = [
    { name: "SQL Injection", value: "sql" },
    { name: "JWT Authentication", value: "jwt" },
    { name: "R2C Audit", value: "r2c" },
]
const rulesByFramework = [
    { name: "Node Js", value: "nodejs" },
    { name: "Django", value: "django" },
    { name: "React", value: "react" },
]
const rulesByLanguage = [
    { name: "Golang", value: "golang" },
    { name: "Javascript", value: "javascript" },
    { name: "Kotlin", value: "kotlin" },
]

const rules = [
    {label:"Basic Rules",rule:rulesBasic},
    {label:"Advanced Rules",rule:rulesAdvanced},
    {label:"Rules By Language",rule:rulesByLanguage},
    {label:"Rules By Framework",rule:rulesByFramework}
]
export default rules;