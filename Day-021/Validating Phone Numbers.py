def main():
    # YOUR CODE GOES HERE
    # Please take input and print output to standard input/output (stdin/stdout)
    # E.g. 'input()/raw_input()' for input & 'print' for output
    N = int(input())

    for i in range(N):
        try:
            num = int(input())
            if (int(num/1000000000)) == 6 or (int(num/1000000000)) == 7 or (int(num/1000000000)) == 8 or (int(num/1000000000)) == 9:
                print("YES")
            else:
                print("NO")
        except:
            print("NO")
    
    
    return 0

if __name__ == '__main__':
    main()
