import re

def main():
    txt = "The quick brown fox jumps over the lazy dog"
    
    # print the list of 'o' present in the string txt
    print(re.findall("o",txt))
    
    # print the index of first occurrence of 'h' in the string txt using search function
    print(re.search("h",txt).start())
    # convert the first 3 white-space character into '#' and print the changed txt
    print(re.sub("\s","#",txt,3))
    return 0

if __name__ == '__main__':
    main()
