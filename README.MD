## Introduce ##
___
This repository is created in the interest to train my js solving simple tasks.

### Description for this tasks ####
___
- #### [Abbreviation](./Abbreviation) ####
##### [Abbreviate a Two Word Name](https://www.codewars.com/kata/abbreviate-a-two-word-name/javascript) #####
___
>Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
 The output should be two capital letters with a dot seperating them. It should look like this:
   
    Sam Harris => S.H
    
    Patrick Feeney => P.F
___
- #### [FirstLetter](./FirstLetter) ####
>Реализуйте функцию, которая делает заглавной первую букву каждого слова в предложении.

   ```js
   solution('hello, world!'); // Hello, World!
   ```
___
- #### [RomanNumbers](./RomanNumbers) ####
##### [Roman Numerals Decoder](https://www.codewars.com/kata/roman-numerals-decoder) #####
___
>Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

>Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

>Example:

    solution('XXI'); // should return 21
>Help:

    Symbol    Value
    I          1
    V          5
    X          10
    L          50
    C          100
    D          500
    M          1,000

*Courtesy of rosettacode.org*
___
- #### [Comparers](./comparers) ####
>Функции **lessThan**, **greaterThan** и **isEqual** в модуле **comparers** сравнивают две строки и возвращают **true/false**.

>Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).

>Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.

>Примеры:
    
     greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
     greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
     lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
     isEqual('liSp', 'lisP'); // true

    
>Допишите необходимые части функций **bigLettersCount** и **compare**
> для того, чтобы заработали функции **lessThan**, **greaterThan** и **isEqual**.
    
>Функция **compare**, принимающая две строки **first** и **second**, работает по следующему алгоритму:
    
 <li>Если в первой строке больше заглавных символов, то возвращается 1.</li>
 <li>Если во второй строке больше заглавных символов, то возвращается -1.</li>
 <li>Иначе возвращается 0.</li>
 
 ___
 - #### [findMultiples](./findMultiples) ####
 ##### [Find Multiples of a Number](https://www.codewars.com/kata/find-multiples-of-a-number/javascript) #####
 ___
 > In this simple exercise, you will build a program that takes a value, `integer`, 
 >and returns a list of its multiples up to another value, `limit`. 
 >If `limit` is a multiple of `integer`, it should be included as well. 
 >There will only ever be positive integers passed into the function, not consisting of 0. 
 >The limit will always be higher than the base.
 
 >For example, if the parameters passed are `(2, 6)`, the function should return `[2, 4, 6]` as 2, 4, and 6 are the multiples of 2 up to 6.
 
 >If you can, try writing it in only one line of code.
___
- #### [addDigits](./addDigits) ####
>Реализуйте и экспортируйте по умолчанию функцию **addDigits**, которая работает следующим образом:
     
>Дано неотрицательное целое число **num**. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.
     
 >Для числа **38** процесс будет выглядеть так:

    1. 3 + 8 = 11
    2. 1 + 1 = 2
   `Результат: 2`
>Пример:
   
    addDigits(10); // 1
    addDigits(19); // 1
    addDigits(38); // 2
    addDigits(1259); // 8 
