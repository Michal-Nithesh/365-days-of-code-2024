from collections import Counter
def main():
    N=int(input())
    chocos=Counter(map(int,input().split()))
    M=int(input())
    tot=0
    for i in range(M):
        x,y=map(int,input().split())
        if y in chocos and chocos[y]>0:
            tot+=x
            chocos[y]-=1
    print(tot)  
    return 0
if __name__ == '__main__':
    main()
