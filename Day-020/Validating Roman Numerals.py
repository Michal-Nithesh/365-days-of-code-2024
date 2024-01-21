import re
def main():
    # YOUR CODE GOES HERE
    # Please take input and print output to standard input/output (stdin/stdout)
    # E.g. 'input()/raw_input()' for input & 'print' for output
    N =int(input())
    for i in range(N):
        if(re.search("^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$",input())):
            print("YES")
        else:
            print("NO")

    return 0

if __name__ == '__main__':
    main()
