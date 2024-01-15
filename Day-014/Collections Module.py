def main():
    A = input().split()
    N = len(A)
    B = input().split()
    M = len(B)
    # Your code goes here
    for i in range(M):
        if "".join(A).find(B[i])==-1:
            print(-1)
        else:
            for j in range(N):
                if B[i]==A[j]:
                    print(j,end=" ")
            print()
    return 0

if __name__ == '__main__':
    main()-
