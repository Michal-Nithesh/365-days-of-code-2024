def main():
    S = input()
    #Your code goes here
    b=[False,False,False,False,False]
    for c in S:
        if(c.isalnum()):
            b[0]=True
        if(c.isalpha()):
            b[1]=True
        if(c.isdigit()):
            b[2]=True
        if(c.islower()):
            b[3]=True
        if(c.isupper()):
            b[4]=True
           
    for i in range(0,5):
        print(b[i])
       
    print(b)   
    return 0

if __name__ == '__main__':
    main()
