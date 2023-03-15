# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'


# Pseudocode
# - Define a new method even_or_odd that
# - Input: Integer
# - String interpolated message stating whether the input is even or odd
# - Use the even? method to return a true or false value
# - Use a ternary operator to return one of two string interpolated messages stating if the given number is even or odd

def even_or_odd num 
    num.even? ? "#{num} is even" : "#{num} is odd"
end

p even_or_odd num1
p even_or_odd num2
p even_or_odd num3


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudocode
# - Define a method vowel_remover with a string as an argument
# - input - string
# - output - the same string, but with all vowels removed
# - use delete with "aeiou" as an argument

def vowel_remover string
    string.delete("aeiou")
end

p vowel_remover beatles_album1
p vowel_remover beatles_album2
p vowel_remover beatles_album3


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

#Pseudocode
# - Create a method palindrome_checker that takes in a string as an argument
# - Input - a string
# - Output - a statement of whether or not the string is a palindrome (the same word forwards and backwards)
# - Use a conditional statement checking for equality between string, and string.reverse
# - add downcase method to handle casing issues

def palindrome_checker string
    if string.downcase == string.reverse.downcase
        p "#{string} is a palindrome"
    else 
        p "#{string} is not a palindrome"
    end
end

palindrome_checker palindrome_tester1
palindrome_checker palindrome_tester2
palindrome_checker palindrome_tester3