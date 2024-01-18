from functools import reduce
def main():
   
    # Use map to print the square of each numbers
    my_ints = [4, 6, 3, 9, 2, 8, 12]
    def sqrt(a):
        return a*a
   
    print(list(map(sqrt,my_ints)))
   
   
    # Use filter to print only the names that are less than or equal to seven letters

    my_names = ["scaler", "interviewbit", "rishabh", "student", "course"]
   
    def checknames(score):
        lenn = len(score)
        return lenn<=7
       
    print(list(filter(checknames,my_names)))
   
    # Use reduce to print the product of these numbers
    my_numbers = [4, 6, 9, 23, 5]
    print(reduce(lambda x,y : x*y,my_numbers))
   
    # Fix all three respectively.
    map_result = list(map(lambda x: x, my_ints))
    filter_result = list(filter(lambda name: name, my_names))
    reduce_result = reduce(lambda num1, num2: num1 * num2, my_numbers, 0)
   
    print(map_result)
    print(filter_result)
    print(reduce_result)
    return 0

if __name__ == '__main__':
    main()
