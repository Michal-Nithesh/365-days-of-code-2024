#Return the factorial of the number N
def factorial(N):
    # Your code goes here
    if N == 0:
        return 1
     
    return N * factorial(N-1) 
