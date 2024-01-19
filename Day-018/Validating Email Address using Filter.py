#YOUR CODE GOES HERE
import re
N=int(input())
patern = r'^[\w\-]+@[\w\.-]+\.[a-zA-Z]{2,3}$'
m = []
for i in range(N):
    mail = input()
    m.append(mail)
o = sorted(m)  
print(list(filter(lambda x:re.match(patern,x),o)))
