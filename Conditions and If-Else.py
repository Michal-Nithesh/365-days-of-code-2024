def main():
    num = int(input())
    # YOUR CODE GOES HERE
    if (num >= 90): 
        print("A")
    elif (num >= 80):
        print("B")
    elif (num >= 70):
        print("C")
    elif (num >= 60):
        print("D")
    elif (num >= 50):
        print("E")
    else:
        print("F")

    return 0

if __name__ == '__main__':
    main()
