#!/bin/bash
# Incase you have to take input, please take it from file named 'input' (without quotes) [e.g. cat input]
# Print your final output to console. Do not redirect to another file.
# E.g. Suppose the question is to print the content of a file.
#      Your solution should be 'cat input'(without quotes) instead of 'cat input > output'. That's it!
# Your code starts from here...
#!/bin/bash
# Incase you have to take input, please take it from file named 'input' (without quotes) [E.g. grep input OR cat input]
# Print you final output to console, do not redirect to another file
# E.g. Suppose the question is to print the content of a file.
#      Your solution should be 'cat input'(without quotes) instead of 'cat input > output'. That's it!
# Your code starts from here...

#!/bin/sh

eof=1   #denotes if end of file has been reached or not, 0 denotes end of file
while [ $eof -eq 1 ]
do
	eof=$((eof-1))  #we will be reading the whole file inside the loop
	read num_test_cases      #first line of input denotes test cases
	while [ $num_test_cases -gt 0 ]     #loop while num_test_cases is greater than 0
	do
		read n      #read the number N
		a=1     
		b=1
		c=$((a + b))
		if [ $n -eq 1 ]     #if n is 1, echo 1
		then
			echo 1
		elif [ $n -eq 2 ]	#if n is 2, echo 1
		then
			echo 1
		elif [ $n -eq 3 ]   #if n is 3, echo 2 (c is 2)
		then
			echo $c
		else
			n=$((n - 3))    #as n = 1, 2 and 3 is handled, we don't need to loop over them
			while [ $n -gt 0 ]
			do
				a=$((b))
				b=$((c))
				c=$((a + b))
				n=$((n - 1))
			done
			echo $c         #final answer is c
		fi      #end of id statements
		num_test_cases=$((num_test_cases - 1))        #decrement number of test cases
	done
done < input        #read from file "input"
