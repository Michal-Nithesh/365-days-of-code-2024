#!/bin/bash
# Incase you have to take input, please take it from file named 'input' (without quotes) [e.g. cat input]
# Print your final output to console. Do not redirect to another file.
# E.g. Suppose the question is to print the content of a file.
#      Your solution should be 'cat input'(without quotes) instead of 'cat input > output'. That's it!
# Your code starts from here...
while IFS= read -r line; do
   n=${#line}
   flag=0

   if [ "$n" -eq 12 ]; then
      flag=1
      ch1="${line:3:1}"
      ch2="${line:7:1}"
      if [ "$ch1" != "-" ] || [ "$ch2" != "-" ]; then
         flag=0
      fi
        for i in 0 1 2 4 5 6 8 9 10 11; do
            char="${line:i:1}"
            if [[ $char > '9' || $char < '0' ]]; then
                flag=0
            fi
        done
   elif [ "$n" -eq 14 ]; then
      flag=1
      ch1="${line:0:1}"
      ch2="${line:4:1}"
      ch3="${line:5:1}"
      ch4="${line:9:1}"
      if [ "$ch1" != "(" ] || [ "$ch2" != ")" ] || [ "$ch3" != " " ] || [ "$ch4" != "-" ]; then
         flag=0
      fi
        for i in 1 2 3 6 7 8 10 11 12 13; do
            char="${line:i:1}"
            if [[ $char > '9' || $char < '0' ]]; then
                flag=0
            fi
        done
   fi

   if [ "$flag" -eq 1 ]; then
      echo "$line"
   fi
done < input
