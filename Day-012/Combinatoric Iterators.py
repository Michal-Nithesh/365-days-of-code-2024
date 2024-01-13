from itertools import permutations
def main():
    # YOUR CODE GOES HERE
    # Please take input and print output to standard input/output (stdin/stdout)
    # E.g. 'input()/raw_input()' for input & 'print' for output
    s,k = input().split()
    k = int(k)
    if (1<=k<=len(s)) and s.islower():
        a = map(list,permutations(s,k))
        for i in sorted(a):
            for j in i:
                print(j,end="")
            print()
    return 0

if __name__ == '__main__':
    main()
