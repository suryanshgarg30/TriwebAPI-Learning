import yagmail # type: ignore
user = "thimnefork@gmail.com"
app_code = "zkjjhbuxoef"

to = "suryanshgarg.1130@gmail.com"
subject = "my Email subject 1"
content = ["my email body has these all values to test","what"]
with yagmail.SMTP(user, app_code) as yag:
    yag.send(to,subject,content)