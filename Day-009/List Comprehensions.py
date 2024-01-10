def main():
    str_list = ['given', 'intern', 'InterviewBit', 'network', 'local', 'multiple', 'define', 'nodes', 'algorithm', 'allows', 'community', 'phase', 'single']
    my_list = []
    my_list =[str_list[x] for x in range(len(str_list)) if len(str_list[x]) % 2 != 0]
    
    print(my_list)
    return 0

if __name__ == '__main__':
    main()
