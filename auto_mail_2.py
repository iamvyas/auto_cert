import os
import smtplib
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart

def SendMail(namee,email):
    image_det= namee+'.jpg'
    img_data = open(image_det, 'rb').read()
    msg = MIMEMultipart()
    msg['Subject'] = 'UNRAVEL Certificate'
    msg['From'] = 'knowisvce@gmail.com'
    msg['To'] = email #'sbvyas07@gmail.com'

    text = MIMEText("Greetings from KNOW I!")
    text2 = MIMEText("We extend our heartfelt gratitude to all participants of UNRAVEL for making this event a great success.")
    text3 = MIMEText("We encourage you to take part in future events of KNOW I.")
    text4= MIMEText("Please find the participation certificate attached below.")
    text5 = MIMEText("Regards,")
    text6 = MIMEText("KNOW-I.")
    msg.attach(text)
    msg.attach(text2)
    msg.attach(text3)
    msg.attach(text4)
    msg.attach(text5)
    msg.attach(text6)

    image = MIMEImage(img_data, name=os.path.basename(image_det))
    msg.attach(image)

    s = smtplib.SMTP('smtp.gmail.com',587)
    s.ehlo()
    s.starttls()
    s.ehlo()
    s.login("your_email@whoknows.com","password")
    s.sendmail('knowisvce@gmail.com',email, msg.as_string())
    s.quit()
    return

#SendMail()

#to open json files
import json
f = open('result.json')
data = json.load(f)
f.close()

for i in data:
    print(i)
    for (k, v) in i.items():
        #print("Key: " + k)
        #print("Value: " + str(v))
        if(k=="Name"):
            name_send= v
        if(k=="Email"):
            mail_send = v        

    print(name_send)
    print(mail_send)
    SendMail(name_send,mail_send)
