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