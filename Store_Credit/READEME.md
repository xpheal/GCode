# Store_Credit
A javascript solution for one of the sample questions from Google Code Jam 

Given a number of credits, find out the pair of items that you can buy in the store to use up your credits

For example:
A person is given 100 credits

Price of items in the store is 25, 64, 5, 32, 108, 75

The two items the person should buy is 25 and 75 which adds up to 100

Uses a binary search which reduce the complexity to O(NlogN) instead of the naive approach O(N^2/2)