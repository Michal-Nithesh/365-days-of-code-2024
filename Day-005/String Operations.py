def main():
    S = input()
    
    #Print length of the string S
    n = len(S)
    print(n)
    #Print the first occurence of the letter 'a' in S
    print(S.index("a"))
    #Note it is guaranteed that letter a is present in the string S
    #Print all the characters with even index in s
    modstring=S[::2]
    print(modstring)
    
    return 0

if __name__ == '__main__':
    main()
